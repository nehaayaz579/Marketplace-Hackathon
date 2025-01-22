import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Header from "../component/Header";
import Footer from "../component/Footer";
const Team = () => {
  return (
    <div>
      <Header />
      <div className="items-center text-[#252B42] space-y-6 mt-10">
        <h3
          className="text-center font-bold text-[16px] text-myDark hover:text-blue-500"
        >
          WHAT WE DO
        </h3>
        <h1
          className="text-center font-bold text-[38px] md:text-[48px] lg:text-[58px] hover:text-blue-500"
        >
          Innovation tailored for you
        </h1>
        <div className="flex justify-center sm:justify-center md:justify-center lg:justify-center space-x-4">
          <Link href="/">
            <h3 className="font-bold text-sm text-myDark hover:text-blue-500">
              Home
            </h3>
          </Link>
          <FaAngleRight className="text-myGrey" />
          <Link href="/shop">
            <h3 className="font-bold text-sm text-myGrey hover:text-blue-500">
              Shop
            </h3>
          </Link>
        </div>
      </div>
      <h2 className="font-bold text-center space-y-6 mt-10 text-[40px] text-[#252B42] ">
        Meet Our Team
      </h2>
      {/* Team Image */}
      <div className="pt-10">
        <section className="body-font pl-6 pr-6">
          <div className="container px-5 pt-7 mx-auto ">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6  hover:scale-110 active:scale-10 transition-all">
                <div className="h-64 w-96 overflow-hidden">
                  <Image
                    className="object-cover object-center h-full w-full"
                    src="/images/teamcard4.png"
                     alt="content"
                     width={34}
                     height={26}
                  />
                   
                  
                </div>
                <div className="pl-32 py-5">
                  <h5 className="text-[22px] mt-6 tracking-wider text-[#252B42] font-bold">
                    Username
                  </h5>
                  <h6 className="text-[18px] tracking-wider title-font text-[#737373] mt-3 font-bold">
                    Profession
                  </h6>

                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-6">
                    <a className="text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              {/*pic2 */}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6  hover:scale-110 active:scale-10 transition-all">
                <div className="h-64 w-96 overflow-hidden">
                  <Image
                    className="object-cover object-center h-full w-full"
                    alt="content"
                    src="/images/teamcard5.png"
                    width={64}
                    height={96}
                  />
                </div>
                <div className="pl-32 py-5">
                  <h5 className="text-[22px] mt-6 tracking-wider text-[#252B42] font-bold">
                    Username
                  </h5>
                  <h6 className="text-[18px] tracking-wider title-font text-[#737373] mt-3 font-bold">
                    Profession
                  </h6>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-6">
                    <a className="text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              {/*pic2*/}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6  hover:scale-110 active:scale-10 transition-all">
                <div className="h-64 w-96 overflow-hidden">
                  <Image
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/images/teamcard6.png"
                    width={64}
                    height={96}
                  />
                </div>
                <div className="pl-32 py-5">
                  <h5 className="text-[22px] mt-6 tracking-wider text-[#252B42] font-bold">
                    Username
                  </h5>
                  <h6 className="text-[18px] tracking-wider title-font text-[#737373] mt-3 font-bold">
                    Profession
                  </h6>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-6">
                    <a className="text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team Image line 2*/}
        <section className="body-font pl-6 pr-6">
          <div className="container px-5  pt-7 mx-auto ">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6  hover:scale-110 active:scale-10 transition-all">
                <div className="h-64 w-96 overflow-hidden">
                  <Image
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/images/teamcard1.png"
                    width={64}
                    height={96}
                  />
                </div>
                <div className="pl-32 py-5">
                  <h5 className="text-[22px] mt-6 tracking-wider text-[#252B42] font-bold">
                    Username
                  </h5>
                  <h6 className="text-[18px] tracking-wider title-font text-[#737373] mt-3 font-bold">
                    Profession
                  </h6>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-6">
                    <a className="text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              {/*pic2 */}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6  hover:scale-110 active:scale-10 transition-all">
                <div className="h-64 w-96 overflow-hidden">
                  <Image
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/images/teamcard2.png"
                    width={64}
                    height={96}
                  />
                </div>
                <div className="pl-32 py-5">
                  <h5 className="text-[22px] mt-6 tracking-wider text-[#252B42] font-bold">
                    Username
                  </h5>
                  <h6 className="text-[18px] tracking-wider title-font text-[#737373] mt-3 font-bold">
                    Profession
                  </h6>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-6">
                    <a className="text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              {/*pic2*/}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6  hover:scale-110 active:scale-10 transition-all">
                <div className="h-64 w-96 overflow-hidden">
                  <Image
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/images/teamcard3.png"
                    width={64}
                    height={96}
                  />
                </div>
                <div className="pl-32 py-5">
                  <h5 className="text-[22px] mt-6 tracking-wider text-[#252B42] font-bold">
                    Username
                  </h5>
                  <h6 className="text-[18px] tracking-wider title-font text-[#737373] mt-3 font-bold">
                    Profession
                  </h6>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-6">
                    <a className="text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*team imges card line 3 */}
        {/* Team Image */}
        <section className="body-font pl-6 pr-6">
          <div className="container px-5 pt-7 mx-auto ">
            <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6  hover:scale-110 active:scale-10 transition-all">
                <div className="h-64 w-96 overflow-hidden">
                  <Image
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/images/Aboutpiccard1.png"
                    width={64}
                    height={96}
                  />
                </div>
                <div className="pl-32 py-5">
                  <h5 className="text-[22px] mt-6 tracking-wider text-[#252B42] font-bold">
                    Username
                  </h5>
                  <h6 className="text-[18px] tracking-wider title-font text-[#737373] mt-3 font-bold">
                    Profession
                  </h6>

                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-6">
                    <a className="text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              {/*pic2 */}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6  hover:scale-110 active:scale-10 transition-all">
                <div className="h-64 w-96 overflow-hidden">
                  <Image
                    alt="content"
                    className="object-cover object-center h-full w-full"
                    src="/images/Aboutpiccard2.png"
                    width={64}
                    height={96}
                  />
                </div>
                <div className="pl-32 py-5">
                  <h5 className="text-[22px] mt-6 tracking-wider text-[#252B42] font-bold">
                    Username
                  </h5>
                  <h6 className="text-[18px] tracking-wider title-font text-[#737373] mt-3 font-bold">
                    Profession
                  </h6>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-6">
                    <a className="text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>

              {/*pic2*/}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6  hover:scale-110 active:scale-10 transition-all">
                <div className="h-64 w-96 overflow-hidden">
                  <Image
                    alt="content"
                    className="object-cover  object-center h-full w-full"
                    src="/images/Aboutpiccard3.png"
                    width={64}
                    height={96}
                  />
                </div>
                <div className="pl-32 py-5">
                  <h5 className="text-[22px] mt-6 tracking-wider text-[#252B42] font-bold">
                    Username
                  </h5>
                  <h6 className="text-[18px] tracking-wider title-font text-[#737373] mt-3 font-bold">
                    Profession
                  </h6>
                  <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start py-6">
                    <a className="text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a className="ml-3 text-[#23A6F0]">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-7 h-7"
                        viewBox="0 0 24 24"
                      >
                        <rect
                          width={20}
                          height={20}
                          x={2}
                          y={2}
                          rx={5}
                          ry={5}
                        />
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/*last part*/}
      <div className="w-full md:w-[547px] lg:w-[547px] flex flex-col justify-center items-center text-center mx-auto mt-9">
        <h2 className="font-extrabold text-3xl  hover:text-blue-500">
          Start your 14 days free trial
        </h2>

        <div className=" items-center">
          <p className="font-normal text-[10px] text-sm  mt-4 px-6 lg:px-0 hover:text-blue-500">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent. Try it free now
          </p>
        </div>
        <div className="w-[186px] h-[52px] bg-[#23A6F0] rounded-md  bg-myBlue mx-auto py-4 mt-6">
          <button className="text-center  font-bold text-[14px] items-center text-white mx-auto hover:text-black">
            Try it free now
          </button>
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
      <Footer />
    </div>
  );
};

export default Team;
