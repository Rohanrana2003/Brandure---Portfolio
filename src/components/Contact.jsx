import React from "react";

const ContactForm = () => {
  return (
    <div className="py-20 px-[30px] lg:px-[120px] md:px-[40px]">
      <div className="relative  flex flex-col lg:flex-row gap-10 justify-center items-center px-5 md:px-20 py-10 rounded-[30px] lg:rounded-[45px] bg-[#fff] mx-auto overflow-hidden">
        {/* right background */}
        <div className="absolute max-lg:hidden min-w-[23%] min-h-[800px] bg-[#A19188] right-0 top-0"></div>

        {/* Left Side contact form */}
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h1 className="font-heading text-[40px] lg:text-[62px] text-[#4A4E69] font-semibold md:font-medium mb-5 lg:-ml-4">
            Get in Touch
          </h1>
          <p className=" max-lg:text-center max-w-[70%] font-semibold text-[14px] md:text-[18px] xl:text-[18px] mb-4">
            "We’d Love to Hear From you! Reach out with any Questions or
            Inquiries."
          </p>

          {/* Form */}
          <form className="flex flex-col gap-3 w-full max-w-[500px]">
            <input
              type="text"
              placeholder="Name"
              required
              className="border border-[#A19188] p-2 md:p-3 rounded-md focus:outline-none focus:border-[#4A4E69]"
            />
            <input
              type="email"
              placeholder="Email"
              required
              className="border border-[#A19188] p-2 md:p-3 rounded-md focus:outline-none focus:border-[#4A4E69]"
            />
            <textarea
              rows={5}
              placeholder="Your Message"
              className="border border-[#A19188] p-2 md:p-3 rounded-md focus:outline-none focus:border-[#4A4E69]"
            ></textarea>

            <button className="bg-[#4A4E69] hover:bg-[#786b64] text-white text-[14px] md:text-[16px] rounded-md px-4 py-2 shadow shadow-black transition duration-300 ease-in-out ">
              Send Message
            </button>
          </form>
          {/* Phone and email */}
          <div className="flex max-md:flex-col justify-start items-center gap-6 lg:gap-16 mt-10">
            <div className="phone flex justify-center items-center gap-3">
              <img src="src/assets/icon-phone.png" />
              <div className="flex flex-col justify-start">
                <p className="text-[14px] font-bold">PHONE</p>
                <a
                  href="#"
                  className="text-gray-400 hover:text-gray-900 transition-colors text-[14px]"
                >
                  +91 1234567890
                </a>
              </div>
            </div>
            <div className="phone flex justify-center items-center gap-3 ">
              <img src="src/assets/icon-email.png" />
              <div className="flex flex-col justify-start">
                <p className="text-[14px] font-bold">EMAIL</p>
                <a
                  href="mailto:mybrandure@gmail.com"
                  className="text-gray-400 hover:text-gray-900 transition-colors text-[14px]"
                >
                  mybrandure@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Map */}
        <div className="relative w-[450px] h-[530px] overflow-hidden max-md:hidden ">
          <iframe
            className="w-full h-full  grayscale"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.9412189916875!2d76.70738868152587!3d30.691929909122088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefb6663a728b%3A0xb6bdb4142b562db3!2sJubilee%20Walk%2C%20sector%2070%20Mohali!5e0!3m2!1sen!2sin!4v1744623163492!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
