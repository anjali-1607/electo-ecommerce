import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 49.99,
        category: "Audio",
        image: "/assets/headphone.webp",
        description:
            "Experience crystal-clear sound with our premium wireless headphones. Perfect for music lovers and gamers alike.",
    },
    {
        id: 2,
        name: "Smartphone X",
        price: 699.99,
        category: "Mobile",
        image: "/assets/monitor.webp",
        description:
            "The latest Smartphone X with an ultra-fast processor, AMOLED display, and 5G connectivity.",
    },
    {
        id: 3,
        name: "Gaming Laptop",
        price: 1299.99,
        category: "Computers",
        image: "/assets/laptop.webp",
        description:
            "A powerful gaming laptop with high-speed performance and immersive graphics.",
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 199.99,
        category: "Wearable",
        image: "/assets/watch.webp",
        description:
            "Track your fitness, receive notifications, and stay connected with our stylish smartwatch.",
    },
    {
        id: 5,
        name: "4K Ultra HD TV",
        price: 899.99,
        category: "TV",
        image: "/assets/tv.webp",
        description:
            "Enjoy stunning visuals with the latest 4K Ultra HD Smart TV, perfect for home entertainment.",
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 79.99,
        category: "Audio",
        image: "/assets/speaker.webp",
        description:
            "Experience powerful sound in a compact design with our premium Bluetooth speaker.",
    },
];

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="text-center py-10 text-gray-600">
                Product not found.
            </div>
        );
    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Product Image */}
                    <div className="flex justify-center">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full max-w-sm md:max-w-md rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-3xl font-bold text-primaryText">
                            {product.name}
                        </h2>
                        <p className="text-lg text-gray-700 mt-2">
                            ${product.price.toFixed(2)}
                        </p>
                        <p className="text-gray-600 mt-4">
                            {product.description}
                        </p>

                        <div className="mt-6 flex space-x-4">
                            <button className="px-6 py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-md hover:opacity-90 transition">
                                Add to Cart
                            </button>
                            <button className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-md hover:bg-gray-100 transition">
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
