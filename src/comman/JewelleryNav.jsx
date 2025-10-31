// JewelleryNav.jsx
import React from "react";
import { GiDiamondRing } from "react-icons/gi";
import { FaRing, FaGift } from "react-icons/fa";
import { MdCollections } from "react-icons/md";
import { TbJewishStar } from "react-icons/tb";

const categories = [
  { name: "All Jewellery", icon: TbJewishStar },
  { name: "Gold", icon: GiDiamondRing },
  { name: "Diamond", icon: GiDiamondRing },
  { name: "Earrings", icon: GiDiamondRing },
  { name: "Rings", icon: FaRing },
  { name: "Daily Wear", icon: GiDiamondRing },
  { name: "Collections", icon: MdCollections },
  { name: "Wedding", icon: GiDiamondRing },
  { name: "Gifting", icon: FaGift },
  { name: "More", icon: GiDiamondRing },
  
];

export default function JewelleryNav() {
  return (
    <nav className="bg-[#FAF9F7] border-b ">
      <div className="max-w-7xl mx-auto overflow-x-auto">
        <div className="flex gap-6 md:gap-15 py-4 px-4 md:px-0 whitespace-nowrap">
          {categories.map((item) => (
            <button
              key={item.name}
              className="flex flex-col items-center text-gray-700 hover:text-black transition min-w-[70px]"
            >
              <item.icon className="text-2xl mb-1" />
              <span className="text-xs md:text-sm">{item.name}</span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
