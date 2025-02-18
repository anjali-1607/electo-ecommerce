import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ✅ Dummy product data with enhanced description
const product = {
    name: "SmartPhone",
    price: 9999,
    img: "/assets/categories/smartphones.webp",
    rating: 4.5,
    description: `
        The latest **SmartPhone** is engineered with cutting-edge technology that enhances your digital lifestyle. 
        With a **sleek and lightweight design**, it fits perfectly in your hand while delivering powerful performance.
        
        Whether you're gaming, streaming, or multitasking, this smartphone ensures a **lag-free experience** 
        with its **high-speed processor and AI-powered optimizations**. The device is also equipped with a 
        **long-lasting battery**, ensuring uninterrupted usage throughout the day.
        
        Capture stunning photos with the **AI-enhanced triple-lens camera system**. Whether it's **low-light photography**, 
        **super-wide-angle shots**, or **high-resolution portraits**, the SmartPhone adapts to every environment.  
    `,
    details: `
        ✅ **6.7-inch Full HD+ Display** | 120Hz Refresh Rate  
        ✅ **Quad Camera Setup:** 108MP + 12MP Ultra-Wide + 5MP Macro + Depth Sensor  
        ✅ **Fast Charging & 5000mAh Battery**  
        ✅ **5G Connectivity & WiFi 6**  
        ✅ **In-display Fingerprint Scanner & Face Unlock**  
    `,
};

// ✅ Function to Generate Star Ratings
const generateStars = (rating) => {
    return Array(5)
        .fill()
        .map((_, i) =>
            i + 1 <= rating ? (
                <FaStar key={i} className="text-yellow-500" />
            ) : i + 0.5 === rating ? (
                <FaStarHalfAlt key={i} className="text-yellow-500" />
            ) : (
                <FaRegStar key={i} className="text-yellow-500" />
            )
        );
};

const BestProductDetail = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-6 py-10">
                <div className="max-w-5xl mx-auto bg-white border border-gray-300 shadow-lg rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        {/* Product Image */}
                        <div className="flex justify-center">
                            <img
                                src={product.img}
                                alt={product.name}
                                className="w-80 h-80 object-contain border border-gray-200 rounded-lg"
                            />
                        </div>

                        {/* Product Details */}
                        <div>
                            <h2 className="text-3xl font-bold text-primaryText">
                                {product.name}
                            </h2>
                            <p className="text-2xl font-semibold text-red-500 mt-2">
                                ₹{product.price.toLocaleString()}
                            </p>
                            <div className="flex items-center mt-2">
                                {generateStars(product.rating)}
                                <span className="ml-2 text-gray-600">
                                    ({product.rating})
                                </span>
                            </div>

                            {/* Updated Description */}
                            <p className="text-gray-600 mt-4 text-lg whitespace-pre-line">
                                {product.description}
                            </p>

                            {/* Updated Details */}
                            <p className="text-md text-gray-500 mt-4 italic whitespace-pre-line">
                                {product.details}
                            </p>

                            <div className="mt-6 flex space-x-4">
                                <button className="px-6 py-3 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-md hover:opacity-90 transition">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BestProductDetail;
