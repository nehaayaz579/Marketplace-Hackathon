import React from "react";
import Image from "next/image";
import { LuAlarmClock } from "react-icons/lu";
import { BiSolidCommentDetail } from "react-icons/bi";
import Datafetch from "./Datafetch";
const Hero = () => {
  return (
    <div className="max-h-full">
      {/* Hero Image Section */}
      <div className="">
        <Image
          src="/images/headpic.png"
          height={1000}
          width={1700}
          alt="Hero Image"
          className="w-full h-auto"
        />
      </div>

      {/* Editor's Pick Section */}
      <div className="text-center p-4 sm:p-6">
        <h3 className="font-bold text-lg sm:text-xl tracking-wide">
          EDITOR’S PICK
        </h3>
        <p className="text-sm sm:text-base text-gray-600 tracking-wide">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Images Section */}
      <div className="flex flex-wrap justify-center gap-6 p-4 sm:gap-8">
        <Image
          src="/images/h1.png"
          alt="Image 1"
          width={450}
          height={600}
          className="w-full sm:w-auto"
        />
        <Image
          src="/images/h2.png"
          alt="Image 2"
          width={200}
          height={600}
          className="w-full sm:w-auto"
        />
        <div className="flex flex-col gap-6">
          <Image
            src="/images/h3.png"
            alt="Image 3"
            width={200}
            height={350}
            className="lg:w-full sm:w-200"
          />
          <Image
            src="/images/h4.png"
            alt="Image 4"
            width={200}
            height={350}
            className="w-full sm:w-150"
          />
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="text-center p-2 sm:p-6 mt-8">
        <h4 className="font-bold text-lg sm:text-xl text-gray-600">
          Featured Products
        </h4>
        <h3 className="font-extrabold text-md sm:text-lg text-gray-800">
          BESTSELLER PRODUCTS
        </h3>
        <p className="text-sm sm:text-base text-gray-600 tracking-wide">
          Problems trying to resolve the conflict between
        </p>
      </div>

      {/* Cards Section */}
      <Datafetch/>
      {/* Green Section */}
      <section className="text-white body-font h-auto w-full bg-[#23856D] mt-24">
        <div className="container  mx-auto flex flex-col-reverse md:flex-row px-5 py-16 items-center">
          {/* Left Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-56 md:pl-12 flex flex-col md:items-start items-center text-center md:text-left">
            <p className="mb-4 pt-7 leading-tight font-medium tracking-wider">
              SUMMER 2020
            </p>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-wide leading-snug">
              Vita Classic
            </h1>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-wide leading-snug">
              Product
            </h1>
            <p className="pt-6 leading-relaxed">
              We know how large objects will act. We know <br /> how small
              objects will act.
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-6">
              <button className="text-white bg-[#23856D] py-2 px-6 text-lg">
                $16.48
              </button>
              <button className="text-white bg-[#2DC071]  hover:bg-[#2d925c] py-2 px-6 rounded text-lg">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="lg:max-w-lg lg:w-full lg:mr-40 md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto"
              alt="hero"
              src="/images/herogreenpic.png"
              width={640}
              height={960}
            />
          </div>
        </div>
      </section>
      {/* White Section */}
      <section className="text-white body-font h-auto w-full mt-24">
        <div className="container  mx-auto flex flex-col-reverse pt-5 md:flex-row px-5 py-16 items-center">
          <div className="mt-7 ">
            <div className="lg:max-w-lg h-auto  lg:w-full lg:ml-40 md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded mx-auto"
                alt="hero"
                src="/images/herowhitepic.png"
                width={640}
                height={960}
              />
            </div>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-56 md:pl-12 flex flex-col md:items-start items-center text-center md:text-left">
            <p className="mb-4 pt-7  tracking-wider leading-tight font-semibold  text-gray-400">
              SUMMER 2020
            </p>
            <h1 className="font-bold tracking-wide leading-snug text-3xl sm:text-4xl  text-[#252B42] ">
              Part of the Neural
            </h1>
            <h1 className="font-bold tracking-wide leading-snug text-3xl sm:text-4xl  text-[#252B42] ">
              Universe
            </h1>
            <p className="pt-6 leading-relaxed tracking-wide font-semibold text-gray-500">
              We know how large objects will act. We know <br /> how small
              objects will act.
            </p>
            <div className="flex justify-center md:justify-start gap-4 pt-6">
              <button className="py-2 px-6 text-lg text-white bg-[#2DC071] rounded hover:bg-[#2d925c]">
                $16.48
              </button>
              <button className=" py-2 px-6 rounded hover:bg-[#2d925c] text-lg text-[#2DC071] border border-[#2DC071]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Posts Section */}
      <div className="text-center sm:p-6">
        <h6 className="font-bold text-sm sm:text-base text-blue-600 tracking-wide">
          Practice Advice
        </h6>
        <h2 className="font-extrabold text-xl sm:text-3xl tracking-wide text-gray-800">
          Feature Posts
        </h2>
        <p className="text-sm sm:text-base text-gray-600 tracking-wide">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Last Image Section */}
      <section className="text-gray-600 body-font ">
        <div className="container px-5  py-20 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="p-4 w-[350px] hover:scale-105 active:scale-10 transition-all">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/herocard1.png"
                  alt="blog"
                  width={64}
                  height={96}
                />
                <div className="p-6">
                  <div className="flex gap-3">
                    <h2 className="tracking-widest text-[14px] title-font font-medium text-blue-400 mb-1">
                      Google
                    </h2>
                    <h2 className="tracking-widest text-[14px]  title-font font-medium text-gray-500 mb-1">
                      Trending
                    </h2>
                    <h2 className="tracking-widest text-[14px] title-font font-medium text-gray-500 mb-1">
                      New
                    </h2>
                  </div>
                  <h1 className="title-font text-[19px] tracking-wide trafont-medium text-gray-800 mb-3">
                    Loudest a la Madison #1
                    <br />
                    {/* (L&apos;integral) */}
                  </h1>
                  <p className="leading-relaxed mb-3 text-gray-400 text-[14px] tracking-wider">
                    We focus on ergonomics and meeting you where you work. Its
                    only a keystroke away.
                  </p>
                  <div className="flex gap-14 ">
                    <div className="flex gap-1  text-[14px] tracking-wider text-gray-500">
                      <LuAlarmClock className="font-bold text-[18px] text-blue-600" />
                      <span>5 jan 2025</span>
                    </div>
                    <div className="flex gap-1 text-[14px] tracking-wider text-gray-500">
                      <BiSolidCommentDetail className="font-bold text-[18px] text-green-800" />
                      <span>10 comments</span>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap pt-5">
                    <a className="text-gray-500 font-semibold inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[350px] hover:scale-105 active:scale-10 transition-all ">
              <div className="h-full  border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48  md:h-36 w-full object-cover object-center"
                  src="/images/herocard2.png"
                  alt="blog"
                  width={64}
                  height={96}
                />
                <div className="p-6">
                  <div className="flex gap-3">
                    <h2 className="tracking-widest text-[14px] title-font font-medium text-blue-400 mb-1">
                      Google
                    </h2>
                    <h2 className="tracking-widest text-[14px]  title-font font-medium text-gray-500 mb-1">
                      Trending
                    </h2>
                    <h2 className="tracking-widest text-[14px] title-font font-medium text-gray-500 mb-1">
                      New
                    </h2>
                  </div>
                  <h1 className="title-font text-[19px] tracking-wide trafont-medium text-gray-800 mb-3">
                    Loudest a la Madison #1
                    {/* <br />
                    (L&apos;integral) */}
                  </h1>
                  <p className="leading-relaxed mb-3 text-gray-400 text-[14px] tracking-wider">
                    We focus on ergonomics and meeting you where you work. Its
                    only a keystroke away.
                  </p>
                  <div className="flex gap-14 ">
                    <div className="flex gap-1  text-[14px] tracking-wider text-gray-500">
                      <LuAlarmClock className="font-bold text-[18px] text-blue-600" />
                      <span>5 jan 2025</span>
                    </div>
                    <div className="flex gap-1 text-[14px] tracking-wider text-gray-500">
                      <BiSolidCommentDetail className="font-bold text-[18px] text-green-800" />
                      <span>10 comments</span>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap pt-5">
                    <a className="text-gray-500 font-semibold inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 w-[350px] hover:scale-105 active:scale-10 transition-all">
              <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <Image
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="/images/herocard3.png"
                  alt="blog"
                  width={64}
                  height={96}
                />
                <div className="p-6">
                  <div className="flex gap-3">
                    <h2 className="tracking-widest text-[14px] title-font font-medium text-blue-400 mb-1">
                      Google
                    </h2>
                    <h2 className="tracking-widest text-[14px]  title-font font-medium text-gray-500 mb-1">
                      Trending
                    </h2>
                    <h2 className="tracking-widest text-[14px] title-font font-medium text-gray-500 mb-1">
                      New
                    </h2>
                  </div>
                  <h1 className="title-font text-[19px] tracking-wide trafont-medium text-gray-800 mb-3">
                    Loudest a la Madison #1
                    <br />
                    {/* (L&apos;integral) */}
                  </h1>
                  <p className="leading-relaxed mb-3 text-gray-400 text-[14px] tracking-wider">
                    We focus on ergonomics and meeting you where you work. Its
                    only a keystroke away.
                  </p>
                  <div className="flex gap-14 ">
                    <div className="flex gap-1  text-[14px] tracking-wider text-gray-500">
                      <LuAlarmClock className="font-bold text-[18px] text-blue-600" />
                      <span>5 jan 2025</span>
                    </div>
                    <div className="flex gap-1 text-[14px] tracking-wider text-gray-500">
                      <BiSolidCommentDetail className="font-bold text-[18px] text-green-800" />
                      <span>10 comments</span>
                    </div>
                  </div>
                  <div className="flex items-center flex-wrap pt-5">
                    <a className="text-gray-500 font-semibold inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
