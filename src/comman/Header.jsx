import React, { useState } from "react";
import {
  FaSearch,
  FaRegHeart,
  FaUser,
  FaShoppingBag,
  FaStore,
} from "react-icons/fa";
import { GiDiamondRing } from "react-icons/gi";
import { MdCardGiftcard } from "react-icons/md";
import { BsFillMicFill } from "react-icons/bs";
import logo from "../assets/image/Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [cartCount, setCartCount] = useState(2); // demo cart count
  const [loginOpen, setLoginOpen] = useState(false); // modal state

  return (
    <header className="w-full shadow-md border-b border-gray-200 bg-white sticky top-0 z-50">
      {/* Top section: Logo + Search + Icons */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        {/* Left: Logo */}
        <Link to="/">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-15 md:h-15 cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>
        </Link>

        {/* Center: Desktop Search */}
        <div className="hidden md:flex flex-1 mx-6">
          <div className="flex items-center w-full bg-gray-50 rounded-full border border-gray-200 px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300">
            <FaSearch className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search for Gold, Diamond, Jewellery..."
              className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base"
            />
            <BsFillMicFill className="text-gray-400 cursor-pointer mr-3" />
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1.5 rounded-full font-medium shadow hover:opacity-90 transition-opacity text-sm md:text-base">
              Search
            </button>
          </div>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center space-x-4 md:space-x-6 text-gray-700">
          {/* Treasure */}
          <div className="hidden lg:flex relative cursor-pointer items-center space-x-1 border rounded-full px-3 py-1 hover:shadow-md transition-shadow">
            <MdCardGiftcard className="text-pink-500" />
            <span className="text-sm font-medium">Treasure</span>
            <span className="absolute -top-1 -right-2 text-xs bg-red-500 text-white px-1 rounded-full">
              New
            </span>
          </div>

          {/* Stores */}
          <div className="hidden lg:flex cursor-pointer items-center space-x-1 border rounded-full px-3 py-1 hover:shadow-md transition-shadow">
            <FaStore className="text-orange-500" />
            <span className="text-sm font-medium">Stores</span>
          </div>

          {/* Gold */}
          <div className="hidden lg:flex cursor-pointer items-center space-x-1 border rounded-full px-3 py-1 hover:shadow-md transition-shadow">
            <GiDiamondRing className="text-yellow-500" />
            <span className="text-sm font-medium">Gold</span>
          </div>

          {/* Wishlist */}
            <Link to={"/wishlist"}>
                <FaRegHeart className="text-lg md:text-xl cursor-pointer hover:text-pink-500 transition-colors" />
            </Link>

          {/* User */}
          <div>
            <button
              onClick={() => setLoginOpen(true)}
              className="text-lg md:text-xl cursor-pointer hover:text-purple-500 transition-colors"
            >
              <FaUser />
            </button>
          </div>

          {/* Cart */}
          <div className="relative">
            <Link to={"/cart"}>
              <FaShoppingBag className="text-lg md:text-xl cursor-pointer hover:text-yellow-500 transition-colors" />
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 animate-pulse">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="flex md:hidden px-4 pb-3">
        <div className="flex items-center w-full bg-gray-50 rounded-full border border-gray-200 px-3 py-2 shadow-sm">
          <FaSearch className="text-gray-400 mr-2" />
          <input
            type="text"
            placeholder="Search..."
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
          />
          <BsFillMicFill className="text-gray-400 cursor-pointer mr-2" />
        </div>
      </div>

      {/* Login Modal */}
      {loginOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setLoginOpen(false)}
          ></div>

          {/* Modal */}
          <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white rounded-lg shadow-lg z-50 p-6 transition-transform duration-500 translate-y-10 opacity-100">
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setLoginOpen(false)}
            >
              ✕
            </button>

            <h2 className="text-2xl font-semibold text-center">Login or Signup</h2>
            <p className="text-sm text-gray-500 text-center mt-2">
              Please submit your mobile no. or email id to continue
            </p>

            {/* Google Signin */}
            <button className="w-full flex items-center justify-center border rounded-md py-2 mt-6 gap-2 hover:bg-gray-50">
              <img
                src="https://www.svgrepo.com/show/355037/google.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <div className="flex-grow border-t"></div>
              <span className="px-3 text-gray-400 text-sm">or</span>
              <div className="flex-grow border-t"></div>
            </div>

            {/* Mobile Input */}
            <input
              type="text"
              placeholder="Mobile No. / Email"
              className="w-full border rounded-md px-3 py-2 mb-3 focus:ring-2 focus:ring-indigo-500 outline-none"
            />

            {/* Newsletter checkbox */}
            <label className="flex items-center text-sm gap-2 mb-4">
              <input type="checkbox" defaultChecked className="accent-yellow-600" />
              Keep up with our latest news and events. Subscribe to our newsletter.
            </label>

            {/* Buttons */}
            <Link to={"my-profile"}>
              <button className="w-full py-3 rounded-lg bg-yellow-600 text-white font-medium hover:bg-yellow-700">
                Next
              </button>
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
