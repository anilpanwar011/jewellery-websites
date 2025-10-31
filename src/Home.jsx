import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChevronLeft, FaChevronRight, FaStar, FaStarHalfAlt } from "react-icons/fa";


const collections = [
    { title: "Rings", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4V7V0ES_AgtvxjNxGIr3V7yxLa0KoyOKnxw&s", link: "#" },
    { title: "Necklaces", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTefcc4zWBZus2RYm7Hx81kTqryY3tjUdtkVA&s", link: "#" },
    { title: "Earrings", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA1oAL7rhgk2h1MolZaq_EPFnr8TKAbstDzA&s", link: "#" },
    { title: "Bracelets", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKQtxWDTaz3L0xQNC1FwcDWgocBqqVD-28Bg&s", link: "#" },
    { title: "Anklets", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxjDsTZJ31FDQCkVkDOVFxr4jrWwIZh_0Vfw&s", link: "#" },
    { title: "Chains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppmJhDkwsKB-h70dReGGK_tvucDUte3WOtg&s", link: "#" },
    { title: "Chains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-p9GF9zIQ3YNo5nrkBK-yS_EqALVuMAyLug&s", link: "#" },
    { title: "Chains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL42bYpIkp-ibgVtOZMgLJ_jBXaF6GBeqlOg&s", link: "#" },
    { title: "Chains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdw3Zq2uzFRBZ64XS-afQYZQvMmTu3lHXMQ&s", link: "#" },
    { title: "Chains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_4ahMNo6ArmitfUsRD8Gwfrgre3i3g5m3oA&s", link: "#" },
    { title: "Chains", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpqUDcEAaHXwRCGqIUwN-OM59R5u1sgjYRaQ&s", link: "#" },
];

const videos = [
    { id: 1, title: "Video 1", thumbnail: "https://cdn6.fireworktv.com/medias/2025/4/18/1744974511-iupdhswn/watermarked/720/Grid6_23rdAprilReel.mp4", isVideo: true },
    { id: 2, title: "Video 2", thumbnail: "https://cdn4.fireworktv.com/medias/2024/9/27/1727445390-kharxeqt/watermarked/540/Reel2.3.mp4", isVideo: true },
    { id: 3, title: "Video 3", thumbnail: "https://cdn4.fireworktv.com/medias/2025/4/18/1744974511-fwjnaxmb/watermarked/720/GPVideo-Final25thMarch.mp4", isVideo: true },
    { id: 4, title: "Video 4", thumbnail: "https://cdn5.fireworktv.com/medias/2025/4/23/1745388227-cxlqvfur/watermarked/720/Grid4_12thApril.mp4", isVideo: true },
    { id: 5, title: "Video 5", thumbnail: "https://cdn7.fireworktv.com/medias/2025/7/1/1751365174-txbqzple/watermarked/720/36e17f74-9f22-48d3-af9d-a92bd3c71f19.mp4", isVideo: true },
    { id: 4, title: "Video 4", thumbnail: "https://cdn1.fireworktv.com/medias/2024/9/27/1727445390-rmdghcsj/watermarked/540/Reel4.3.mp4", isVideo: true },
    { id: 5, title: "Video 5", thumbnail: "https://cdn6.fireworktv.com/medias/2025/4/18/1744974511-iupdhswn/watermarked/720/Grid6_23rdAprilReel.mp4", isVideo: true },
];

const categories = [
    {
        title: "ELEGANT TWIN",
        highlight: "BANGLES",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC8ECYcg_R-bqQcKFmVhwmpbQVpMQC9V3y2L3t1tXBa8B0rvL-I5QlaaBrpm9lKf_0NfU&usqp=CAU",
    },
    {
        title: "GLAM",
        highlight: "BRACELET",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_LmPXxfLQbgPUw7YX2kqyMXe79kgW8neMA&s",
    },
    {
        title: "TRADITIONAL",
        highlight: "BANGLES",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz8nFl435Su-ys20CQHqVZ8_bsO-82BxEVew&s",
    },
    {
        title: "MAGESTRIAL",
        highlight: "KADAS",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsxKrnhz5HK-RLBZYCjDBXOQJi-ZYPNNrUQ&s",
    },
    {
        title: "MAGESTRIAL",
        highlight: "KADAS",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7rgIhagn7AH91X1sF23GZLQ7Mdg8GM15BUQ&s",
    },
    {
        title: "MAGESTRIAL",
        highlight: "KADAS",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6VDSLGQXlVO4U_ujIOAi9u1-wjJrqo7L8JQ&s",
    },
    {
        title: "TRADITIONAL",
        highlight: "BANGLES",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CWniJ9T2WYQnUog0AAsSnqcj6LMU3QNKBA&s",
    },
    {
        title: "MAGESTRIAL",
        highlight: "KADAS",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqg5yJxYv8pbgyOaPVnX_TTJgQG5-2fv8y-w&s",
    },
    {
        title: "MAGESTRIAL",
        highlight: "KADAS",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODoASSWz_2AvZeQEElweiu9rC9x24zfLNcw&s",
    },
    {
        title: "MAGESTRIAL",
        highlight: "KADAS",
        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmK5XjdSCeQ-pGxeJNIhNyqt7LKou7Eh5-nw&s",
    },


];

const testimonials = [
    {
        id: 1,
        name: "Anjali Sharma",
        image: "https://placehold.co/50x50?text=AS",
        rating: 5,
        review:
             "Absolutely loved my gold earrings! The quality is top-notch and delivery was super fast.",
    },
    {
        id: 2,
        name: "Rajesh Kumar",
        image: "https://placehold.co/50x50?text=RK",
        rating: 4.5,
        review:
            "Bought a diamond ring for my wife – she was amazed! Premium packaging & trusted quality.",
    },
    {
        id: 3,
        name: "Priya Mehta",
        image: "https://placehold.co/50x50?text=PM",
        rating: 5,
        review:
            "Unique jewellery designs with affordable pricing. Will definitely shop again!",
    },
];

export default function Home() {
    const features = [{ id: 1, icon: "✅", title: "100% Certified Jewellery" },
    { id: 2, icon: "🏷️", title: "BIS Hallmarked Gold Jewellery" },
    { id: 3, icon: "💎", title: "Platinum Certified Jewellery" },
    { id: 4, icon: "🔄", title: "Lifetime Exchange" },
    { id: 5, icon: "🛍️", title: "Lifetime Buyback" },
    { id: 6, icon: "📅", title: "7 Days Return Policy" },
    { id: 7, icon: "🛡️", title: "1 Year Free Insurance" },
        // { id: 8, icon: "✨", title: "6 Months Free Product Upgrade" },
        // { id: 9, icon: "🚚", title: "Free Shipping" },
    ];


    const scrollReff = useRef(null);

    const scrolll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollTo({
                left: scrollLeft + scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div>
            {/* Banner */}
            <div className="relative w-full h-96 md:h-[500px]">
                <video
                    src="https://pub-fcbdfa5d08884a7fb45a0457f296badb.r2.dev/video/b/1724486881975.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>

            {/* Discover Our Collections */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        Discover Our Collections
                    </h2>

                    {/* Left Arrow */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 z-10"
                    >
                        &#8592;
                    </button>

                    {/* Right Arrow */}
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100 z-10"
                    >
                        &#8594;
                    </button>

                    {/* Scroll container */}
                    <div
                        ref={scrollRef}
                        className="flex space-x-6 overflow-x-hidden py-4 px-2"
                    >
                        {collections.map((item, index) => (
                            <Link to={"/discover"}
                                key={index}
                                href={item.link}
                                className="group relative w-40 h-40 flex-shrink-0 rounded-full overflow-hidden shadow-lg"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                {/* Removed hover black overlay */}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Grid */}
            <div className="max-w-7xl mx-auto mt-8 px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
                    {/* Earrings */}
                    <Link to={"/top-rated"}>
                        <div className="flex flex-col items-center group">
                            <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-xl transition duration-300 ease-in-out group-hover:shadow-2xl">
                                <img
                                    src="data:image/jpeg;base64,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"
                                    alt="Earrings"
                                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                                />
                            </div>
                            <h3 className="mt-4 text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wider">
                                EARRINGS
                            </h3>
                        </div>
                    </Link>

                    {/* Finger Rings */}
                    <div className="flex flex-col items-center group">
                        <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-xl transition duration-300 ease-in-out group-hover:shadow-2xl">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLtB4BgvwyTpuafTA4afLgSRA-_4W4N3EhvQ&s"
                                alt="Finger Rings"
                                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="mt-4 text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wider">
                            FINGER RINGS
                        </h3>
                    </div>

                    {/* Pendants */}
                    <div className="flex flex-col items-center group">
                        <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-xl transition duration-300 ease-in-out group-hover:shadow-2xl">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0pf5nDEOwd5fMX_cT2sVdiCejK4mNp2V_Q&s"
                                alt="Pendants"
                                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="mt-4 text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wider">
                            PENDANTS
                        </h3>
                    </div>

                    {/* Mangalsutra */}
                    <div className="flex flex-col items-center group">
                        <div className="relative w-full aspect-square overflow-hidden rounded-lg shadow-xl transition duration-300 ease-in-out group-hover:shadow-2xl">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAyUkDoWbAVwJ5sFvaDhtGRNCh-O7MjCOSyg&s"
                                alt="Mangalsutra"
                                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <h3 className="mt-4 text-sm sm:text-base font-semibold text-gray-800 uppercase tracking-wider">
                            MANGALSUTRA
                        </h3>
                    </div>
                </div>
            </div>

            {/* Our Best */}
            <div className="w-full bg-white py-12">
                {/* Top Ornamental Divider with Text */}
                <div className="relative flex items-center justify-center mb-10">
                    <div className="w-full border-t border-red-900"></div>
                    <div className="absolute bg-white px-4 flex items-center gap-3">
                        {/* Left Curl */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 20"
                            fill="none"
                            stroke="currentColor"
                            className="w-10 h-5 text-red-900"
                        >
                            <path
                                d="M0 10 C20 0, 40 20, 60 10"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>

                        {/* Center Text */}
                        <span className="text-xl font-semibold tracking-wide text-red-900 uppercase">
                            Our Best
                        </span>

                        {/* Right Curl */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 100 20"
                            fill="none"
                            stroke="currentColor"
                            className="w-10 h-5 text-red-900"
                        >
                            <path
                                d="M0 10 C20 0, 40 20, 60 10"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                    {/* Card 1 */}
                    <div className="flex items-center justify-between border border-red-900 rounded-md p-6 bg-[#faf9f7] w-full">
                        <div>
                            <h2 className="text-2xl font-bold text-red-900 mb-4">
                                Find Your Ring Size
                            </h2>
                            <button className="flex items-center gap-2 bg-red-100 text-red-900 font-semibold px-4 py-2 hover:bg-red-200 transition rounded">
                                Check Now <FaArrowRight />
                            </button>
                        </div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdb79M1vTyZIBEkb3vu2lGIeL0w9IiKhPEcgwHaifPrUSsXc-ga8-6HGCwi89ztr8uvl8&usqp=CAU"
                            alt="Ring"
                            className="w-32 md:w-44 object-contain"
                        />
                    </div>

                    {/* Card 2 */}
                    <div className="flex items-center justify-between border border-red-900 rounded-md p-6 bg-[#faf9f7] w-full">
                        <div>
                            <h2 className="text-2xl font-bold text-red-900 mb-4">
                                The Jewellery Care Guide
                            </h2>
                            <button className="flex items-center gap-2 bg-red-100 text-red-900 font-semibold px-4 py-2 hover:bg-red-200 transition rounded">
                                Learn More <FaArrowRight />
                            </button>
                        </div>
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFlF7V8rJwAJn5snt4i15zkv0gaeNfi829OQ&s"
                            alt="Earrings"
                            className="w-32 md:w-44 object-contain"
                        />
                    </div>
                </div>
            </div>

             {/* BRACELET*/}
            <div className="w-full px-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {categories.map((item, index) => (
                        <div
                            key={index}
                            className="relative overflow-hidden  group"
                            style={{ height: "400px" }}
                        >
                            {/* Background Image */}
                            <img
                                src={item.image}
                                alt={item.highlight}
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

                            {/* Text */}
                            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center">
                                <div className="h-4 w-[1px] bg-white mx-auto mb-1"></div>
                                <h4 className="text-xs text-yellow-400 tracking-wider font-medium uppercase">
                                    {item.title}
                                </h4>
                                <h2 className="text-lg font-bold text-white">{item.highlight}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Featured Products Section */}
            <div className="max-w-7xl mx-auto px-3 py-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {/* Product Card 1 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <Link to={"/product-details"}>
                            <div className="relative w-full aspect-square overflow-hidden">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIBt17wGb9SssudnRt9d0Bdoka1KB03MDXSA&s"
                                    alt="Gold Earrings"
                                    className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                                />
                            </div>
                        </Link>
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">Gold Earrings</h3>
                            <p className="text-sm text-gray-500 mb-2">22K Stylish Design</p>
                            <div className="flex justify-center items-center gap-2">
                                <span className="text-yellow-600 font-bold">₹2,499</span>
                                <span className="text-gray-400 line-through text-sm">₹3,200</span>
                            </div>
                            <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <Link to={"/product-details"}> <div className="relative w-full aspect-square overflow-hidden">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoiwiqvo_jabN6itLU0OwbTMDNmwzmMFibgQ&s"
                                alt="Diamond Ring"
                                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                            />
                        </div></Link>
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">Diamond Ring</h3>
                            <p className="text-sm text-gray-500 mb-2">Shiny & Elegant</p>
                            <div className="flex justify-center items-center gap-2">
                                <span className="text-yellow-600 font-bold">₹5,999</span>
                                <span className="text-gray-400 line-through text-sm">₹7,500</span>
                            </div>
                            <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    {/* Product Card 3 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBEEs9dsgtV4Ym4KKIotz3UOobmqH6XzK-vXdOR5uKJCQWO07eUKnuGxoYLPjGLehXshQ&usqp=CAU"
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

                    {/* Product Card 4 */}
                    <div className="bg-white rounded-lg shadow-md overflow-hidden group">
                        <div className="relative w-full aspect-square overflow-hidden">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzhAWR_WmrfhO7BF2W72DSd9WcqOC0NgM5IItL0lc8oaDRD52V6JE94FC8C5eR1984S5Y&usqp=CAU"
                                alt="Mangalsutra"
                                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">Mangalsutra</h3>
                            <p className="text-sm text-gray-500 mb-2">Traditional Style</p>
                            <div className="flex justify-center items-center gap-2">
                                <span className="text-yellow-600 font-bold">₹3,499</span>
                                <span className="text-gray-400 line-through text-sm">₹4,000</span>
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
                                alt="Mangalsutra"
                                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h3 className="text-lg font-semibold text-gray-800">Mangalsutra</h3>
                            <p className="text-sm text-gray-500 mb-2">Traditional Style</p>
                            <div className="flex justify-center items-center gap-2">
                                <span className="text-yellow-600 font-bold">₹3,499</span>
                                <span className="text-gray-400 line-through text-sm">₹4,000</span>
                            </div>
                            <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded hover:bg-yellow-600 transition">
                                Add to Cart
                            </button>
                        </div>
                    </div>



                    <div className="text-center mt-8">
                        <Link to={"/discover"}>
                            <button className=" group inline-flex items-center gap-2 px-6 py-2 rounded-full border border-gray-800 text-gray-800 font-medium transition-all duration-300 hover:bg-gray-800 hover:text-white ">
                                View All Collection
                                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </Link>
                    </div>

                </div>
            </div>

            {/* Banner Section */}
            <div className="flex flex-col md:flex-row w-full rounded-2xl overflow-hidden shadow-xl"> {/* Left Banner */}
                <div className="flex-1 bg-gradient-to-br from-black via-gray-900 to-gray-800 p-10 flex flex-col  text-white">
                    <div className=" flex w-full">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwc-svKVHr6Zclznhp38n1f3jgg5WQzfT1nQ&s" alt="Jewelry" className='w-full' />
                    </div>
                </div> {/* Right Product Section */}
                <div className="flex-[1.3] bg-purple-50 p-6 md:p-8 flex flex-col">
                    {/* Products Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {/* Product Card */}
                        {[{ id: 1, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTTO6_un23ZQ6QU2FG8yjr8Hjc74fglqMtLQNmiR5iyV03SyD-LxW7rv07_qybb9Sng_k&usqp=CAU", title: "Alor Gold Stud Earring", price: "₹5,657", oldPrice: "₹5,827", },
                        { id: 2, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUbjeKPJbUEo20UJz-Le1anCnOoF0rFgilzg&s", title: "Halo Diamond Band", price: "₹61,578", },
                        { id: 3, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTayqjsZE129sNTBYIUbm6anXJ6hqeGCAu1VA&s", title: "Classic Baby Nazariya", price: "₹8,109", oldPrice: "₹8,279", },
                        { id: 4, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUbN9q-yy_AhEYREPtYYutM2gfAL9zjAyQQ&s", title: "Ishika Diamond Stud", price: "₹7,512", },].map((item) => (<div key={item.id} className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 text-center" >
                            <img src={item.img} alt={item.title} className="h-20 mx-auto mb-3 object-contain" /> <p className="text-lg font-semibold text-gray-900">{item.price}</p> {item.oldPrice && (<p className="text-sm text-gray-400 line-through"> {item.oldPrice} </p>)}
                            <p className="mt-1 text-sm text-gray-700 truncate">{item.title}</p> </div>))}
                    </div> {/* View Collection Button */}
                    <div className="mt-8 flex justify-center"> <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-lg font-medium transition"> View Full Collection </button>
                    </div>
                </div>
            </div>

            {/* Video Carousel Section */}
            <div className="relative w-full max-w-7xl mx-auto py-8">
                {/* Carousel Buttons */}
                <button
                    onClick={() => scrolll("left")}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10"
                >
                    <FaChevronLeft />
                </button>
                <button
                    onClick={() => scrolll("right")}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-md rounded-full p-3 z-10"
                >
                    <FaChevronRight />
                </button>

                {/* Carousel */}
                <div
                    ref={scrollReff}
                    className="flex overflow-x-auto scrollbar-hide space-x-4 px-4 scroll-smooth"
                    style={{
                        scrollbarWidth: "none", // Firefox
                    }}
                >

                    {videos.map((video) => (
                        <div
                            key={video.id}
                            className="min-w-[250px] flex-shrink-0 rounded-lg overflow-hidden shadow-lg group cursor-pointer hover:scale-105 transition-transform duration-300"
                        >
                            {video.isVideo ? (
                                <video
                                    src={video.thumbnail}
                                    className="w-full h-64 md:h-100 lg:h-96 object-cover"
                                    muted
                                    loop
                                    playsInline
                                    onMouseOver={(e) => e.currentTarget.play()}
                                    onMouseOut={(e) => e.currentTarget.pause()}
                                />
                            ) : (
                                <img
                                    src={video.thumbnail}
                                    alt={video.title}
                                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                                />
                            )}
                            <div className="p-2 text-center">
                                <h3 className="text-sm font-medium">{video.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-[#FAF5FF] py-8 px-4 md:px-10 overflow-x-auto">
                <div className="flex gap-10 min-w-max"> {features.map((item) => (
                    <div key={item.id} className="flex flex-col items-center text-gray-800 min-w-[140px]" >
                        <div className="relative w-20 h-20 flex items-center justify-center rounded-full border border-gray-300">
                            <span className="text-2xl">{item.icon}</span> {/* Star sparkle */} <span className="absolute top-1 right-1 text-yellow-400 text-sm"> ✦ </span> </div>
                        <p className="mt-3 text-sm md:text-base font-medium text-center"> {item.title} </p> </div>))}
                </div>
            </div>

            {/* reuse */}
            <div className="bg-indigo-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">
                        What Our Users Say
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t) => (
                            <div
                                key={t.id}
                                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
                            >
                                {/* User Info */}
                                <div className="flex items-center mb-4">
                                    <img
                                        src={t.image}
                                        alt={t.name}
                                        className="h-12 w-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <h4 className="font-medium">{t.name}</h4>
                                        <div className="flex text-yellow-400">
                                            {Array.from({ length: Math.floor(t.rating) }).map(
                                                (_, i) => (
                                                    <FaStar key={i} />
                                                )
                                            )}
                                            {t.rating % 1 !== 0 && <FaStarHalfAlt />}
                                        </div>
                                    </div>
                                </div>

                                {/* Review */}
                                <p className="text-gray-600">"{t.review}"</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
