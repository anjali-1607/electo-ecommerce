/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                gradientStart: "#ff7e5f", // Orange
                gradientEnd: "#ff758c", // Pink
                navbarBg: "#ffffff", // White Navbar
                // searchBg: "#f1f3f6", // Light Gray Search Box
                primaryText: "#1f2937", // Dark Text
                secondaryText: "#4b5563", // Light Gray Text
                borderColor: "#d1d5db", // Light Gray Border
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"], // Professional Font
            },
            borderRadius: {
                sm: "6px", // Slight Curve
            },
        },
    },
    plugins: [],
};
