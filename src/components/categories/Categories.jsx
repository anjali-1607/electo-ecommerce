import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
    {
        id: 1,
        name: "Smartphones",
        image: "/assets/categories/smartphones.webp",
    },
    {
        id: 2,
        name: "Laptops & Computers",
        image: "/assets/categories/laptops.webp",
    },
    { id: 3, name: "Tablets", image: "/assets/categories/tablets.webp" },
    { id: 4, name: "TVs & Home Theater", image: "/assets/categories/tv.webp" },
    { id: 5, name: "Audio", image: "/assets/categories/audio.webp" },
    {
        id: 6,
        name: "Cameras & Camcorders",
        image: "/assets/categories/cameras.webp",
    },
    {
        id: 7,
        name: "Home Appliances",
        image: "/assets/categories/home_appliances.webp",
    },
    { id: 8, name: "Gaming", image: "/assets/categories/gaming.webp" },
    { id: 9, name: "Wearables", image: "/assets/categories/wearables.webp" },
];

const Categories = () => {
    const navigate = useNavigate();

    const handleCategoryClick = () => {
        // ✅ Navigate directly to the product description page with dummy data
        navigate("/product-detail");
    };

    return (
        <div className="container mx-auto px-6 py-10">
            <h2 className="text-xl font-semibold text-primaryText mb-6 text-center">
                Shop by Category
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        onClick={handleCategoryClick}
                        className="bg-white shadow-md rounded-lg p-3 hover:shadow-lg transition flex flex-col items-center text-center cursor-pointer border border-gray-200">
                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-32 h-32 sm:w-36 sm:h-36 object-contain rounded-md transition transform hover:scale-105"
                        />
                        <p className="mt-2 text-md font-semibold text-gray-700">
                            {category.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;
