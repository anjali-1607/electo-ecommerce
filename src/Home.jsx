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
import Categories from "./components/categories/Categories";
import SalesPromotions from "./components/SalesPromotion/SalesPromotions";
import ContactUs from "./components/ContactUs/ContactUs";

export default function Home() {
    return (
        <>
            <Navbar />
            <Carousel />
            <Categories />
            <ProductCarousel />
            <PromoSection />
            <Brands />
            <ProductGrid />
            <PromoBannerCarousel />
            <ProductGrid />
            <Testimonials />
            <SalesPromotions />
            <ContactUs />
            <Footer />
        </>
    );
}
