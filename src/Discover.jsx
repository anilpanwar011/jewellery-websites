import React, { useRef } from 'react'
import Header from './comman/Header'
import Footer from './comman/Footer'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import JewelleryNav from './comman/JewelleryNav';

const videos = [
    { id: 1, thumbnail: "https://cdn4.fireworktv.com/medias/2025/4/18/1744974511-fwjnaxmb/watermarked/720/GPVideo-Final25thMarch.mp4", isVideo: true },
    { id: 2, thumbnail: "https://cdn5.fireworktv.com/medias/2024/10/8/1728394756-kcnwpomb/watermarked/540/Navratriinfluencer.mp4", isVideo: true },
    { id: 3, thumbnail: "https://cdn4.fireworktv.com/medias/2025/4/18/1744974511-fwjnaxmb/watermarked/720/GPVideo-Final25thMarch.mp4", isVideo: true },
    { id: 4, thumbnail: "https://cdn5.fireworktv.com/medias/2025/4/23/1745388227-cxlqvfur/watermarked/720/Grid4_12thApril.mp4", isVideo: true },
    { id: 5, thumbnail: "https://cdn7.fireworktv.com/medias/2025/7/1/1751365174-txbqzple/watermarked/720/36e17f74-9f22-48d3-af9d-a92bd3c71f19.mp4", isVideo: true },
    { id: 6, thumbnail: "https://cdn1.fireworktv.com/medias/2024/9/27/1727445390-rmdghcsj/watermarked/540/Reel4.3.mp4", isVideo: true },
    { id: 7, thumbnail: "https://cdn6.fireworktv.com/medias/2025/4/18/1744974511-iupdhswn/watermarked/720/Grid6_23rdAprilReel.mp4", isVideo: true },
];

export default function Discover() {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -400 : 400,
                behavior: "smooth",
            });
        }
    };

    return (
        <>
            <Header />
             <JewelleryNav/>

            {/* Banner */}
          


            {/* Full Screen Video Row */}
            <div className="relative w-full py-8">
                {/* Carousel Buttons */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10"
                >
                    <FaChevronRight />
                </button>

                {/* Carousel */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 scroll-smooth"
                    style={{ scrollbarWidth: "none" }}
                >
                    {videos.map((video, index) => (
                        <div
                            key={index}
                            className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 flex-shrink-0 rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-300"
                        >
                            <video
                                src={video.thumbnail}
                                className="w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] object-cover"
                                muted
                                loop
                                playsInline
                                onMouseOver={(e) => e.currentTarget.play()}
                                onMouseOut={(e) => e.currentTarget.pause()}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4cZ7HUtLp5qNWfz09uf0GT4EK57AlwU6fOj47W8kL84zRPPM973NsNdI&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYHno42T3SvNwV1pmATmbo6eUexDeavSEZag&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS78Ke3v7w7yvOtWuSY9ZQN4dZIh8NAbQuxUg&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsBgxhJnoa8zA7lyFCnkmbcEZcUMHsz9ekIg&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1oAL7rhgk2h1MolZaq_EPFnr8TKAbstDzA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9zfh4SxMUIKbMdUlyDW8g5V3HInwV9ctQw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4ahMNo6ArmitfUsRD8Gwfrgre3i3g5m3oA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5HaCn5OPR6E9fjBKccUVCVNbAyN-25q92A&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98su_HNqrCbOvJ7BeqikBx8TTiQd5fYjENw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1oAL7rhgk2h1MolZaq_EPFnr8TKAbstDzA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9zfh4SxMUIKbMdUlyDW8g5V3HInwV9ctQw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4ahMNo6ArmitfUsRD8Gwfrgre3i3g5m3oA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5HaCn5OPR6E9fjBKccUVCVNbAyN-25q92A&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98su_HNqrCbOvJ7BeqikBx8TTiQd5fYjENw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1oAL7rhgk2h1MolZaq_EPFnr8TKAbstDzA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9zfh4SxMUIKbMdUlyDW8g5V3HInwV9ctQw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4ahMNo6ArmitfUsRD8Gwfrgre3i3g5m3oA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5HaCn5OPR6E9fjBKccUVCVNbAyN-25q92A&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98su_HNqrCbOvJ7BeqikBx8TTiQd5fYjENw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>


                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1oAL7rhgk2h1MolZaq_EPFnr8TKAbstDzA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9zfh4SxMUIKbMdUlyDW8g5V3HInwV9ctQw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4ahMNo6ArmitfUsRD8Gwfrgre3i3g5m3oA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5HaCn5OPR6E9fjBKccUVCVNbAyN-25q92A&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98su_HNqrCbOvJ7BeqikBx8TTiQd5fYjENw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1oAL7rhgk2h1MolZaq_EPFnr8TKAbstDzA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9zfh4SxMUIKbMdUlyDW8g5V3HInwV9ctQw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4ahMNo6ArmitfUsRD8Gwfrgre3i3g5m3oA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5HaCn5OPR6E9fjBKccUVCVNbAyN-25q92A&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98su_HNqrCbOvJ7BeqikBx8TTiQd5fYjENw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1oAL7rhgk2h1MolZaq_EPFnr8TKAbstDzA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe9zfh4SxMUIKbMdUlyDW8g5V3HInwV9ctQw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4ahMNo6ArmitfUsRD8Gwfrgre3i3g5m3oA&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT5HaCn5OPR6E9fjBKccUVCVNbAyN-25q92A&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                    <div className="relative w-full aspect-square overflow-hidden">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR98su_HNqrCbOvJ7BeqikBx8TTiQd5fYjENw&s"
                            alt="Pendant"
                            className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                        />
                    </div>
                    <div className="p-4 text-center">
                        <h3 className="text-lg font-semibold text-gray-800">Pendant</h3>
                        <p className="text-sm text-gray-500 mb-2">Classic Design</p>
                        <div className="flex justify-center items-center gap-2">
                            <span className="text-yellow-600 font-bold">₹1,799</span>
                            <span className="text-gray-400 line-through text-sm">₹2,200</span>
                        </div>
                        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                            Add to Cart
                        </button>
                    </div>
                </div>


            </div>



            <Footer />
        </>
    );
}
