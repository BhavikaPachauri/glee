import React, { lazy, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loader from "./Loader";
import TermsPage from "../pages/TermsPage";

const HomePage = lazy(() => import("../pages/HomePage"));
const AboutPage = lazy(() => import("../pages/AboutPage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const ContactPage = lazy(() => import("../pages/ContactPage"));
const GleeProductPage = lazy(() => import("../pages/GleeProductUpload"));

const Loading = () => (
  <div>
    <Loader />
  </div>
);

const MainRoute = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="aboutus" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="produpload" element={<GleeProductPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default MainRoute;
