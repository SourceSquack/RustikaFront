import React, { useCallback, useEffect, useState } from "react";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    }


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);



  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-1 md:px-4 py-1 flex md:justify-between items-center transition duration-500 ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""
          }`}
      >
        <div>
          <Image
            src="/images/logorustika.png"
            width={110}
            height={110}
            alt="Logo"
          />
        </div>
        <div className="ml-19 mx-4 gap-6 hidden md:flex  text-lg">
          <NavbarItem label="Home" address="/" />
          <NavbarItem label="Menú" address="/menu" />
          <NavbarItem label="Bar" address="/bar" />
          <NavbarItem label="Reservar" address="/reservar" />
          <NavbarItem label="Nosotros" address="/about" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-row-reverse items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-base">Buscar</p>
          <ChevronDownIcon
            className={`w-4 text-white fill-white transition ${showMobileMenu ? "rotate-180" : "rotate-0"
              }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
