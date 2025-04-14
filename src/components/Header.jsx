import React from "react";

const Header = () => {
  return (
    <div className=" flex text-center justify-between items-center px-[30px] lg:px-[120px] md:px-[40px]">
      <div className="logo ">
        <img src="src/assets/logo.png" alt="Logo" className="w-20 md:w-24 " />
      </div>

      <ul className="font-heading mt-0 flex space-x-10 text-zinc-600  text-[21px] font-normal transition duration-300 ease-in-out max-md:hidden">
        <li className="cursor-pointer hover:text-[#000]">Home</li>
        <li className="cursor-pointer hover:text-[#000]">About Us</li>
        <li className="cursor-pointer hover:text-[#000]">Our Services</li>
        <li className="cursor-pointer hover:text-[#000]">Projects</li>
      </ul>

      <div>
        <button className="mt-0 bg-[#4A4E69] hover:bg-[#786b64] text-white text-[14px] md:text-[16px] rounded-md px-4 py-2 shadow shadow-black transition duration-300 ease-in-out ">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Header;
