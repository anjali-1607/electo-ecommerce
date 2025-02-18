// import React from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../navbar/Navbar";

// const products = [
//     {
//         id: 1,
//         name: "Smartphone X",
//         price: 699.99,
//         category: "smartphones",
//         image: "/assets//categories/smartphones.webp",
//     },
//     {
//         id: 2,
//         name: "Gaming Laptop",
//         price: 1299.99,
//         category: "laptops-and-computers",
//         image: "/assets//categories/laptops.webp",
//     },
//     {
//         id: 3,
//         name: "Smart Watch",
//         price: 199.99,
//         category: "wearables",
//         image: "/assets//categories/wearables.webp",
//     },
//     {
//         id: 4,
//         name: "Bluetooth Speaker",
//         price: 79.99,
//         category: "audio",
//         image: "/assets//categories/audio.webp",
//     },
//     {
//         id: 5,
//         name: "4K Ultra HD TV",
//         price: 899.99,
//         category: "tvs-and-home-theater",
//         image: "/assets//categories/tv.webp",
//     },
// ];

// const CategoryProducts = () => {
//     const { categoryName } = useParams();
//     const filteredProducts = products.filter(
//         (product) => product.category === categoryName
//     );

//     return (
//         <>
//             <Navbar />
//             <div className="container mx-auto px-6 py-10">
//                 <h2 className="text-2xl font-bold text-primaryText text-center mb-6 capitalize">
//                     {categoryName.replace(/-/g, " ")}
//                 </h2>

//                 {filteredProducts.length === 0 ? (
//                     <p className="text-center text-gray-600">
//                         No products available in this category.
//                     </p>
//                 ) : (
//                     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//                         {filteredProducts.map((product) => (
//                             <div
//                                 key={product.id}
//                                 className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition">
//                                 <img
//                                     src={product.image}
//                                     alt={product.name}
//                                     className="w-full h-40 object-contain"
//                                 />
//                                 <h3 className="text-lg font-semibold mt-3">
//                                     {product.name}
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     ${product.price.toFixed(2)}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default CategoryProducts;
