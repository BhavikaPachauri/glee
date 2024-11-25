import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";
import MainHeader from "../MainHeader";
import AboutUs from "../AboutUs";
import Footer from "../common/Footer";
import HomeProduct from "../HomeProduct";

const HomePage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <MainHeader />
      <AboutUs />
      <HomeProduct />
      <Footer />
    </>
  );
};

export default HomePage;
