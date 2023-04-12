import { useEffect, useState } from "react";
import Head from "./head";
import Navbar from "@/components/Navbar";
import MenuItem from "@/components/MenuItem";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";


export default function HomePage() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  return (
    <div>
      <Head />
      <div className="relative h-screen w-screen bg-[url('/images/isa.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <nav className="fixed top-0 left-0 w-full bg-transparent bg-opacity-70 h-16 z-10 transition-opacity duration-500 ease-in-out">
          <Navbar />
          <div></div>
        </nav>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl text-amber-600 font-bold text-center">
            Rustika Restaurant
          </h1>
          <p className="text-2xl font-bold text-amber-600 text-center">
            Parrilla, Café, Bar{" "}
          </p>
          <p className="text-sm font-extrabold text-amber-600 text-center">
            Filandia, Quindio
          </p>
          <div className="flex justify-center mt-10 gap-5">
            <div className="flex justify-center mt-10">
            <button className="bg-olive text-white text-center px-8 py-3 rounded-full text-lg font-medium">
              <MenuItem title="Reservar" address="/reservar" />
            </button>
            </div>
            <div className="flex justify-center mt-10">
              <button className="bg-olive text-white px-12 py-3 text-center rounded-full text-lg font-medium">
                <MenuItem title="Menú" address="/menu" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Contact />
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
