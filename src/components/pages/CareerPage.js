import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import ProductsDetails from "../ProductsDetails";

const CareerPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <NavBar />
            <ProductsDetails />
            <Footer />
        </>
    );
};

export default CareerPage;
