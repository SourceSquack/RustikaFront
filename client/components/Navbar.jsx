import { useState, useCallback } from "react";
import NavbarItem from "./NavbarItem";
import MobileMenu from "./MobileMenu";
import { BsChevronDown } from "react-icons/bs";


const Navbar = () => {
const [showMobileMenu, setShowMobileMenu] = useState(false);

const toggleMobileMenu = useCallback(() => {
setShowMobileMenu( current => !current);
}, []);

    return (
<nav className="w-full fixed z-40">
<div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 bg-transparent bg-opacity-90">
  <img
    className="h-24 lg:h-27"
    src="/images/logorustika.png"
    alt="Rustika"
  />
  <div className="flex-row ml-20 gap-7 hidden lg:flex">
      <NavbarItem label="Home" address="/"/>
      <NavbarItem label="Menú" address="/menu"/>
      <NavbarItem label="Bar" address="/bar"/>
      <NavbarItem label="Contact" address="/contact"/>
  </div>
  <div
  onClick={toggleMobileMenu}
  className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
      <p className="text-white text-sm">Browse</p>
      <BsChevronDown className="text-white transition" />
      <MobileMenu visible={showMobileMenu}/>
  </div>
</div>
</nav>
);
};

export default Navbar;