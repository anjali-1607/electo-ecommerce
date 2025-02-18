import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // ✅ Redirect if already logged in
    useEffect(() => {
        const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
        if (loggedInUser) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        const userData = JSON.parse(localStorage.getItem("users")) || [];
        const user = userData.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            localStorage.setItem("loggedInUser", JSON.stringify(user)); // Store user session
            toast.success("Login successful! ✅", { position: "top-right" });
            setTimeout(() => navigate("/"), 1000);
        } else {
            toast.error("Invalid credentials ❌", { position: "top-right" });
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300">
                <h2 className="text-3xl font-bold text-center text-primaryText">
                    Login
                </h2>
                <form onSubmit={handleLogin}>
                    <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-gradientEnd"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 focus:ring-gradientEnd"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 mt-6 text-white bg-gradient-to-r from-gradientStart to-gradientEnd rounded-md hover:opacity-90 transition">
                        Login
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-gradientEnd underline">
                        Register here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Login;
