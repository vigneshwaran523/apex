import React from "react";
import { asserts } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between px-4 bg-gray-900 text-white shadow-md sticky top-0 z-50 h-16">
      {/* Logo */}
      <div className="flex-1 flex justify-center lg:justify-start">
       <img
  src={asserts.logo}
  alt="Apex Engineering Logo"
  className="h-[132px] sm:h-[132px] md:h-[136px] w-auto object-contain"
/>

      </div>
    </nav>
  );
};

export default Navbar;
