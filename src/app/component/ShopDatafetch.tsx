"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Product = {
  _id: string;
  title: string;
  price: string;
  imageUrl: string;
};

const ShopCardText = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const SANITY_API_TOKEN =
    "sk4kjQ5VQ4UpapcWgfDNr1qLWu9Y5rNlmdUqYEE0zKyc4AG5cJclaKNdBVI94LbZUGVZIpbUTUwt7n87oqvFDfNCAdfatsDoofRj9tHW0XQUDIo4SjQc0WUYfLlEx8GTHWTCmxCLI7eZS6IQ1vuJ1l2VpPvqgfILy2KiFspsmurfczC9gcio"; // Replace with your token

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"] | order(_createdAt desc)[0...12] {
        _id,
        title,
        price,
        "imageUrl": productImage.asset->url
      }`;

      const url = `https://o22mqdox.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(query)}`;

      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${SANITY_API_TOKEN}`,
          },
        });
        setProducts(response.data.result);
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.error("Error fetching products:", error.response?.data || error.message);
        } else {
          console.error("An unknown error occurred:", error);
        }
      }
    };

    fetchProducts();
  }, []);


  return (
    <div className="lg:mt-[40px] w-full rounded-[5px] border bg-white max-sm:mt-[-100px]">
      <div className="mx-auto w-full max-w-[1400px] flex flex-col justify-evenly p-5 sm:p-10">
       
        {/* Products Section */}
        <div className="w-full flex flex-wrap justify-center gap-6">
          {/* Product Cards */}
          {products.length === 0 ? (
            <p>Loading products...</p>
          ) : (
            products.map((product) => (
              <div
                key={product._id}
                className="w-full sm:w-[238px] md:w-[250px] lg:w-[300px] flex flex-col items-center "
              >
                {/* Image */}
                <div className="w-[239px] h-[427px] flex justify-center overflow-hidden ">
                  {product.imageUrl ? (
                    <Image
                      src={product.imageUrl}
                      alt={product.title}
                      className="w-full h-full object-contain rounded"
                      width={239}
                      height={427}
                    />
                  ) : (
                    <div>No Image Available</div>
                  )}
                </div>
                {/* Text Section */}
                <div className="w-full text-center">
                  <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#252B42]">
                    {product.title}
                  </h5>
                  <div className="flex justify-center gap-2 mt-2">
                    <h5 className="font-Montserrat font-bold text-[16px] text-[#BDBDBD] line-through">
                      $16.48
                    </h5>
                    <h5 className="font-Montserrat font-bold text-[16px] text-[#23856D]">
                      ${product.price}
                    </h5>
                  </div>
                  <Link href={`/product/${product._id}`}>
            
                  <div className="py-4">
                  <button className="text-white bg-[#2DC071] py-2 px-6 rounded hover:bg-[#2d925c] text-lg">
                View Details
               </button>
                </div>
                
                </Link>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ShopCardText;
