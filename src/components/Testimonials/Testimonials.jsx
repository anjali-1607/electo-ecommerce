import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        name: "John Doe",
        position: "CEO, TechCorp",
        image: "/assets/user1.webp",
        message:
            "This e-commerce platform has transformed my business. The user experience is fantastic, and the support is top-notch!",
    },
    {
        id: 2,
        name: "Emily Smith",
        position: "Marketing Manager, BrandX",
        image: "/assets/user2.webp",
        message:
            "A seamless shopping experience with excellent customer service. Highly recommend it to anyone looking for quality products!",
    },
    {
        id: 3,
        name: "Michael Johnson",
        position: "Founder, StartUp Inc.",
        image: "/assets/user3.webp",
        message:
            "The best online shopping experience I've had. Smooth checkout, great discounts, and fast delivery!",
    },
];

const Testimonials = () => {
    return (
        <div className="container mx-auto px-6 py-12">
            <h2 className="text-2xl font-bold text-primaryText text-center mb-8">
                What Our Customers Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition">
                        <FaQuoteLeft className="text-gradientEnd text-3xl mb-4" />
                        <p className="text-gray-600 italic">
                            "{testimonial.message}"
                        </p>
                        <div className="mt-4">
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-16 h-16 rounded-full border-2 border-gradientStart"
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-primaryText mt-3">
                            {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                            {testimonial.position}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
