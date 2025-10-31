import React, { useState } from "react";
import Header from "./comman/Header";
import Footer from "./comman/Footer";
import JewelleryNav from "./comman/JewelleryNav";

export default function EarringsPage() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1799);

  const products = [
    {
      id: 1,
      title: "Gold Drop Earrings",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiVcGz23LJFtisSXsudGFhgBpERaA3E54DAA&s",
    },
    {
      id: 2,
      title: "Colorful Jhumka",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMOh-IGoqu2jPCoyy0vVkrBurj_Ie5qHXlng&s",
    },
    {
      id: 3,
      title: "Silver Green Jhumka",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTbOUrhv819NMqMyyEYEOje7dWROHg4nOzA&s",
    },
    {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG6qTfibG4i3mhQNIQIT6pS-Cu5aE-rpzJlg&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSCpU1W3Gpcb8kAntlcvTi6KaS8BkB9zt_ZQ&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfAmYliB76knIOoTppa_F8VIkImv-8tMS4vg&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvIaQJ-uvPfNGRqcEqOhnYYA9c8HUPD3osoQ&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "data:image/jpeg;base64,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",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLobahlxKorkDu1Gss8oq8ru6xCbg-xh_9gA&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiV3TQmEbFJS3uj1p5bzLLHwUiBmMR0L2kbw&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuIxXAQ55dHp6GkVBR6URR_-j461rZUu3JA&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5AL0g6LS3nFr6GB8A2V2QmCqD_12L-3zIA&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLobahlxKorkDu1Gss8oq8ru6xCbg-xh_9gA&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiV3TQmEbFJS3uj1p5bzLLHwUiBmMR0L2kbw&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVuIxXAQ55dHp6GkVBR6URR_-j461rZUu3JA&s",
      tag: "New Launch",
    },
     {
      id: 4,
      title: "Hoops with Stones",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI5AL0g6LS3nFr6GB8A2V2QmCqD_12L-3zIA&s",
      tag: "New Launch",
    },
  ];

  return (
    <>
      <Header />
       <JewelleryNav/>
      <div className="min-h-screen bg-white flex flex-col">
        {/* ===== Top Banner ===== */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 w-full">
  {/* Image 1 */}
  <div className="rounded-lg overflow-hidden h-40 w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSocoll2nV3IhthXo0dwdtmM_r1jBsuvbONJQ&s"
      alt="Jewellery"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Image 2 */}
  <div className="rounded-lg overflow-hidden h-40 w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShWLEF3VwlY9IN2W6Rm5pwU_n9JaoNEAZd0A&s"
      alt="Jewellery"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Image 3 (hidden on mobile) */}
  <div className="hidden md:block rounded-lg overflow-hidden h-40 w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMFDjbOGFIP1rqvXnKGbe6P-eioG5w5WEmg&s"
      alt="Jewellery"
      className="w-full h-full object-cover"
    />
  </div>
</div>

        {/* ===== Main Layout ===== */}
        <div className="flex flex-1 w-full">
          {/* Sidebar */}
          <aside className="w-64 bg-gray-50 border-r p-6 hidden md:block">
            <h3 className="font-semibold text-lg mb-4">Filters</h3>

            {/* Price Filter with Range */}
            <div className="mb-6">
              <label className="block font-medium mb-2">Price</label>
              <div className="flex flex-col gap-3">
                {/* Two range inputs overlapping */}
                <div className="relative w-full">
                  <input
                    type="range"
                    min="0"
                    max="1799"
                    value={minPrice}
                    onChange={(e) =>
                      setMinPrice(Math.min(Number(e.target.value), maxPrice - 100))
                    }
                    className="absolute pointer-events-none appearance-none w-full h-1 bg-transparent z-20 accent-yellow-500"
                  />
                  <input
                    type="range"
                    min="0"
                    max="1799"
                    value={maxPrice}
                    onChange={(e) =>
                      setMaxPrice(Math.max(Number(e.target.value), minPrice + 100))
                    }
                    className="absolute pointer-events-none appearance-none w-full h-1 bg-transparent z-30 accent-yellow-500"
                  />
                  {/* Track bar */}
                  <div className="relative h-1 bg-gray-300 rounded">
                    <div
                      className="absolute h-1 bg-yellow-500 rounded"
                      style={{
                        left: `${(minPrice / 1799) * 100}%`,
                        right: `${100 - (maxPrice / 1799) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>

                {/* Price Values */}
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>₹{minPrice}</span>
                  <span>₹{maxPrice}</span>
                </div>
              </div>
            </div>

            {/* Polish Options */}
            <div>
              <label className="block font-medium mb-2">Polish</label>
              {[
                "Gold Polish",
                "Matte Gold Polish",
                "Rose Gold Polish",
                "Rhodium Silver Polish",
                "Mendi Gold Polish",
                
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 mb-2">
                  <input type="checkbox" className="h-4 w-4 text-yellow-500" />
                  <span className="text-gray-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Product Section */}
          <main className="flex-1 p-6">
            {/* Sorting */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Earrings</h2>
              <select className="border rounded-md px-3 py-2 text-sm">
                <option>Latest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition relative"
                >
                  {item.tag && (
                    <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-1 rounded">
                      {item.tag}
                    </span>
                  )}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-t-xl"
                  />
                  <div className="p-3">
                    <h3 className="text-sm font-medium text-gray-700">
                      {item.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer/>
    </>
  );
}
