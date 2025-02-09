import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/assets/carousel1.webp",
    "/assets/carousel2.webp",
    "/assets/carousel3.webp",
];

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px] overflow-hidden">
            <AnimatePresence>
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Carousel Slide"
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    initial={{ y: "-100%" }} // Starts from the top
                    animate={{ y: "0%" }} // Moves down to show the image
                    exit={{ y: "100%" }} // Moves down to exit
                    transition={{ duration: 1, ease: "easeInOut" }}
                />
            </AnimatePresence>
        </div>
    );
};

export default Carousel;
