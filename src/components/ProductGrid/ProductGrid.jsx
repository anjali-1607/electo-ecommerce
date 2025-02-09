import React from "react";
import { FaStar } from "react-icons/fa";

const products = [
    {
        id: 1,
        name: "Wireless Gaming Mouse",
        price: "$35.00",
        rating: 4.5,
        reviews: 120,
        img: "/assets/mouse.webp",
    },
    {
        id: 2,
        name: "Ultra HD Smart TV",
        price: "$699.99",
        rating: 4.8,
        reviews: 250,
        img: "/assets/tv.webp",
    },
    {
        id: 3,
        name: "High-Speed Desktop Computer",
        price: "$999.99",
        rating: 4.7,
        reviews: 180,
        img: "/assets/monitor.webp",
    },
    {
        id: 4,
        name: "Front Load Washing Machine",
        price: "$499.99",
        rating: 4.6,
        reviews: 90,
        img: "/assets/washing-machine.webp",
    },
    {
        id: 5,
        name: "Stainless Steel Refrigerator",
        price: "$799.99",
        rating: 4.9,
        reviews: 130,
        img: "/assets/fridge.webp",
    },
    {
        id: 6,
        name: "Stainless Steel Refrigerator",
        price: "$799.99",
        rating: 4.9,
        reviews: 130,
        img: "/assets/fridge.webp",
    },
    {
        id: 7,
        name: "Stainless Steel Refrigerator",
        price: "$799.99",
        rating: 4.9,
        reviews: 130,
        img: "/assets/fridge.webp",
    },
    {
        id: 8,
        name: "Ultra HD Smart TV",
        price: "$699.99",
        rating: 4.8,
        reviews: 250,
        img: "/assets/tv.webp",
    },
    {
        id: 9,
        name: "High-Speed Desktop Computer",
        price: "$999.99",
        rating: 4.7,
        reviews: 180,
        img: "/assets/monitor.webp",
    },
    {
        id: 10,
        name: "Front Load Washing Machine",
        price: "$499.99",
        rating: 4.6,
        reviews: 90,
        img: "/assets/washing-machine.webp",
    },
];

const ProductGrid = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-xl font-semibold text-primaryText mb-6">
                Trending Electronics
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-lg transition duration-300">
                        {/* Product Image */}
                        <div className="w-full h-40 flex items-center justify-center">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Product Details */}
                        <h3 className="text-sm font-semibold text-gray-800 mt-3">
                            {product.name}
                        </h3>

                        {/* Rating */}
                        <div className="flex items-center text-yellow-500 mt-1">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={
                                        i < Math.floor(product.rating)
                                            ? "text-yellow-500"
                                            : "text-gray-300"
                                    }
                                />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">
                                ({product.reviews} Reviews)
                            </span>
                        </div>

                        {/* Price */}
                        <p className="text-lg font-bold text-gradientEnd mt-2">
                            {product.price}
                        </p>

                        {/* Add to Cart Button */}
                        <button className="w-full mt-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-white py-2 rounded-md hover:opacity-90 transition">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
