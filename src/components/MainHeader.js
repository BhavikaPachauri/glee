import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-start lg:py-[110px] py-10 h-[100vh-83px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/iA03HZcnzg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F488E]/90 via-[#1F488E]/85 to-[#1F488E]/90" />
      </div>
      <div className="w-full lg:max-w-[1280px] mx-auto text-left px-3 z-10 relative flex flex-col items-start">
        <div className="flex flex-col items-start md:mb-6 mb-3">
          <div className="uppercase tracking-widest text-white/90 font-bold mb-2 text-base md:text-lg animate-fade-in-up delay-100">
            GLEE BIOTECH LTD.
          </div>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-white to-white/50 mb-2 animate-fade-in-up delay-150" />
        </div>
        <div className="text-2xl md:text-3xl font-medium text-white/90 animate-fade-in-up delay-200 uppercase tracking-wide">
          WE ARE COMMITTED TO EXCELLENCE IN
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white sm:mb-6 mb-1 leading-tight drop-shadow-lg animate-fade-in-up delay-250 uppercase text-left bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
          CRITICAL CARE SOLUTIONS
        </h1>
        <div className="text-white/80 text-md sm:text-lg md:text-xl mb-8 mx-0 animate-fade-in-up delay-300 max-w-4xl text-justify sm:leading-relaxed leading-normal">
          At Glee Biotech Ltd (GLEE), we provide comprehensive healthcare solutions in the critical care segment. With over 30 years of pharmaceutical experience, our team delivers high-quality, affordable, and life-saving products. Based in Gurugram, Haryana, we have a strong PAN-India presence and a dedicated focus on supporting high-risk critical care conditions.
        </div>
        <div className="flex flex-row sm:gap-6 gap-2 justify-start w-full max-w-md mx-0 animate-fade-in-up delay-400">
          <Link
            to="/contact"
            className="group bg-white text-[#1F488E] whitespace-nowrap px-8 sm:py-4 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center sm:w-auto hover:scale-105"
          >
            Get In Touch
            <span className="sm:inline-block hidden transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">→</span>
          </Link>
          <Link
            to="/aboutus"
            className="group whitespace-nowrap border-2 border-white text-white px-8 sm:py-4 py-2.5 rounded-full font-semibold hover:bg-white/10 transition-all text-center duration-300 w-full sm:w-auto hover:scale-105"
          >
            Learn More
            <span className="sm:inline-block hidden transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
