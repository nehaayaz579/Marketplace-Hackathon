"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import Header from "../component/Header";
import Footer from "../component/Footer";

type WishlistItem = {
  _id: string;
  title: string;
  price: string;
  imageUrl: string;
  quantity: number;
};

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);  // Initialize the wishlist state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Retrieve the wishlist from localStorage when the component mounts
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
    setIsLoading(false);
  }, []);

  const handleRemoveItem = (_id: string) => {
    const updatedWishlist = wishlist.filter(item => item._id !== _id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const handleContinueShopping = () => {
    window.location.href = "/";
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  return (
    <>
    <Header/>
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center gap-2 mb-8">
        <FaHeart className="h-6 w-6 text-green-600 " />
        <h1 className="text-3xl font-bold text-gray-900">Your Wish List</h1>
      </div>

      {wishlist.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm text-center py-16">
          <FaHeart className="h-16 w-16 mx-auto text-red-600 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Your Wish List is Empty
          </h2>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything to your wishlist yet
          </p>
          <button
            onClick={handleContinueShopping}
            className="inline-flex items-center gap-2 px-6 py-3 text-white bg-[#2DC071]  hover:bg-[#2d925c]  rounded-lg transition duration-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {wishlist.map((item) => (
                <div
                  key={item._id}
                  className="bg-green-200 rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={item.imageUrl || "/api/placeholder/96/96"}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-lg"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between">
                        <div className="pt-4">
                          <h3 className="font-semibold text-lg text-gray-900">
                            {item.title}
                          </h3>
                          <p className="text-lg font-semibold pt-1 text-green-600">
                            ${item.price}
                          </p>
                          <FaHeart className="w-6 h-6 text-red-600 pt-1" />
                        </div>
                        <div className="py-7">
                          <button
                            onClick={() => handleRemoveItem(item._id)}
                            className="text-white bg-red-500 py-2 px-6 rounded hover:bg-red-700 text-lg"
                            aria-label="Remove item"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}
