import Image from "next/image";
import Link from "next/link";
import Topheader2 from "../component/Topheader2";
import Header from "../component/Header";
import ShopDatafetch from '../component/ShopDatafetch';
import React from "react";

const Shop = () => {
  return (
    <>
      <div className="container ">
        <Topheader2 />
        <Header />

        <div className="w-full h-[67px] bg-white flex justify-between items-center px-6 sm:px-8 lg:px-24">
          <div className="flex gap-7">
            <h1 className="text-xl font-semibold ml-[10px] text-black">Shop</h1>
            <ul className="flex gap-3 pt-2 text-[15px] font-bold text-[#737373]">
              <li className="hover:text-black">
                <Link href="/">Home →</Link>
              </li>
              <li className="hover:text-black text-gray-400">
                <Link href="/Shop">Shop</Link>
              </li>
            </ul>
          </div>
        </div>
        {/*products */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-0 md:px-0 lg:px-12 py-8  space-y-3 md:space-y-4 lg:space-y-0">
          <div className="relative mx-auto items-center">
            <Image
              className="mt-0 md:mt-4 lg:mt-0 transform transition duration-500 hover:scale-110"
              src="/images/shop1.png"
              alt={"images"}
              width={205}
              height={203}
            />
          </div>

          <div className="relative mx-auto items-center">
            <Image
              className="transform transition duration-500 hover:scale-110"
              src="/images/shop2.png"
              alt={"images"}
              width={205}
              height={203}
            />
          </div>

          <div className="relative mx-auto items-center">
            <Image
              src="/images/shop3.png"
              alt={"images"}
              width={205}
              height={203}
              className="transform transition duration-500 hover:scale-110"
            />
          </div>

          <div className="relative mx-auto items-center">
            <Image
              src="/images/shop4.png"
              className="transform transition duration-500 hover:scale-110"
              alt={"images"}
              width={205}
              height={203}
            />
          </div>

          <div className="relative mx-auto items-center">
            <Image
              src="/images/shop5.png"
              className="transform transition duration-500 hover:scale-110"
              alt={"images"}
              width={205}
              height={203}
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between py-4 px-6 bg-gray-100">
          {/* Left Side: Showing Results */}
          <div className="text-gray-600 mb-2 md:mb-0 w-full md:w-auto">
            <p>
              Showing all <span className="font-medium">12 results</span>
            </p>
          </div>

          {/* Middle: Views Buttons */}
          <div className="flex items-center space-x-4 mb-2 md:mb-0 w-full md:w-auto justify-center">
            <p className="text-gray-600">Views:</p>
            <button className="w-8 h-8 bg-gray-300 rounded flex justify-center items-center">
              <span className="block w-3 h-3 bg-black"></span> {/* Grid Icon */}
            </button>
            <button className="w-8 h-8 bg-gray-300 rounded flex justify-center items-center">
              <span className="block w-4 h-1 bg-black"></span> {/* List Icon */}
            </button>
          </div>

          {/* Right Side: Popularity Dropdown & Filter */}
          <div className="flex  items-center space-x-4 w-full md:w-auto justify-center md:justify-end">
            <select className="border border-gray-300 px-3 py-2 rounded text-gray-600 w-full md:w-auto">
              <option value="popularity">Popularity</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
            </select>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full md:w-auto">
              Filter
            </button>
          </div>
        </div>
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
      </div>
     
      <ShopDatafetch/>
      {/* Pagination */}
      <div className="flex items-center justify-center p-9 bg-gray-100">
        <div className="flex border border-gray-300 rounded-md overflow-hidden">
          {/* First Button */}
          <button className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200">
            First
          </button>
          {/* Page Numbers */}
          <button className="px-4 py-2 border-l border-gray-300 text-gray-600 hover:bg-blue-500">
            1
          </button>
          <button className="px-4 py-2 bg-blue-500 hover:bg-gray-200 text-white hover:text-gray-600 font-medium">
            2
          </button>
          <button className="px-4 py-2 border-l border-gray-300 text-gray-900 hover:bg-blue-500">
            3
          </button>
          {/* Next Button */}
          <button className="px-4 py-2 text-gray-900 font-medium hover:bg-blue-500">
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Shop;
