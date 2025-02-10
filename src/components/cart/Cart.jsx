import React, { useState } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Navbar from "../navbar/Navbar";

const initialCart = [
    {
        id: 1,
        name: "Wireless Gaming Mouse",
        price: 35.0,
        quantity: 1,
        img: "/assets/mouse.webp",
    },
    {
        id: 2,
        name: "Ultra HD Smart TV",
        price: 699.99,
        quantity: 1,
        img: "/assets/tv.webp",
    },
    {
        id: 3,
        name: "High-Speed Desktop Computer",
        price: 999.99,
        quantity: 1,
        img: "/assets/monitor.webp",
    },
];

const Cart = () => {
    const [cart, setCart] = useState(initialCart);

    // Increase Quantity
    const increaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrease Quantity (Fixed)
    const decreaseQuantity = (id) => {
        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity - 1) }
                    : item
            )
        );
    };

    // Remove Item from Cart
    const removeItem = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    // Calculate Total Price
    const subtotal = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );
    const discount = subtotal * 0.1; // 10% Discount
    const total = subtotal - discount;

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-xl font-bold text-primaryText mb-4">
                    Shopping Cart
                </h2>

                {/* Cart Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 bg-white p-4 rounded-lg shadow-md">
                        {cart.length === 0 ? (
                            <p className="text-center text-gray-600">
                                Your cart is empty.
                            </p>
                        ) : (
                            cart.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-between border-b py-3">
                                    {/* Image & Info */}
                                    <div className="flex items-center space-x-4 w-1/2">
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="w-16 h-16 object-contain"
                                        />
                                        <div>
                                            <h3 className="text-sm font-semibold">
                                                {item.name}
                                            </h3>
                                            <p className="text-gray-500 text-xs">
                                                ${item.price.toFixed(2)}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Quantity Controls - Properly Centered */}
                                    <div className="flex items-center justify-center space-x-2 w-1/4">
                                        <button
                                            onClick={() =>
                                                decreaseQuantity(item.id)
                                            }
                                            className="bg-gray-200 p-2 rounded hover:bg-gray-300 text-xs flex items-center justify-center">
                                            <FaMinus />
                                        </button>
                                        <span className="text-sm font-semibold w-6 text-center">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                increaseQuantity(item.id)
                                            }
                                            className="bg-gray-200 p-2 rounded hover:bg-gray-300 text-xs flex items-center justify-center">
                                            <FaPlus />
                                        </button>
                                    </div>

                                    {/* Remove Button */}
                                    <div className="w-1/4 text-right">
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-red-500 hover:text-red-700 transition">
                                            <FaTrash size={16} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Price Summary */}
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="text-md font-semibold mb-3">
                            Price Details
                        </h3>
                        <div className="flex justify-between text-gray-600 text-sm">
                            <span>Subtotal</span>
                            <span>${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-green-500 text-sm mt-2">
                            <span>Discount (10%)</span>
                            <span>-${discount.toFixed(2)}</span>
                        </div>
                        <hr className="my-3" />
                        <div className="flex justify-between text-lg font-bold">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="w-full mt-4 py-2 bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-semibold rounded-md hover:opacity-90 transition text-sm">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
