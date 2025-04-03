import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import TermsAndConditions from "../common/TermsAndConditions";

const TermsPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <div className="overflow-hidden">
        <TermsAndConditions />
        <Footer />
      </div>
    </>
  );
};

export default TermsPage;
