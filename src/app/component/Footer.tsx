import React from "react";
import { MdOutlineFacebook } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* Top section with logo and social media icons */}
      <div className="w-full h-[140px] bg-gray-100 flex justify-between items-center px-4 sm:px-8 lg:px-[200px]">
        <h1 className="text-[22px] font-bold text-gray-700">Bandage</h1>
        <div className="flex gap-4">
          <MdOutlineFacebook className="w-[25px] h-[25px] text-[#23A6F0]" />
          <IoLogoInstagram className="w-[25px] h-[25px] text-[#23A6F0]" />
          <FaTwitter className="w-[25px] h-[25px] text-[#23A6F0]" />
        </div>
      </div>

      {/*footer */}
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
          <div className="pt-4" >
            <h2 className="title-font font-bold pl-20 py-4 text-gray-800 tracking-wider text-[18px] ">
              Get in Touch
            </h2>
            </div>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <input
                  type="text"
                  placeholder="Enter your Email"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-[#23A6F0] border-0 py-2 px-6 focus:outline-none hover:bg-[#319ad6] rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Lore imp sum dolor Amit
            </p>
          </div>

          <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <div className="w-full sm:w-[300px] p-4">
                <h5 className="font-bold tracking-[1px] text-gray-900 text-[18px]">
                  Company Info
                </h5>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[20px]">
                  About Us
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  Carrier
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  We are hiring
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  Blog
                </p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <div className="w-full sm:w-[300px] p-4">
                <h5 className="font-bold tracking-[1px] text-gray-900 text-[18px]">
                  Legal
                </h5>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[20px]">
                  About Us
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  Carrier
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  We are hiring
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  Blog
                </p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <div className="w-full sm:w-[300px] p-4">
                <h5 className="font-bold tracking-[1px] text-gray-900 text-[18px]">
                  Features
                </h5>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[20px]">
                  Business Marketing
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  User Analytic
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  Live Chat
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  Unlimited Support
                </p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <div className="w-full sm:w-[300px] p-4">
                <h5 className="font-bold tracking-[1px] text-gray-900 text-[18px]">
                  Resources
                </h5>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[20px]">
                  IOCS & Android
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  Watch a Demo
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  Customers
                </p>
                <p className="font-semibold tracking-[1px] text-[15px] text-[#737373] pt-[15px]">
                  API
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Footer bottom text */}
      <div className="text-gray-400 bg-gray-100 w-full h-[60px] font-bold text-[14px] tracking-wider text-center py-[20px]">
        <h6>Made With Love By Finland All Right Reserved</h6>
      </div>
    </>
  );
};

export default Footer;
