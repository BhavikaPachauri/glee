import "./App.css";
import MainRoute from "./components/common/MainRoute";
import CountdownPopup from "./components/common/CountdownPopup";
import React, { useEffect, useState } from "react";
import {useSelector } from "react-redux";
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

  // const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.product);

  const isUnderMaintenance = false;

  if (isUnderMaintenance) {
    return <Maintenance />;
  }

  return (
    <>
      
      {loading ? (
        <Loader />
      ) : (
        <>
          <div>
            
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
              <CountdownPopup/>
              
          </div>
        </>
      )}
    
    </>
  );
}

export default App;
