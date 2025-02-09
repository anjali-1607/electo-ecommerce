import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const banners = [{ id: 1, img: "/assets/banner1.png" }];

const PromoBannerCarousel = () => {
    return (
        <div className="w-full">
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 4000 }}
                modules={[Autoplay]}
                className="w-full">
                {banners.map((banner) => (
                    <SwiperSlide key={banner.id}>
                        <div className="w-full h-[250px] md:h-[400px]">
                            <img
                                src={banner.img}
                                alt="Promo Banner"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default PromoBannerCarousel;
