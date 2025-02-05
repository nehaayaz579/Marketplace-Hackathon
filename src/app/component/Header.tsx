"use client"; // Ensure the component is client-side only
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { FaHeart } from "react-icons/fa";
import Searchbar from "./Searchbar";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // Track if it's client-side

  useEffect(() => {
    setIsClient(true); // Set to true once the component has mounted on the client-side
  }, []);

  return (
    <header className="w-full bg-white">
      <div className="flex justify-between items-center px-4 sm:px-4 lg:px-10 h-[67px]">
        {/* Logo */}
        <div className="text-2xl font-bold text-black">
          <Link href="/">Bandage</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-grow justify-center">
          <ul className="flex gap-8 text-sm font-bold text-gray-600">
            {[
              "Home",
              "Shop",
              "Products",
              "About",
              "Team",
              "Contact",
              "Price",
            ].map((item, index) => (
              <li key={index} className="hover:text-black text-[18px]">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Searchbar */}
        <Searchbar />

        {/* Right Side Icons */}
        <div className="flex items-center gap-4">
          {/* Clerk SignIn / SignUp */}
          {isClient && ( // Ensure Clerk components render only on client-side
            <div className="hidden md:flex items-center gap-1 cursor-pointer">
              <SignedOut>
                <div className="flex items-center gap-2">
                  <IoPersonOutline className="w-6 h-6 text-blue-500 hover:text-black" />
                  <SignInButton>
                    <button className="text-blue-500 font-semibold text-sm hover:text-blue-700">Login</button>
                  </SignInButton>
                  <span>/</span>
                  <SignUpButton>
                    <button className="text-blue-500 font-semibold text-sm hover:text-blue-700">Register</button>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          )}

          {/* Icons */}
          <div className="flex gap-3">
            {/* Cart Icon linked to Cart page */}
            <Link href="/Cardpage">
              <PiShoppingCartLight className="w-6 h-6 text-blue-500 hover:text-blue-700" />
            </Link>
            <Link href="/Wishlistcard">
              <FaHeart className="w-6 h-6 text-blue-500 hover:text-blue-700" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-blue-500"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-white border-t">
          <ul className="flex flex-col items-center gap-4 py-4 text-gray-600 text-base font-medium">
            {[
              "Home",
              "Shop",
              "Products",
              "About",
              "Team",
              "Contact",
              "Price",
            ].map((item, index) => (
              <li key={index} className="hover:text-black">
                <Link href={`/${item === "Home" ? "" : item}`}>{item}</Link>
              </li>
            ))}
            
            {/* Login/Register Section in Mobile Menu */}
            <li className="flex items-center gap-2 cursor-pointer mt-4">
              <IoPersonOutline className="w-6 h-6 text-blue-500 hover:text-black" />
              {isClient ? (
                <div className="flex items-center gap-2">
                  <SignedOut>
                    <div className="flex flex-col items-center">
                      <SignInButton>
                        <button className="text-blue-500 font-semibold hover:text-blue-700">Login</button>
                      </SignInButton>
                      <span className="text-blue-500">/</span>
                      <SignUpButton>
                        <button className="text-blue-500 font-semibold hover:text-blue-700">Register</button>
                      </SignUpButton>
                    </div>
                  </SignedOut>
                  <SignedIn>
                    <UserButton />
                  </SignedIn>
                </div>
              ) : (
                <Link href="/login" className="text-blue-500 font-semibold hover:text-blue-700">
                  Login / Register
                </Link>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
