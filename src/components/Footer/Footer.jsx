import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";
import {
    FaCcVisa,
    FaCcMastercard,
    FaCcPaypal,
    FaCcAmazonPay,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-orange-300 to-pink-200 text-black pt-12 pb-6">
            <div className="container mx-auto px-6 lg:px-16">
                {/* Grid Layout for Footer Sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-sm text-gray-800">
                            We offer the best electronics and accessories at
                            unbeatable prices. Quality products, trusted
                            service.
                        </p>
                    </div>

                    {/* Customer Support */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Customer Support
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-800">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition">
                                    Shipping & Returns
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-white transition">
                                    Track Order
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Quick Links
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-800">
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition">
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition">
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="hover:text-black transition">
                                    Affiliate Program
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media & Payments */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Follow Us
                        </h3>
                        <div className="flex space-x-4 text-gray-800">
                            <a href="#" className="hover:text-black transition">
                                <FaFacebookF size={20} />
                            </a>
                            <a href="#" className="hover:text-black transition">
                                <FaTwitter size={20} />
                            </a>
                            <a href="#" className="hover:text-black transition">
                                <FaInstagram size={20} />
                            </a>
                            <a href="#" className="hover:text-black transition">
                                <FaLinkedinIn size={20} />
                            </a>
                        </div>

                        <h3 className="text-lg font-semibold mt-6 mb-4">
                            Payment Methods
                        </h3>
                        <div className="flex space-x-4 text-gray-800">
                            <FaCcVisa size={40} />
                            <FaCcMastercard size={40} />
                            <FaCcPaypal size={40} />
                            <FaCcAmazonPay size={40} />
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-800">
                    © {new Date().getFullYear()} Your E-Commerce. All Rights
                    Reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
