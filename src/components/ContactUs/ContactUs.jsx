import React, { useState } from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../Footer/Footer";
import {
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaHeadset,
} from "react-icons/fa";

const ContactUs = () => {
    // ✅ Contact Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    // ✅ Handle Input Changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // ✅ Handle Form Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Your message has been submitted!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <>
            {/* <Navbar /> */}
            <div className="container mx-auto px-6 py-10">
                {/* ✅ Page Title */}
                <h2 className="text-xl font-medium text-primaryText  mb-8">
                    📞 Contact Us
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* ✅ Store Locations & Customer Support */}
                    <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gradientStart mb-4">
                            📍 Our Store Locations
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Visit our stores to experience our products
                            firsthand.
                        </p>

                        {/* Store Locations */}
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-red-500 mr-3" />
                                <p className="text-gray-700 text-sm">
                                    123 Tech Street, Indore, India - 452001
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaMapMarkerAlt className="text-red-500 mr-3" />
                                <p className="text-gray-700 text-sm">
                                    456 Digital Avenue, Mumbai, India - 400001
                                </p>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className="mt-4">
                            <iframe
                                title="Google Map"
                                className="w-full h-40 rounded-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093746!2d144.9631!3d-37.8169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x1c9b6f964f572b9!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1636987098333!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"></iframe>
                        </div>

                        {/* Customer Support */}
                        <h3 className="text-xl font-semibold text-gradientStart mt-6">
                            🎧 Customer Support
                        </h3>
                        <p className="text-gray-600 text-sm mb-2">
                            Reach out to our support team for assistance.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <FaPhoneAlt className="text-green-500 mr-3" />
                                <p className="text-gray-700 text-sm">
                                    +91 98765 43210 (9 AM - 9 PM)
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaEnvelope className="text-blue-500 mr-3" />
                                <p className="text-gray-700 text-sm">
                                    support@electrostore.com
                                </p>
                            </div>
                            <div className="flex items-center">
                                <FaHeadset className="text-purple-500 mr-3" />
                                <p className="text-gray-700 text-sm">
                                    Live Chat Available 24/7
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ✅ Contact Form */}
                    <div className="bg-white p-6 border border-gray-300 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold text-gradientStart mb-4">
                            ✉️ Send Us a Message
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Fill out the form below and our team will get back
                            to you soon.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-gradientEnd"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-gradientEnd"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    rows="4"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-gradientEnd"></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 text-white bg-gradient-to-r from-gradientStart to-gradientEnd rounded-md hover:opacity-90 transition">
                                Submit Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default ContactUs;
