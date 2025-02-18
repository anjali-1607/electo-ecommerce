import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import { FaClock, FaTags } from "react-icons/fa";

// ✅ Dummy Promotions Data
const promotions = [
    {
        id: 1,
        title: "Mega Smartphone Sale",
        discount: "Up to 40% OFF",
        img: "/assets/categories/smartphones.webp",
        expiresIn: 3600, // in seconds (1 hour)
        terms: "Valid on selected smartphones only. Offer ends soon.",
    },
    {
        id: 2,
        title: "Laptops & Accessories",
        discount: "Flat 30% OFF",
        img: "/assets/categories/laptops.webp",
        expiresIn: 7200, // in seconds (2 hours)
        terms: "Limited stock available. Terms and conditions apply.",
    },
    {
        id: 3,
        title: "Home Appliances Special",
        discount: "Up to 50% OFF",
        img: "/assets/categories/home_appliances.webp",
        expiresIn: 10800, // in seconds (3 hours)
        terms: "Exclusive discounts on selected appliances.",
    },
];

const SalesPromotions = () => {
    const [timers, setTimers] = useState(
        promotions.map((promo) => promo.expiresIn)
    );

    // ✅ Countdown Timer Logic
    useEffect(() => {
        const interval = setInterval(() => {
            setTimers((prevTimers) =>
                prevTimers.map((time) => (time > 0 ? time - 1 : 0))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    // ✅ Format Time (HH:MM:SS)
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h.toString().padStart(2, "0")}:${m
            .toString()
            .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="container mx-auto px-6 py-10">
                <h2 className="text-xl font-medium text-primaryText  mb-8">
                    🔥 Limited-Time Sales & Promotions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {promotions.map((promo, index) => (
                        <div
                            key={promo.id}
                            className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 hover:shadow-xl transition">
                            {/* ✅ Promo Image */}
                            <img
                                src={promo.img}
                                alt={promo.title}
                                className="w-full h-60 object-cover rounded-lg"
                            />

                            {/* ✅ Title & Discount */}
                            <h3 className="text-xl font-semibold mt-4 text-gradientStart">
                                {promo.title}
                            </h3>
                            <p className="text-lg font-bold text-red-500 mt-1">
                                {promo.discount}
                            </p>

                            {/* ✅ Countdown Timer */}
                            <div className="flex items-center mt-3 text-gray-600 text-sm">
                                <FaClock className="text-red-500 mr-2" />
                                <span>
                                    Offer expires in{" "}
                                    <span className="font-bold text-gray-800">
                                        {formatTime(timers[index])}
                                    </span>
                                </span>
                            </div>

                            {/* ✅ Terms & Conditions */}
                            <p className="text-xs text-gray-500 mt-2 italic">
                                {promo.terms}
                            </p>

                            {/* ✅ CTA Button */}
                            <button className="mt-4 w-full py-2 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-md hover:opacity-90 transition flex items-center justify-center">
                                <FaTags className="mr-2" /> Shop Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default SalesPromotions;
