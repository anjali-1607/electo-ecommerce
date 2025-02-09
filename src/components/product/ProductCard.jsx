import React from "react";

const ProductCard = ({ product }) => {
    const handleAddToCart = () => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push({ ...product, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Product added to cart!");
    };

    return (
        <div className="p-4 border rounded shadow hover:shadow-lg">
            <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-cover mb-2"
            />
            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
            <p className="text-sm text-gray-600 mb-2">${product.price}</p>
            <button
                onClick={handleAddToCart}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
