import React, { useState } from "react";
import { FaTrash, FaShoppingCart, FaHeart } from "react-icons/fa";
import Header from "./comman/Header";
import Footer from "./comman/Footer";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Gold Ring",
      price: 4999,
      image: "https://cdn.orra.co.in/media/catalog/category/Pendant_Set.jpg",
    },
    {
      id: 2,
      name: "Diamond Necklace",
      price: 15999,
      image: "https://cdn.orra.co.in/media/catalog/category/Necklace_Set_2.jpg",
    },
    {
      id: 3,
      name: "Silver Bracelet",
      price: 2499,
      image: "https://cdn.orra.co.in/media/catalog/category/necklace24925.jpg",
    },
  ]);

  const removeItem = (id) => {
    setWishlist(wishlist.filter((item) => item.id !== id));
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="flex items-center gap-3 mb-10">
          <FaHeart className="text-pink-500 text-3xl" />
          <h1 className="text-3xl font-bold text-gray-800">My Wishlist</h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center p-10 bg-white/60 backdrop-blur-md rounded-xl shadow-lg">
            <p className="text-gray-600 text-lg">✨ Your wishlist is empty.</p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {wishlist.map((item) => (
              <div
                key={item.id}
                className="relative group bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />

                {/* Content */}
                <div className="p-5">
                  <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600 font-medium mb-4">₹{item.price}</p>

                  {/* Buttons */}
                  <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-medium shadow hover:opacity-90 transition">
                      <FaShoppingCart /> Add to Cart
                    </button>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-3 rounded-full bg-gray-100 hover:bg-red-500 hover:text-white transition"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
}
