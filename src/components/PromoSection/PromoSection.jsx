import React from "react";

const promoItems = [
    {
        id: 1,
        title: "The New NeoX Camera 4K",
        description:
            "Experience stunning 4K video quality with our latest NeoX Camera. Perfect for travel and vlogging.",
        img: "/assets/camera.webp",
        bgColor: "bg-gradientStart",
        textColor: "text-primaryText",
    },
    {
        id: 2,
        title: "SmartX 2: Leading Edge Tech",
        description:
            "Discover a new era of technology with the SmartX 2 smartwatch. Track health, receive notifications, and more.",
        img: "/assets/watch.webp",
        bgColor: "bg-gradientEnd",
        textColor: "text-white",
    },
    {
        id: 3,
        title: "UltraBook Pro - Thin & Powerful",
        description:
            "A super slim, high-performance laptop for work, gaming, and everything in between.",
        img: "/assets/laptop.webp",
        bgColor: "bg-secondaryText",
        textColor: "text-white",
    },
    {
        id: 4,
        title: "SurroundX Headphones",
        description:
            "Immerse yourself in premium sound with noise cancellation and deep bass technology.",
        img: "/assets/headphone.webp",
        bgColor: "bg-primaryText",
        textColor: "text-white",
    },
];

const PromoSection = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {promoItems.map((item, index) => (
                    <div
                        key={item.id}
                        className={`relative flex flex-col md:flex-row items-center justify-between rounded-lg overflow-hidden shadow-lg p-6 ${item.bgColor} transition hover:scale-[1.02]`}>
                        {/* Left: Text Content */}
                        <div
                            className={`relative z-10 flex-1 ${item.textColor}`}>
                            <h2 className="text-2xl font-bold">{item.title}</h2>
                            <p className="text-sm mt-2">{item.description}</p>
                            <button className="mt-4 px-5 py-2 bg-white text-primaryText font-semibold rounded-md hover:bg-gray-200 transition">
                                Buy Now
                            </button>
                        </div>

                        {/* Right: Image Section (Positioned Differently for Even & Odd Indexes) */}
                        <div
                            className={`w-full md:w-1/3 flex-shrink-0 mt-4 md:mt-0 ${
                                index % 2 === 0 ? "md:order-2" : ""
                            }`}>
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PromoSection;
