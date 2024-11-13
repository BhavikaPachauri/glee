import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import CareerPage from "../pages/CareerPage";
import ContactPage from "../pages/ContactPage";

const MainRoute = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="aboutus" element={<AboutPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="career" element={<CareerPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
};

export default MainRoute;
