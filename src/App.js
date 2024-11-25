import "./App.css";
import MainRoute from "./components/common/MainRoute";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productsList from "../src/components/common/Helpers";
import { setProduct, getProduct } from "../src/store/slices/productSlice";

function App() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.product);
  useEffect(() => {
    // dispatch(setProduct(productsList));
    dispatch(getProduct());
  }, [dispatch]);
  return <>{loading ? <div>Loading...</div> : <MainRoute />}</>;
}

export default App;
