import React, { useState } from "react";
import Contact from "./Contact";
import {
  socialMediaClients,
  webDevClients,
  seoClients,
} from "../utils/constants";
import ClientSection from "./ClientSection";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("social");

  const sectionData = {
    social: {
      title: "Social Media Clients",
      clients: socialMediaClients,
    },
    web: {
      title: "Web Development Clients",
      clients: webDevClients,
    },
    seo: {
      title: "SEO Clients",
      clients: seoClients,
    },
  };

  return (
    <div>
      <section className="min-h-screen relative  pb-10">
        {/* Floating HEELO */}
        <div className="Floating-hello absolute flex justify-center right-0 left-0 text-center mt-6">
          <div className="font-heading lg:animate-bounce relative border text-[#4A4E69] border-black font-medium text-[14px] md:text-[16px] md:font-semibold p-2 px-4 text-base rounded-full ">
            Hello!
            <img
              src="/assets/hello 2.png"
              alt="Hello"
              className="absolute h-9 md:h-12 top-9 right-[88px]"
            />
            <img
              src="/assets/hello 1.png"
              alt="Hello"
              className="absolute h-6 md:h-7 -top-6 -right-6"
            />
          </div>
        </div>

        {/* Main Section  */}
        <div className="flex flex-col justify-center items-center text-center pt-36 md:px-[40px] lg:px-[120px]">
          <h3 className=" text-[#616161] text-xl font-semibold">BRANDURE</h3>
          <h1
            className="font-heading text-[#333333] text-[36px] md:text-[50px] font-medium leading-[1.2] xl:text-[70px] mb-10
          "
          >
            Check Our Latest Work
          </h1>
        </div>

        {/* Services Links */}
        <div className="flex justify-center items-center text-center">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-center p-2 ">
            <li
              onClick={() => setActiveSection("social")}
              className={`border border-[#4A4E69] px-4 font-bold py-[5px] w-fit mx-auto mb-5 lg:mb-0 ${
                activeSection === "social"
                  ? "bg-[#4A4E69] border-none text-white"
                  : "bg-transparent"
              } rounded-md cursor-pointer text-[#4A4E69]`}
            >
              Social Media
            </li>
            <li
              onClick={() => setActiveSection("seo")}
              className={`border border-[#4A4E69] px-4  font-bold py-[5px] w-fit mx-auto mb-5 lg:mb-0 ${
                activeSection === "seo"
                  ? "bg-[#4A4E69] border-none text-white"
                  : "bg-transparent"
              } rounded-md cursor-pointer text-[#4A4E69]`}
            >
              SEO
            </li>
            <li
              onClick={() => setActiveSection("web")}
              className={`border border-[#4A4E69] px-4 font-bold py-[5px] w-fit mx-auto mb-5 sm:col-span-2 md:col-span-1 lg:mb-0 ${
                activeSection === "web"
                  ? "bg-[#4A4E69] border-none text-white"
                  : "bg-transparent"
              } rounded-md cursor-pointer text-[#4A4E69]`}
            >
              Web Development
            </li>
          </ul>
        </div>
        <div className=" bg-[#A59389] mt-5 rounded-[30px] lg:rounded-[50px]">
          <ClientSection
            title={sectionData[activeSection].title}
            clients={sectionData[activeSection].clients}
          />
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Portfolio;
