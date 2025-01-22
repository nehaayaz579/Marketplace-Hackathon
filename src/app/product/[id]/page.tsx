"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useParams } from "next/navigation";
import Header from "@/app/component/Header";
import Footer from "@/app/component/Footer";
import Topheader2 from "@/app/component/Topheader2";

type Product = {
  _id: string;
  title: string;
  price: string;
  description: string;
  discountPercentage: string;
  imageUrl: string;
};

export default function ProductDetail() {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const query = `*[_type == "product" && _id == "${id}"] {
          _id,
          title,
          price,
          discountPercentage,
          description,
          "imageUrl": productImage.asset->url
        }`;

        const url = `https://o22mqdox.api.sanity.io/v1/data/query/production?query=${encodeURIComponent(query)}`;

        try {
          const response = await axios.get(url);
          if (response.data.result.length > 0) {
            setProduct(response.data.result[0]);
          } else {
            setError("Product not found.");
          }
        } catch (err) {
          setError("Failed to load product.");
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  const handleAddToCart = () => {
    if (product) {
      // Add the product to the localStorage cart
      const storedCart = localStorage.getItem("cart");
      const cart = storedCart ? JSON.parse(storedCart) : [];
      const existingProduct = cart.find((item: { _id: string }) => item._id === product._id);

      if (existingProduct) {
        // If product already exists in cart, increase the quantity
        existingProduct.quantity += 1;
      } else {
        // Otherwise, add the new product with quantity 1
        cart.push({ ...product, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.title} has been added to your cart`);
    }
  };

  return product ? (
    <div className="flex-col ">
      <Topheader2/>
      <Header />
      <div className="flex flex-col p-14 lg:flex-row items-center gap-6 max-w-screen-lg mx-auto px-4">
        {/* Left Side: Product Image */}
        <div className="w-full lg:w-3/2 flex justify-center mb-6 lg:mb-0">
          <Image
            src={product.imageUrl || "/placeholder.png"}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        
        {/* Right Side: Product Info */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-extrabold text-[#10152d]">{product.title}</h2>
          {/* Add stars and ratings */}
          <div className="flex mt-3">
          <span className="flex items-center">
          
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
             className="w-5 h-5 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
             className="w-5 h-5 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
             className="w-5 h-5 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-5 h-5 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
             className="w-5 h-5 text-yellow-400"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <span className="text-gray-600 ml-3">4/5</span>
          </span>
          </div>
       {/* Pricing Section */}
          <div className="flex items-center gap-4 mt-3">
            <span className="text-2xl font-semibold text-[#10152d]">${product.price}</span>
            {product.discountPercentage && (
              <span className="text-md text-red-500 line-through">${(parseFloat(product.price) + (parseFloat(product.price) * (parseFloat(product.discountPercentage) / 100))).toFixed(2)}</span>
            )}
            {product.discountPercentage && (
              <span className="text-md text-green-600 font-bold">- {product.discountPercentage}%</span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm line-clamp-2 text-gray-600 mt-2">{product.description}</p>
          {/*choose color and size */}
          <div className="flex-col mt-4">
         <span className="mr-3 text-black">Color</span>
            <button className="border-2 border-blue-500 rounded-full bg-blue-500 w-6 h-6 focus:outline-none" />
            <button className="border-2 border-green-500 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none" />
            <button className="border-2 border-orange-400 ml-1 bg-orange-400 rounded-full w-6 h-6 focus:outline-none" />
            </div>
          <div className="flex pt-4 items-center">
            <span className="mr-3 text-black">Size</span>
            <div className="relative">
              <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </div>
          </div>
          {/* Add to Cart Button */}
          <button 
            className="mt-6 w-full lg:w-auto w-100 bg-black text-white py-2 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Footer />
    </div>
  ) : null;
}
