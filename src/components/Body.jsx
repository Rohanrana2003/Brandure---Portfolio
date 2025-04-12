import React from "react";

const Body = () => {
  return (
    <div className="bg-[#F5F1EE] min-h-screen text-white text-center relative">
      <div className="floating-hello absolute flex justify-center right-0 left-0 text-center mt-6">
        <div className="relative border-2 text-[#333333] border-black font-semibold p-2 px-4 text-base rounded-full ">
          Hello!
          <img
            src="src/assets/hello 2.png"
            alt="Hello"
            className="absolute h-12  top-9 right-[88px]"
          />
          <img
            src="src/assets/hello 1.png"
            alt="Hello"
            className="absolute h-7 -top-6 -right-6"
          />
        </div>
      </div>

      <div className="hero-section flex justify-center pt-28 text-[#333333] ">
        <div className="hero-text text-left w-[70%]">
          <h1 className="relative z-10 text-[70px] font-bold leading-[1.2]">
            Brighten Your <span className="text-white">Brand</span> <br /> with
            Sunstream Digital.{" "}
            <img
              className="absolute -z-10 -top-3 right-[130px]"
              src="src/assets/hero-rectangle.png"
            />
          </h1>

          <p className="text-[24px] mt-4 w-[80%] mb-20">
            We specialize in creating innovative marketing strategies that drive
            results. Let us help you shine brighter in the digital landscape.
          </p>

          <div className="">
            <button className="bg-[#4A4E69] hover:bg-[#786b64] text-white text-[17px] rounded-md px-6 py-3 font-semibold shadow shadow-black transition duration-300 ease-in-out">
              Get Started
            </button>
            <button className="bg-[#786b64] hover:bg-[#4A4E69] text-white text-[17px] rounded-md px-6 py-3 font-semibold shadow shadow-black transition duration-300 ease-in-out ml-5">
              Learn More
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="src/assets/hero-img.png" alt="Hero" className="h-96" />
        </div>
      </div>
    </div>
  );
};

export default Body;
