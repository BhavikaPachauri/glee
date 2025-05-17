import React from "react";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div className="w-full relative flex flex-col items-center justify-start lg:py-28 py-10">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-[#eafaff] via-[#6BD4FF]/30 to-white" />
        <svg
          className="absolute -top-32 -left-32 w-[500px] h-[500px] opacity-30 z-0 animate-float-slow"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="250" cy="250" rx="250" ry="200" fill="#1F488E" />
        </svg>
        <svg
          className="absolute bottom-0 right-0 w-[400px] h-[400px] opacity-20 z-0 animate-float"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="200" cy="200" rx="200" ry="160" fill="#6BD4FF" />
        </svg>
        <svg
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[420px] h-[220px] opacity-20 z-0 hidden md:block animate-float"
          viewBox="0 0 420 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke="#1F488E" strokeWidth="2">
            <circle cx="60" cy="60" r="18" fill="#6BD4FF" fillOpacity="0.2" />
            <circle cx="360" cy="160" r="18" fill="#6BD4FF" fillOpacity="0.2" />
            <circle cx="210" cy="110" r="18" fill="#6BD4FF" fillOpacity="0.2" />
            <line x1="75" y1="75" x2="195" y2="105" />
            <line x1="225" y1="115" x2="345" y2="155" />
            <line x1="78" y1="60" x2="192" y2="110" />
            <line x1="228" y1="110" x2="342" y2="160" />
          </g>
        </svg>
        <svg
          className="absolute bottom-10 left-10 w-[120px] h-[40px] opacity-20 z-0 hidden md:block animate-pulse-slow"
          viewBox="0 0 120 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="10"
            y="10"
            width="100"
            height="20"
            rx="10"
            fill="#6BD4FF"
            fillOpacity="0.3"
          />
          <rect
            x="10"
            y="10"
            width="50"
            height="20"
            rx="10"
            fill="#1F488E"
            fillOpacity="0.3"
          />
        </svg>
        <svg
          className="absolute bottom-10 right-10 w-[180px] h-[40px] opacity-20 z-0 hidden md:block animate-pulse-slow"
          viewBox="0 0 180 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polyline
            points="0,20 30,20 40,10 50,30 60,20 80,20 90,5 100,35 110,20 180,20"
            stroke="#1F488E"
            strokeWidth="3"
            fill="none"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="w-full lg:max-w-[1280px] mx-auto text-left px-3 z-10 relative flex flex-col items-start">
        <div className="flex flex-col items-start mb-4">
          <div className="uppercase tracking-widest text-[#1F488E] font-bold mb-1 text-base md:text-lg animate-fade-in-up delay-100">
            GLEE BIOTECH LTD.
          </div>
          <div className="h-1 w-16 rounded-full bg-[#1F488E] opacity-80 mb-1 animate-fade-in-up delay-150" />
        </div>
        <div className="text-2xl md:text-3xl font-medium text-gray-700 animate-fade-in-up delay-200 uppercase tracking-wide">
          WE ARE COMMITTED TO EXCELLENCE IN
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-[#1F488E] mb-4 leading-none drop-shadow-md animate-fade-in-up delay-250 uppercase text-left">
          CRITICAL CARE SOLUTIONS
        </h1>
        <div className="text-gray-700 text-md sm:text-lg md:text-xl mb-6 mx-0 animate-fade-in-up delay-300 max-w-4xl text-justify">
        At Glee Biotech Ltd (GLEE), we provide comprehensive healthcare solutions in the critical care segment. With over 30 years of pharmaceutical experience, our team delivers high-quality, affordable, and life-saving products. Based in Gurugram, Haryana, we have a strong PAN-India presence and a dedicated focus on supporting high-risk critical care conditions.
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-start w-full max-w-md mx-0 animate-fade-in-up delay-400">
          <Link
            to="/contact"
            className="bg-[#1F488E] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-[#16325c] transition-all duration-200 w-full text-center sm:w-auto"
          >
            Get In Touch
          </Link>
          <Link
            to="/aboutus"
            className="border border-[#1F488E] text-[#1F488E] px-8 py-3 rounded-full font-medium bg-white hover:bg-[#eafaff] transition-all text-center duration-200 w-full sm:w-auto"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
