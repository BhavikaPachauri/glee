import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";
import MainHeader from "../MainHeader";
import AboutUs from "../AboutUs";
import Footer from "../common/Footer";
import HomeProduct from "../HomeProduct";
import Faqs from "../Faqs";
import ProductCategory from "../ProductCategory";

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <div className="overflow-hidden">
        <MainHeader />
        <AboutUs />
        <ProductCategory />
        <HomeProduct />
        <Faqs />
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
