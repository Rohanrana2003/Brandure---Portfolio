import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" flex text-center justify-between items-center px-[30px] lg:px-[120px] md:px-[40px]">
      <div className="logo ">
        <Link to={"/"}>
          <img src="/assets/logo.png" alt="Logo" className="w-20 md:w-24 " />
        </Link>
      </div>

      <ul className="font-heading mt-0 flex space-x-10 text-zinc-600  text-[21px] font-normal transition duration-300 ease-in-out max-md:hidden">
        <li className="cursor-pointer hover:text-[#000]">
          <a href="/#home">Home</a>
        </li>
        <li className="cursor-pointer hover:text-[#000]">
          <a href="/#about">About Us</a>{" "}
        </li>
        <li className="cursor-pointer hover:text-[#000]">
          <a href="/#services">Our Services</a>{" "}
        </li>
        <li className="cursor-pointer hover:text-[#000]">
          <Link to="/portfolio">Portfolio</Link>{" "}
        </li>
      </ul>

      <div>
        <a href="#contact">
          <button className="mt-0 bg-[#4A4E69] hover:bg-[#786b64] text-white text-[14px] md:text-[16px] rounded-md px-4 py-2 shadow shadow-black transition duration-300 ease-in-out ">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
