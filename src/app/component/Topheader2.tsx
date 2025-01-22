import React from "react";
import { LuPhone } from "react-icons/lu";
import { BiMessage } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io5";
import { FiYoutube } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Topheader2 = () => {
  return (
    <div className="hidden sm:block">
      <div className="w-full h-[46px] bg-green-800 flex justify-between items-center px-4 sm:px-8">
        {/* Left side: Phone and Email */}
        <div className="flex text-white items-center space-x-3 sm:space-x-5">
          <div className="flex items-center">
            <LuPhone className="text-white" />
            <h6 className="font-bold text-[14px] leading-[24px] ml-2">
              (225) 555-0118
            </h6>
          </div>
          <div className="flex items-center space-x-2">
            <BiMessage className="text-white" />
            <h6 className="font-bold text-[14px] leading-[24px]">
              michelle.rivera@example.com
            </h6>
          </div>
        </div>

        {/* Middle: Follow Us Message */}
        <div className="hidden sm:flex items-center text-white">
          <h6 className="font-bold text-[14px] leading-[24px]">
            Follow Us and get a chance to win 80% off
          </h6>
        </div>

        {/* Right side: Social Media Icons */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          <h6 className="text-white font-bold text-[14px] leading-[24px]">
            Follow Us:{" "}
          </h6>
          <div className="flex gap-3">
            <IoLogoInstagram className="w-[18px] h-[18px] text-white" />
            <FiYoutube className="w-[18px] h-[18px] text-white" />
            <FaFacebook className="w-[18px] h-[18px] text-white" />
            <FaTwitter className="w-[18px] h-[18px] text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topheader2;
