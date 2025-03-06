import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";
import ContactPage from "../pages/ContactPage";
import GleeProductPage from "../pages/GleeProductUpload";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="aboutus" element={<AboutPage />} />
      <Route path="products" element={<ProductsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="produpload" element={<GleeProductPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MainRoute;
