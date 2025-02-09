import React, { useState } from "react";
import {
    FaUser,
    FaHeart,
    FaShoppingCart,
    FaBars,
    FaTimes,
    FaSearch,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-navbarBg border-b border-borderColor font-inter">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-3 px-6 lg:px-12">
                {/* Logo (Always Left) */}
                <div className="text-2xl font-semibold text-gradientStart mb-3 md:mb-0 md:mr-6">
                    <span className="text-primaryText">ELEC</span>TO
                </div>

                {/* Search Bar (Wider on Large Screens) */}
                <div className="w-full md:w-3/4 lg:w-2/3 flex justify-center order-2 md:order-1">
                    <div className="flex w-full max-w-2xl lg:max-w-3xl bg-searchBg rounded-md overflow-hidden border border-borderColor">
                        <input
                            type="text"
                            placeholder="Search for products, brands and more..."
                            className="w-full p-3 text-primaryText outline-none bg-searchBg text-sm"
                        />
                        <button className="bg-gradient-to-r from-gradientStart to-gradientEnd text-white px-6 font-medium flex items-center">
                            <FaSearch className="mr-2" /> Search
                        </button>
                    </div>
                </div>

                {/* Icons Section (Right Side) */}
                <div className="flex items-center space-x-6 mt-3 md:mt-0 order-3 md:order-2">
                    <div
                        className="flex items-center space-x-2 cursor-pointer hover:text-gradientStart"
                        onClick={() => navigate("/login")}>
                        <FaUser className="text-lg" />
                        <span className="text-sm font-medium hidden md:block">
                            Account
                        </span>
                    </div>

                    <div className="relative cursor-pointer hover:text-gradientStart">
                        <FaHeart className="text-lg" />
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                            2
                        </span>
                    </div>

                    <div
                        className="relative cursor-pointer hover:text-gradientStart flex items-center"
                        onClick={() => navigate("/cart")}>
                        <FaShoppingCart className="text-lg" />
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                            3
                        </span>
                        <span className="text-sm ml-2 font-medium hidden md:block">
                            $0.00
                        </span>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-primaryText text-2xl absolute top-4 right-4"
                    onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu (Dropdown for Small Screens) */}
            {menuOpen && (
                <div className="md:hidden bg-white border-t border-borderColor p-4">
                    <div className="flex flex-col space-y-4">
                        {/* Search Bar for Mobile */}
                        <div className="flex border border-borderColor rounded-md overflow-hidden bg-searchBg">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-3 text-primaryText outline-none bg-searchBg text-sm"
                            />
                            <button className="bg-gradient-to-r from-gradientStart to-gradientEnd text-white px-6 font-medium flex items-center">
                                <FaSearch className="mr-2" /> Search
                            </button>
                        </div>

                        {/* Icons (Mobile) */}
                        <div className="flex flex-col space-y-3">
                            <div
                                className="flex items-center space-x-2 cursor-pointer hover:text-gradientStart"
                                onClick={() => navigate("/login")}>
                                <FaUser className="text-lg" />
                                <span className="text-sm font-medium">
                                    Account
                                </span>
                            </div>

                            <div className="relative cursor-pointer hover:text-gradientStart">
                                <FaHeart className="text-lg" />
                                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                                    2
                                </span>
                            </div>

                            <div className="relative cursor-pointer hover:text-gradientStart flex items-center">
                                <FaShoppingCart className="text-lg" />
                                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                                    3
                                </span>
                                <span className="text-sm ml-2 font-medium">
                                    $0.00
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
