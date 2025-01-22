import Image from "next/image";
import React from "react";
import Topheader from "../component/Topheader";
import Header from "../component/Header";
import Footer from "../component/Footer";

const About = () => {
  return (
    <div className="w-full">
      <Topheader />
      <Header />

      {/* About 1st Section */}
      <section className=" body-font gap-5 pb-9">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center ">
          <div className="pl-20 lg:flex-grow md:w-1/2 lg:pr-20 md:pr- flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <p className="mb-8 leading-relaxed font-bold text-[14px] text-gray-700 tracking-widest py-5">
              ABOUT COMPANY
            </p>
            <h1 className="title-font sm:text-6xl text-3xl mb-4 font-bold text-gray-900">
              ABOUT US
            </h1>
            <p className="mb-8 leading-relaxed font-bold text-[20px] tracking-wider py-5  text-gray-500">
              We know how large objects will act,
              <br />
              but things on a small scale
            </p>
            <div className="flex justify-center h-14 w-48 ">
              <button className="font-bold inline-flex tracking-wider text-white bg-[#23A6F0] border-0 py-4 px-6 focus:outline-none hover:bg-indigo-600 rounded text-[15px]">
                Get Quote Now
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/Aboutpic1.png"
              width={640}
              height={960}
            />
          </div>
        </div>
      </section>

      {/* Section with Text Content */}
      <div className="flex flex-col lg:flex-row pt-6 px-4 lg:px-24 p-5">
        <div className="flex-1 h-[150px] mb-4 lg:mb-0 lg:pl-20 ">
          <p className="text-red-600 text-[14px]">Problems trying</p>
          <h3 className="font-bold text-xl lg:text-2xl pt-4">
            Met minim Mollie non desert
            <br />
            Alamo est sit cliquey dolor do
            <br /> met sent.
          </h3>
        </div>
        <div className="flex-1 h-[150px] py-10">
          <p className="text-gray-500 text-[14px] font-bold tracking-wider">
            Problems trying to resolve the conflict between
            <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
      </div>

      {/* Stats Section (Grid) */}
      <div className="flex justify-center items-center py-10 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-[30px] text-center">
          <div>
            <h2 className="text-4xl font-bold">15K</h2>
            <p className="text-gray-500 font-bold">Happy Customers</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">150K</h2>
            <p className="text-gray-500 font-bold">Monthly Visitors</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">15</h2>
            <p className="text-gray-500 font-bold">Countries Worldwide</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold">100+</h2>
            <p className="text-gray-500 font-bold">Top Partners</p>
          </div>
        </div>
      </div>

      {/* About Image Section 2 */}
      <div className="w-full flex justify-center">
        <Image
          src="/images/Aboutpic2.png"
          height={540}
          width={989}
          alt="About Image"
          className="w-full h-auto"
        />
      </div>

      {/* Meet Our Team Section */}
      <div className="text-center p-7  ">
        <h2 className="font-extrabold text-4xl p-3 tracking-[1px] text-gray-800">
          Meet Our Team
        </h2>
        <p className="font-bold text-gray-600 text-[14px] p-3 tracking-[1px]">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Team Image */}
      <section className="body-font pl-6 pr-6 ">
        <div className="container px-5 py-8 mx-auto ">
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
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
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>

            {/*pic2 */}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
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
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>

            {/*pic2*/}
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="h-64 w-96 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
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
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Companies Section */}
      <div className="text-center mt-2">
        <h2 className="font-extrabold text-4xl p-3 tracking-[1px] text-gray-800">
          Big Companies Are Here
        </h2>
        <p className="font-bold text-gray-600 text-[14px] p-3 tracking-[1px]">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/*symbolspics */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 items-center mt-16 px-20 space-y-10 my-10">
        {/* Image 1 */}
        <Image
          src="/images/symbol1.png"
          alt="pic"
          width={153}
          height={34}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 2 */}
        <Image
          src="/images/symbol2.png"
          alt="pic"
          width={146}
          height={59}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 3 */}
        <Image
          src="/images/symbol3.png"
          alt="pic"
          width={152}
          height={15}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 4 */}
        <Image
          src="/images/symbol4.png"
          alt="pic"
          width={151}
          height={42}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 6 */}
        <Image
          src="/images/symbol5.png"
          alt="pic"
          width={151}
          height={72}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110"
        />

        {/* Image 5 */}

        <Image
          src="/images/symbol6.png"
          alt="pic"
          width={151}
          height={62}
          className="w-full h-auto object-cover transform transition duration-500 hover:scale-110 "
        />
      </div>
      {/* Final Image Section */}

      <Footer />
    </div>
  );
};

export default About;
