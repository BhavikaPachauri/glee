import "./App.css";
import MainRoute from "./components/common/MainRoute";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, getProduct } from "../src/store/slices/productSlice";
import Loader from "./components/common/Loader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  // -----------------------aos------------------------
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });

  }, []);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return <>{loading ? <Loader/> : <MainRoute />}</>;
}

export default App;
