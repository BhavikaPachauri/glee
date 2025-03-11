import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";
// import MainHeader from "../MainHeader";
import AboutUs from "../AboutUs";
import Footer from "../common/Footer";
import HomeProduct from "../HomeProduct";
import Faqs from "../Faqs";
import ProductCategory from "../ProductCategory";
import EventBanner from "../common/EventBanner";
import CountdownPopup from "../common/CountdownPopup";

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <CountdownPopup />
      <div>
        <NavBar />
        <div className="overflow-hidden">
          <EventBanner />
          {/* <MainHeader /> */}
          <AboutUs />
          <ProductCategory />
          <HomeProduct />
          <Faqs />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
