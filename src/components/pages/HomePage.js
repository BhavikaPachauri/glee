import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";
import MainHeader from "../MainHeader";
import AboutUs from "../AboutUs";
import Footer from "../common/Footer";
import HomeProduct from "../HomeProduct";
import { useDispatch, useSelector } from "react-redux";
import { setProduct } from "../../store/slices/productSlice";
import productList from "../../components/common/Helpers";

let firstrender = true;

const HomePage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    if (firstrender) {
      dispatch(setProduct(productList));
      firstrender = false;
    }
  }, [dispatch]);
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
