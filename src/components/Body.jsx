import React from "react";
import { servicesData } from "../utils/constants";

const Body = () => {
  return (
    <div className="Body ">
      {/* Hero Section */}
      <section className=" min-h-screen text-white text-center relative md:px-[40px] lg:px-[120px] pb-20">
        <div className="Floating-hello absolute flex justify-center right-0 left-0 text-center mt-6">
          <div className="font-heading relative border text-[#4A4E69] border-black font-medium text-[15px] md:text-[16px] md:font-semibold p-2 px-4 text-base rounded-full ">
            Hello!
            <img
              src="src/assets/hello 2.png"
              alt="Hello"
              className="absolute h-9 md:h-12 top-9 right-[88px]"
            />
            <img
              src="src/assets/hello 1.png"
              alt="Hello"
              className="absolute h-6 md:h-7 -top-6 -right-6"
            />
          </div>
        </div>

        <div className="hero-section flex flex-col items-center gap-20 lg:gap-0 lg:flex-row  justify-center pt-28 text-[#333333] ">
          <div className="Hero-Left max-lg:flex max-lg:flex-col justify-center items-center text-center lg:text-left xl:w-[70%]">
            <h1 className="font-heading relative w-fit z-10 mt-8 text-[36px] md:text-[50px] font-medium leading-[1.2] xl:text-[70px] lg:text-[50px] ">
              Brighten Yo
              <span className="xl:text-[#333333] text-white">ur</span>
              <span className="text-white"> Brand</span> <br /> with Brandure
              <img
                className="absolute drop-shadow-2xl shadow-slate-950 -z-10 -top-2  right-0 xl:-right-[100px] w-[150px] md:w-[200px] xl:w-[300px]"
                src="src/assets/hero-rectangle.png"
              />
            </h1>

            <p className="font-body text-[16px] md:text-[18px] xl:text-[20px]  mt-4 w-[80%] mb-12 md:mb-20">
              We specialize in creating innovative marketing strategies that
              drive results. Let us help you shine brighter in the digital
              landscape.
            </p>

            <div className="">
              <button className="bg-[#4A4E69] hover:bg-[#786b64] text-white text-[15px] md:text-[17px] rounded-md px-6 py-3 transition duration-300 ease-in-out">
                Get Started
              </button>
              <button className="bg-[#786b64] hover:bg-[#4A4E69] text-white text-[15px] md:text-[17px] rounded-md px-6 py-3 transition duration-300 ease-in-out ml-5">
                Learn More
              </button>
            </div>
          </div>

          <div className="Hero-Right max-sm:px-[30px] ">
            <img
              src="src/assets/hero-img.png"
              alt="Hero"
              className="min-w-[300px] xl:min-h-96"
            />
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="min-h-screen bg-[#A59389] rounded-[70px] md:px-[40px] lg:px-[120px] py-20">
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="services-left flex flex-col items-start">
            <p className="font-bold -mb-4">Illuminate</p>
            <h1 className="font-heading text-[40px] lg:text-[62px] text-[#F5F1EE] font-semibold mb-5 -ml-4">
              Our Services
            </h1>
            <p className="w-[80%] mb-7">
              At Sunstream Digital, we harness innovative strategies tailored to
              your unique needs. Our targeted marketing solutions ensure that
              your message reaches the right audience effectively.
            </p>

            <div className="services-img">
              <img src="src/assets/services-img.png" />
            </div>
          </div>

          <div className="services-right text-left">
            {servicesData.map((service) => (
              <div key={service.id} className="mt-10">
                <div className="flex items-start gap-2 mb-1">
                  <img src={service.logo}></img>
                  <h1 className="font-semibold  text-[23px] ">
                    {service.title}
                  </h1>
                </div>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Body;
