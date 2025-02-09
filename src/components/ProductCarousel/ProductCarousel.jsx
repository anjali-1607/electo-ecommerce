import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";

const products = [
    {
        id: 1,
        name: "Best Truewireless H...",
        price: "Grab Now",
        img: "/assets/earbuds.webp",
    },
    {
        id: 2,
        name: "Monitors",
        price: "From ₹7949",
        img: "/assets/monitor.webp",
    },
    {
        id: 3,
        name: "Best Selling Mobile S...",
        price: "From ₹499*",
        img: "/assets/speaker.webp",
    },
    {
        id: 4,
        name: "Fastrack Smartwatc...",
        price: "From ₹1,399",
        img: "/assets/watch.webp",
    },
    {
        id: 5,
        name: "Monitor",
        price: "From ₹8279",
        img: "/assets/monitor.webp",
    },
    {
        id: 6,
        name: "Printers",
        price: "From ₹2336",
        img: "/assets/printer.webp",
    },
];

const ProductCarousel = () => {
    return (
        <div className="container mx-auto p-6 bg-white rounded-md">
            {/* Section Title */}
            <h2 className="text-xl font-semibold mb-4 pl-2">
                Best of Electronics
            </h2>

            {/* Full-Width Product Carousel */}
            <Swiper
                slidesPerView={6} // Show 6 products at a time on large screens
                spaceBetween={30} // More spacing between products
                scrollbar={{ draggable: true }} // Scrollbar enabled
                modules={[Scrollbar]}
                className="w-full">
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-40 object-contain mb-3"
                            />
                            <p className="text-sm font-medium text-gray-700 truncate">
                                {product.name}
                            </p>
                            <p className="text-sm font-bold text-red-600">
                                {product.price}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ProductCarousel;
