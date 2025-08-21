import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../common/NavBar";
import AboutBanner from "../AboutBanner";
import AboutDetail from "../AboutDetail";
import WhoWeAre from "../WhoWeAre";
import VisionMission from "../VisionMission";
import Footer from "../common/Footer";
// import WhyChooseus from "../WhyChooseus";
import ServiceSlider from "../common/ServiceSlider";
import Gallery from "../Gallery";

const AboutPage = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return (
        <>
            <NavBar />
            <div className="overflow-hidden">
            <AboutBanner />
            <AboutDetail />
            <ServiceSlider/>
            <WhoWeAre />
            <ServiceSlider/>
            <VisionMission />
            {/* <WhyChooseus/> */}
            <Gallery/>
            <Footer />
            </div>
        </>
    );
};

export default AboutPage;
