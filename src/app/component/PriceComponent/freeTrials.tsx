"use client";

import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const FreeTrials = () => {
  return (
    <div>
      <div className="w-full md:w-[547px] lg:w-[547px] flex flex-col justify-center items-center text-center mx-auto mt-36">
        <h2
          className="font-bold text-[20px] text-myDark hover:text-blue-500"
        >
          Start your 14 days free trial
        </h2>

        <div className=" items-center">
          <p
            className=" font-normal text-[10px] text-sm text-myGrey mt-4 px-6 lg:px-0 hover:text-blue-500"
          >
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent. Try it free now
          </p>
        </div>
        <div className="w-[186px] h-[52px] rounded-md  bg-myBlue mx-auto py-4 mt-6">
          <h6
            className="text-center font-bold text-[14px] items-center text-white mx-auto hover:text-black"
          >
            Try for free
          </h6>
        </div>
        {/* social icons */}
        <div className="w-[242px]  mx-auto flex my-8  justify-evenly">
          {/* Twitter Icon */}
          <div>
          <FaTwitter className="w-[30px] h-[30px] text-blue-500" />
           </div> 
          {/* Facebook Icon */}
          <div>
          <FaFacebookSquare className="w-[30px] h-[30px]  bg-white text-blue-700" />
            </div>
          {/* Instagram Icon */}
          <div>
          <BsInstagram className="w-[30px] h-[30px] " />
          </div>
          {/* LinkedIn Icon */}

          <div>
          <FaLinkedin className="w-[30px] h-[30px] bg-white text-blue-700" />
          </div>
        </div>
    </div>

    </div>
  );
};

export default FreeTrials;