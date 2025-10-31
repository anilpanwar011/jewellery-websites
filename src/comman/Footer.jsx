
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">JewelsStore</h2>
          <p className="text-sm text-gray-400 leading-6">
            Premium certified jewellery with timeless designs. 
            We deliver elegance, trust, and a sparkle for every occasion.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Shop</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Customer Care</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white">FAQ</a></li>
            <li><a href="#" className="hover:text-white">Return Policy</a></li>
            <li><a href="#" className="hover:text-white">Shipping Info</a></li>
            <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Updated</h3>
          <p className="text-sm mb-3 text-gray-400">
            Subscribe to our newsletter for exclusive offers, trends & updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-l-lg focus:outline-none text-white "
            />
            <button className="bg-purple-600 hover:bg-purple-700 px-6 rounded-r-lg text-white font-medium">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 text-sm">
        <p className="text-gray-400">© {new Date().getFullYear()} JewelsStore. All rights reserved.</p>
        
        {/* Social Icons */}
        <div className="flex space-x-6 mt-6 md:mt-0">
          <a href="#" className="hover:text-white"><FaFacebookF /></a>
          <a href="#" className="hover:text-white"><FaInstagram /></a>
          <a href="#" className="hover:text-white"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/anil-panwar-b0a455374/" className="hover:text-white"><FaLinkedinIn /></a>
        </div>
      </div>
    </footer>
  );
}

