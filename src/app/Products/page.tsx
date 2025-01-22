import React from "react";
import Image from "next/image";
import Topheader2 from "../component/Topheader2";
import Header from "../component/Header";
import Footer from "../component/Footer";

const Products = () => {
  return (
    <div>
      <Topheader2 />
      <Header />
      <h4 className="font-bold pl-[22px] pt-[14px]">home → Products</h4>

      {/* Product Tabs: Description, Additional Info, Reviews */}
      <div className="h-[50px] text-gray-500  w-full md:w-[1200px] place-items-center gap-5 font-bold flex justify-center space-x-8 mt-4">
        <p className="hover:text-black cursor-pointer">Description</p>
        <p className="hover:text-black cursor-pointer">
          Additional Information
        </p>
        <p className="hover:text-black cursor-pointer">Reviews(0)</p>
      </div>

      {/** */}
      <div className="mt-16">
        <div className="flex flex-col md:lg:flex-row justify-center md:lg:justify-evenly flex-wrap mx-5 md:lg:mx-0">
          <Image
            src="/images/descriptimg.png" // Corrected image path
            alt="card.imagePath"
            className="object-cover w-full h-auto md:lg:w-[316px] md:lg:h-[372px] transform transition duration-500 hover:scale-110"
            width={316}
            height={372}
          />

          <div className="flex flex-col justify-between w-full md:lg:w-[332px]">
            <h3
              className={` text-start font-bold text-[20px] md:lg:text-[24px] text-myDark mb-5 mt-8 md:lg:mt-0 hover:text-blue-500`}
            >
              the quick fox jumps over
            </h3>
            <p
              className={` text-start font-normal text-[14px] text-myGrey hover:text-blue-500`}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p
              className={` text-start font-normal text-[14px] text-myGrey mt-5 hover:text-blue-500`}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p
              className={` text-start font-normal text-[14px] text-myGrey mt-5 hover:text-blue-500`}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <div className="flex flex-col justify-between w-full md:lg:w-[332px]">
            <h3
              className={` text-start font-bold text-[20px] md:lg:text-[24px] text-myDark mb-5 mt-8 md:lg:mt-0 hover:text-blue-500`}
            >
              the quick fox jumps over
            </h3>
            <p
              className={` text-start font-normal text-[14px] text-myGrey hover:text-blue-500`}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p
              className={`text-start font-normal text-[14px] text-myGrey mt-5 hover:text-blue-500`}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <p
              className={`text-start font-normal text-[14px] text-myGrey mt-5 hover:text-blue-500`}
            >
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
        </div>
      </div>
      {/*card section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-11  sm:px-8 pt-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="hover:scale-105 transition-transform bg-white shadow-md rounded-lg overflow-hidden text-center"
          >
            <Image
              className="w-full"
              width={150} // Adjusted width
              height={220} // Adjusted height
              src={`/images/prod${1 + index}.png`}
              alt="pic"
            />
            <div className="p-3">
              <h3 className="text-sm font-bold">Graphic Design</h3>
              <p className="text-xs text-gray-500">English Department</p>
              <div className="flex justify-center items-center mt-1 space-x-2">
                <p className="text-gray-400 line-through">$16.48</p>
                <p className="text-green-600 font-bold">$6.48</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
