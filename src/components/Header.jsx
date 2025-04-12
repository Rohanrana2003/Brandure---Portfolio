import React from "react";

const Header = () => {
  return (
    <div className="flex text-center justify-between items-center">
      <div className="logo ">
        <img src="src/assets/logo.png" alt="Logo" className="w-24 h-24 abso" />
      </div>

      <ul className="mt-0 flex space-x-10 text-zinc-600  text-[21px] font-normal transition duration-300 ease-in-out ">
        <li className="cursor-pointer hover:text-[#786b64]">Home</li>
        <li className="cursor-pointer hover:text-[#786b64]">About Us</li>
        <li className="cursor-pointer hover:text-[#786b64]">Our Services</li>
        <li className="cursor-pointer hover:text-[#786b64]">Projects</li>
      </ul>

      <div>
        <button className="mt-0 bg-[#4A4E69] hover:bg-[#786b64] text-white text-[17px] rounded-md px-4 py-2 font-semibold shadow shadow-black transition duration-300 ease-in-out ">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
