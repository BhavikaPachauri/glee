import "./App.css";
import MainRoute from "./components/common/MainRoute";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProduct, getProduct } from "../src/store/slices/productSlice";
import Loader from "./components/common/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { BackToTop } from "./components/Icons";
import Maintenance from "./components/Maintenance";

function App() {
  // --------------------back-to-top-----------------------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -----------------------aos------------------------
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
    });
  }, []);

  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.product);

  // Temporary maintenance state (adjust logic as needed)
  const isUnderMaintenance = false; // Change to true when maintenance mode is active

  if (isUnderMaintenance) {
    return <Maintenance />;
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MainRoute />
          <button
            className={`${
              backToTop
                ? "fixed bottom-4 right-4 animate-backtotop shadow-sm cursor-pointer z-10"
                : "hidden"
            }`}
            onClick={() => top()}
          >
            <BackToTop />
          </button>
        </>
      )}
    </>
  );
}

export default App;
