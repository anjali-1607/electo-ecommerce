import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Navbar from "../navbar/Navbar";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const updateCart = (newCart) => {
        setCart(newCart);
        localStorage.setItem("cart", JSON.stringify(newCart));
    };

    const increaseQuantity = (id) => {
        updateCart(
            cart.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        updateCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        updateCart(cart.filter((item) => item.id !== id));
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-xl font-bold text-primaryText mb-4">
                    Shopping Cart
                </h2>
                {/* Cart Items */}
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    cart.map((item) => (
                        <div
                            key={item.id}
                            className="border-b py-3 flex items-center justify-between">
                            <img
                                src={item.img}
                                className="w-16 h-16"
                                alt={item.name}
                            />
                            <p>{item.name}</p>
                            <p>₹{item.price}</p>
                            <button onClick={() => removeItem(item.id)}>
                                <FaTrash />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
};

export default Cart;
