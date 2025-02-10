import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 49.99,
        category: "Audio",
        image: "/assets/headphone.webp",
    },
    {
        id: 2,
        name: "Smartphone X",
        price: 699.99,
        category: "Mobile",
        image: "/assets/monitor.webp",
    },
    {
        id: 3,
        name: "Gaming Laptop",
        price: 1299.99,
        category: "Computers",
        image: "/assets/laptop.webp",
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 199.99,
        category: "Wearable",
        image: "/assets/watch.webp",
    },
    {
        id: 5,
        name: "4K Ultra HD TV",
        price: 899.99,
        category: "TV",
        image: "/assets/tv.webp",
    },
    {
        id: 6,
        name: "Bluetooth Speaker",
        price: 79.99,
        category: "Audio",
        image: "/assets/speaker.webp",
    },
    {
        id: 7,
        name: "Wireless Headphones",
        price: 49.99,
        category: "Audio",
        image: "/assets/headphone.webp",
    },
    {
        id: 8,
        name: "Smartphone X",
        price: 699.99,
        category: "Mobile",
        image: "/assets/monitor.webp",
    },
    {
        id: 9,
        name: "Gaming Laptop",
        price: 1299.99,
        category: "Computers",
        image: "/assets/laptop.webp",
    },
    {
        id: 10,
        name: "Smart Watch",
        price: 199.99,
        category: "Wearable",
        image: "/assets/watch.webp",
    },
    {
        id: 11,
        name: "4K Ultra HD TV",
        price: 899.99,
        category: "TV",
        image: "/assets/tv.webp",
    },
];

const categories = ["All", "Audio", "Mobile", "Computers", "Wearable", "TV"];

const ProductList = () => {
    const [cart, setCart] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceRange, setPriceRange] = useState(1500);

    const navigate = useNavigate();

    const addToCart = (product) => {
        setCart([...cart, product]);
        alert(`${product.name} added to cart!`);
    };

    const filteredProducts = products.filter(
        (product) =>
            (selectedCategory === "All" ||
                product.category === selectedCategory) &&
            product.price <= priceRange
    );

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-6 py-10">
                <h2 className="text-2xl font-medium text-primaryText  mb-6">
                    Featured Products
                </h2>

                {/* Filters Section */}
                <div className="flex flex-wrap items-center justify-between bg-white p-4 rounded-lg shadow-md mb-6">
                    <div className="flex items-center space-x-4">
                        <label className="text-sm font-semibold text-gray-600">
                            Category:
                        </label>
                        <select
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                            className="border border-gray-300 p-2 rounded-md text-sm">
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex items-center space-x-4">
                        <label className="text-sm font-semibold text-gray-600">
                            Price:
                        </label>
                        <input
                            type="range"
                            min="0"
                            max="1500"
                            value={priceRange}
                            onChange={(e) =>
                                setPriceRange(Number(e.target.value))
                            }
                            className="w-40"
                        />
                        <span className="text-sm text-gray-700">
                            ${priceRange}
                        </span>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div
                                onClick={() => navigate("/product-description")}
                                key={product.id}
                                className="bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-32 object-contain"
                                />
                                <h3 className="text-sm font-semibold mt-3">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 text-xs">
                                    ${product.price.toFixed(2)}
                                </p>
                                <div className="mt-3 flex justify-between">
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="px-3 py-1 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-md hover:opacity-90 transition text-xs">
                                        Add to Cart
                                    </button>
                                    <button className="px-3 py-1 border border-gray-300 text-xs font-semibold rounded-md hover:bg-gray-100 transition">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600 text-center col-span-full">
                            No products found in this price range.
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductList;
