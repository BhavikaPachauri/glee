import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-start lg:py-[110px] py-10 h-[100vh-83px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
        src="./img/GleeBg.png"
        alt="Glee Home Backgroung  "
        className="hidden lg:block absolute inset-0 w-full h-full object-cover"
        />
        <img
        src="./img/MobileBg.png"
        alt="Glee Home Backgroung  "
        className="lg:hidden absolute inset-0 w-full h-full object-cover"
        />
        {/* <video
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
        </video> */}
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#1F488E]/90 via-[#1F488E]/85 to-[#1F488E]/90" /> */}
      </div>
      <div className="w-full px-10 lg:px-5  lg:max-w-[1280px] mx-auto text-left  z-10 relative flex flex-col items-start">
        <div className="flex flex-col items-start md:mb-6 mb-3">
          <div className="uppercase tracking-widest text-white/90 font-bold mb-2 text-base md:text-lg animate-fade-in-up delay-100">
            GLEE BIOTECH LTD.
          </div>
          <div className="h-1 w-20 rounded-full bg-gradient-to-r from-white to-white/50 mb-2 animate-fade-in-up delay-150" />
        </div>
        <div className="text-lg md:text-xl lg:text-3xl font-lg text-white/90 max-w-2xl mb-2 animate-fade-in-up delay-200  tracking-wide">
          We Are Committed To Excellence In
        </div>
        <h1 className="text-xl md:text-2xl lg:text-4xl font-bold  text-white/90 animate-fade-in-up max-w-3xl delay-200   sm:mb-6 mb-2 leading-tight drop-shadow-lg animate-fade-in-up delay-250 text-left">
          Comprehensive Healthcare Solutions
        </h1>
        <div className=" text-white/80 text-md sm:text-md  mb-8 mx-0 animate-fade-in-up delay-300 max-w-2xl text-justify sm:leading-relaxed leading-normal">
            Glee Biotech Ltd. is a rapidly growing pharmaceutical company with a clear vision to make a real impact in the  healthcare sector by delivering high-quality, reliable, and affordable healthcare products. The company has a strong backup support, which certifies extensive and well-organized distribution network support to ensure swift, nationwide reach serving hospitals, clinics, and healthcare providers across India.
        </div>
        <div className="flex flex-row sm:gap-6 gap-2 justify-start w-full max-w-md mx-0 animate-fade-in-up delay-400">
          <Link
            to="/contact"
            className="group bg-[#1F488E] text-white whitespace-nowrap px-4 md:px-6 lg:px-8 sm:py-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full text-center sm:w-auto hover:scale-105"
          >
            Get In Touch
            {/* <span className="sm:inline-block hidden transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">→</span> */}
          </Link>
          <Link
            to="/aboutus"
            className="group whitespace-nowrap border-2 border-white text-white px-4 md:px-6 lg:px-8 sm:py-4 py-2 rounded-full font-semibold hover:bg-white/10 transition-all text-center duration-300 w-full sm:w-auto hover:scale-105"
          >
            Learn More
            {/* <span className="sm:inline-block hidden transition-transform group-hover:translate-x-1 motion-reduce:transform-none ml-2">→</span> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
