import React from "react";
import Navbar from "./components/navbar/Navbar";
import Carousel from "./components/carousel/Carousel";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import PromoSection from "./components/PromoSection/PromoSection";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import PromoBannerCarousel from "./components/PromoBannerCarousel/PromoBannerCarousel";
import Footer from "./components/Footer/Footer";
import Brands from "./components/brands/Brands";
import Testimonials from "./components/Testimonials/Testimonials";

export default function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <ProductCarousel />
            <PromoSection />
            <Brands />
            <ProductGrid />
            <PromoBannerCarousel />
            <ProductGrid />
            <Testimonials />
            <Footer />
        </>
    );
}
