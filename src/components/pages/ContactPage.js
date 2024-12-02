import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";
import GetInTouch from "../GetInTouch";

const ContactPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <NavBar />
      <div className="overflow-hidden">
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
