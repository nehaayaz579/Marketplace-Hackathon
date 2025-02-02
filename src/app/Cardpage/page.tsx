"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "../component/Header";
import Footer from "../component/Footer";

type CartItem = {
  _id: string;
  title: string;
  price: string;
  imageUrl: string;
  quantity: number;
};

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
    setIsLoading(false);
  }, []);

  const handleRemoveItem = (_id: string) => {
    const updatedCart = cart.filter(item => item._id !== _id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleUpdateQuantity = (_id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    const updatedCart = cart.map(item =>
      item._id === _id ? { ...item, quantity: newQuantity } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

 

  const handleContinueShopping = () => {
    window.location.href = "/";
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0);
  const shipping = 10.00; // Example shipping cost
  const tax = subtotal * 0.08; // Example tax rate (8%)
  const totalPrice = subtotal + shipping + tax;

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
        <ShoppingBag className="h-6 w-6 text-green-600 " />
        <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        <span className="text-sm text-gray-500 ml-2">({totalItems} items)</span>
      </div>

      {cart.length === 0 ? (
        <div className="bg-white rounded-lg shadow-sm text-center py-16">
          <ShoppingBag className="h-16 w-16 mx-auto text-gray-400 mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you havent added anything to your cart yet</p>
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
              {cart.map((item) => (
                <div key={item._id} className="bg-green-200 rounded-lg shadow-sm p-4 hover:shadow-lg transition-shadow duration-200">
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
                        <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
                        <button
                          onClick={() => handleRemoveItem(item._id)}
                          className="text-red-500 hover:text-red-700 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      <p className="text-lg font-semibold text-green-600">${item.price}</p>
                      <div className="flex items-center gap-3 mt-2">
                        <button
                          onClick={() => handleUpdateQuantity(item._id, item.quantity - 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item._id, item.quantity + 1)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-xl p-6 space-y-4">
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Shipping</span>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg">
              <span className="font-semibold">Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-4 text-lg flex justify-between font-semibold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div>
            <Link href="/Checkout">
            <button
              className="w-full py-3 text-white bg-[#2DC071]  hover:bg-[#2d925c]  rounded-lg transition duration-300"
            >
              Checkout
            </button>
            </Link>
            </div>
          </div>
        </div>
      )}
    </div>
    <Footer/>
    </>
  );
}
