import React, { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const handleRemove = (productId) => {
        const updatedCart = cart.filter((item) => item.id !== productId);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
                {cart.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <div>
                        <ul className="space-y-4">
                            {cart.map((item) => (
                                <li
                                    key={item.id}
                                    className="p-4 border rounded">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="h-16 w-16 object-cover"
                                            />
                                            <div>
                                                <h3 className="font-bold">
                                                    {item.title}
                                                </h3>
                                                <p>
                                                    ${item.price} x{" "}
                                                    {item.quantity}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() =>
                                                handleRemove(item.id)
                                            }
                                            className="text-red-500 hover:underline">
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-4 text-right">
                            <p className="text-lg font-bold">
                                Total: ${totalPrice.toFixed(2)}
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Cart;
