import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/scrollbar";

const products = [
    {
        id: 1,
        name: "Best True Wireless H...",
        price: "₹2999",
        img: "/assets/earbuds.webp",
    },
    { id: 2, name: "Monitors", price: "₹7949", img: "/assets/monitor.webp" },
    {
        id: 3,
        name: "Best Selling Mobile S...",
        price: "₹499*",
        img: "/assets/speaker.webp",
    },
    {
        id: 4,
        name: "Fastrack Smartwatch",
        price: "₹1,399",
        img: "/assets/watch.webp",
    },
    { id: 5, name: "Monitor", price: "₹8279", img: "/assets/monitor.webp" },
    { id: 6, name: "Printers", price: "₹2336", img: "/assets/printer.webp" },
];

const ProductCarousel = () => {
    const navigate = useNavigate();

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <div className="container mx-auto p-6 bg-white rounded-md">
            <h2 className="text-xl font-semibold mb-4 pl-2">
                Best of Electronics
            </h2>

            <Swiper
                slidesPerView={6}
                spaceBetween={30}
                scrollbar={{ draggable: true }}
                modules={[Scrollbar]}
                className="w-full">
                {products.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div
                            onClick={() => handleProductClick(product.id)}
                            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition text-center cursor-pointer">
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
