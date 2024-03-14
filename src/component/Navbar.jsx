import React, { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className=" text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
      <h1 className=" w-full text-3xl font-bold text-green-700">REACT.</h1>
      <ul className=" hidden md:flex cursor-pointer">
        <li className=" p-4">Home</li>
        <li className=" p-4">Company </li>
        <li className=" p-4">Resource</li>
        <li className=" p-4">About</li>
        <li className=" p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className=" block md:hidden">
        {!nav ? <IoMdMenu size={22} /> : <IoMdClose size={22} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className=" w-full text-3xl font-bold text-green-700">REACT.</h1>
        <ul className=" p-5 uppercase">
          <li className=" p-4 border-b border-gray-600">Home</li>
          <li className=" p-4 border-b border-gray-600">Company </li>
          <li className=" p-4 border-b border-gray-600">Resource</li>
          <li className=" p-4 border-b border-gray-600">About</li>
          <li className=" p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
