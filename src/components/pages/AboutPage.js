import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";
import AboutBanner from "../AboutBanner";
import AboutDetail from "../AboutDetail";
import WhoWeAre from "../WhoWeAre";
import VisionMission from "../VisionMission";
import Footer from "../common/Footer";

const AboutPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <NavBar />
            <AboutBanner />
            <AboutDetail />
            <WhoWeAre />
            <VisionMission />
            <Footer />
        </>
    );
};

export default AboutPage;
