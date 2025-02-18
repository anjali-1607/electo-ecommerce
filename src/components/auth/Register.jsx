import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validate = () => {
        const newErrors = {};
        if (!name) newErrors.name = "Name is required";
        if (!email.includes("@")) newErrors.email = "Valid email is required";
        if (password.length < 6)
            newErrors.password = "Password must be at least 6 characters";
        if (password !== confirmPassword)
            newErrors.confirmPassword = "Passwords do not match";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (validate()) {
            const users = JSON.parse(localStorage.getItem("users")) || [];
            if (users.find((user) => user.email === email)) {
                toast.error("Email already registered!", {
                    position: "top-right",
                });
                return;
            }

            const newUser = { name, email, password };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedInUser", JSON.stringify(newUser)); // Auto-login
            toast.success("Registration successful! ✅", {
                position: "top-right",
            });

            setTimeout(() => navigate("/"), 1000); // Redirect after 1 second
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen border">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg border border-gray-300">
                <h2 className="text-3xl font-bold text-center text-primaryText">
                    Register
                </h2>
                <form onSubmit={handleRegister}>
                    <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 ${
                                errors.name
                                    ? "border-red-500 focus:ring-red-300"
                                    : "focus:ring-gradientEnd"
                            }`}
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className={`w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 ${
                                errors.email
                                    ? "border-red-500 focus:ring-red-300"
                                    : "focus:ring-gradientEnd"
                            }`}
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Password <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={`w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 ${
                                errors.password
                                    ? "border-red-500 focus:ring-red-300"
                                    : "focus:ring-gradientEnd"
                            }`}
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.password}
                            </p>
                        )}
                    </div>

                    <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700">
                            Confirm Password{" "}
                            <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className={`w-full px-4 py-2 mt-2 border rounded focus:outline-none focus:ring-2 ${
                                errors.confirmPassword
                                    ? "border-red-500 focus:ring-red-300"
                                    : "focus:ring-gradientEnd"
                            }`}
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.confirmPassword}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 mt-6 text-white bg-gradient-to-r from-gradientStart to-gradientEnd rounded-md hover:opacity-90 transition">
                        Register
                    </button>
                </form>
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <a href="/login" className="text-gradientEnd underline">
                        Login here
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Register;
