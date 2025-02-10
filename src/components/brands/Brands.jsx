import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const brands = [
    { id: 1, name: "Samsung", img: "/assets/brands/samsung.webp" },
    { id: 2, name: "Apple", img: "/assets/brands/apple.webp" },
    { id: 3, name: "Sony", img: "/assets/brands/sony.webp" },
    { id: 4, name: "LG", img: "/assets/brands/lg.webp" },
    { id: 5, name: "Dell", img: "/assets/brands/dell.webp" },
    { id: 6, name: "HP", img: "/assets/brands/hp.webp" },
    { id: 7, name: "Microsoft", img: "/assets/brands/microsoft.webp" },
    { id: 8, name: "Lenovo", img: "/assets/brands/lenovo.webp" },
];

const Brands = () => {
    return (
        <div className="container mx-auto px-6 py-10">
            <h2 className="text-xl font-medium text-primaryText  mb-6">
                Top Brands
            </h2>

            <Swiper
                slidesPerView={5}
                spaceBetween={10} // Reduced space for a compact look
                freeMode={true}
                loop={true}
                pagination={{ clickable: true }}
                modules={[FreeMode, Pagination]}
                breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 5 },
                    640: { slidesPerView: 3, spaceBetween: 8 },
                    1024: { slidesPerView: 5, spaceBetween: 10 },
                }}
                className="w-full">
                {brands.map((brand) => (
                    <SwiperSlide key={brand.id} className="flex justify-center">
                        <div className="bg-white shadow-md rounded-md p-3 flex items-center justify-center w-44 h-30 hover:shadow-lg transition">
                            <img
                                src={brand.img}
                                alt={brand.name}
                                className="w-22 h-16 object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Brands;
