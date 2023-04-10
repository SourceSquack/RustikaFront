import Head from "./head";
import { useRef } from "react";

export default function Home() {
  const mainRef = useRef(null);

  return (
    <div>
      <Head />
      <div className="relative h-screen w-screen bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        <nav className="px-12 py-5">
          <img src="/images/logorustika.png" alt="logo" className="w-32" />
        </nav>
        <div ref={mainRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-5xl text-white font-bold text-center">Rustika Restaurant</h1>
          <p className="text-2xl text-white text-center">El mejor restaurante de filandia, Quindio</p>
          <div className="flex justify-center mt-10 gap-5">
            <button className="bg-white text-black px-10 py-3 rounded-full text-lg font-medium">
              Reservar
            </button>
            <button className="bg-olive text-black px-10 py-3 rounded-full text-lg font-medium">
              Ver Menú
              </button>
          </div>
      </div>
    </div>
  </div>
  );
}
