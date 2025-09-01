import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryData = [
  {
    title: (<p>MANTHAN : <br/> 5ᵗʰ - 8ᵗʰ 2025 February  @ Puri , Odisha</p>),
    description:
      "Leaders coming together for a brainstorming session on strategies and functional aspects of the organisation to march ahead. Showcased cutting-edge solutions and collaborated with industry leaders.",
    cover:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/zVGYPr2IXY.png",
  },
  {
    title: ( <p>ISCCM : <br/>5ᵗʰ - 9ᵗʰ 2025 March @ Kochi</p>),
    description:
      "Indian Society for Critical Care Medicine Conference at Kochi, Kerala - Glee Biotech participated in a big way, organising a scientific session on: “BRIDGE - The Generation GAP” - An Interactive Open Mic Session featuring Senior Intensivists & Dynamic Next Gen Critical Care Experts.",
    cover:
      "./img/Background.jpg",
  },
  {
    title: (<p>CME (TERNA HOSPITAL) : <br/>20ᵗʰ April 2025 @ Navi Mumbai </p>),
    description: "CME Programme on Antimicrobial Stewardship.",
    cover:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/gpuDLsnU4I.png",
  },
  {
    title: (<p>ANNUAL BUDGET MEET : <br/> 5ᵗʰ – 7ᵗʰ March 2025  @ Sonepat</p>),
    description:
      "Annual Budget meet was held @ SONEPAT, Haryana. Strategy for year 2025-2026 was rolled out to the entire Team of Glee Biotech. The management empowered the team with handing over car keys to employees, keeping their safety and well-being at the forefront.",
    cover:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BJY0RUX74t.jpg",
  },
];
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-slide
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, currentIndex]);

  const nextSlide = () =>
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  const goToSlide = (index) => setCurrentIndex(index);

  // Mobile single card view
  if (isMobile) {
    return (
      <section className="w-full bg-gradient-to-b from-[#f6f8fb] to-white py-8 px-4">
        <div className="max-w-sm mx-auto">
          <h2 className="text-[#1F488E] text-2xl font-bold leading-tight text-center mb-6">
            Events & Conferences
          </h2>

          <div className="relative" onTouchStart={() => setIsPaused(true)} onTouchEnd={() => setIsPaused(false)}>
            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-[#1F488E] rounded-full p-2 shadow-lg transition"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white text-[#1F488E] rounded-full p-2 shadow-lg transition"
            >
              <ChevronRight size={20} />
            </button>

            {/* Single Card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-48">
                <img
                  src={galleryData[currentIndex].cover}
                  alt={galleryData[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-sm mb-2 text-[#1F488E] line-clamp-2">
                  {galleryData[currentIndex].title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-4">
                  {galleryData[currentIndex].description}
                </p>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-4 space-x-2">
            {galleryData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? "bg-[#1F488E] scale-110"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-gradient-to-b from-[#f6f8fb] to-white lg:py-20 md:py-16 py-12">
      <div className="xl:max-w-[1280px] lg:max-w-[1024px] md:max-w-[768px] mx-auto px-3">
        <h2 className="text-[#1F488E] lg:text-[42px] md:text-[36px] sm:text-[30px] text-[28px] font-bold leading-[126%] text-center lg:mb-12 md:mb-10 mb-8">
          Events & Conferences
        </h2>

        {/* Desktop/Tablet Slider */}
        <div
          className="relative flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 z-30 bg-white/90 hover:bg-white text-[#1F488E] rounded-full p-2 md:p-3 shadow-lg transition hover:scale-110"
          >
            <ChevronLeft size={20} className="md:w-6 md:h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 z-30 bg-white/90 hover:bg-white text-[#1F488E] rounded-full p-2 md:p-3 shadow-lg transition hover:scale-110"
          >
            <ChevronRight size={20} className="md:w-6 md:h-6" />
          </button>

          {/* Cards Container */}
          <div className="relative w-full max-w-6xl lg:h-[520px] md:h-[460px] h-[400px] flex items-center justify-center">
            <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 w-full">
              {/* Left Card - Only visible on large screens */}
              <div className="w-72 xl:w-80 opacity-50 scale-95 transition-all duration-500">
                <div
                  className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:opacity-80 h-[520px] flex flex-col"
                  onClick={prevSlide}
                >
                  <div className="h-56">
                    <img
                      src={
                        galleryData[
                          (currentIndex - 1 + galleryData.length) %
                            galleryData.length
                        ].cover
                      }
                      alt="Previous event"
                      className="w-full h-full "
                    />
                  </div>
                  <div className="px-6 py-6 flex-1 flex flex-col">
                    <p className="font-bold text-md mb-3 text-[#1F488E] line-clamp-2">
                      {
                        galleryData[
                          (currentIndex - 1 + galleryData.length) %
                            galleryData.length
                        ].title
                      }
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed ">
                      {
                        galleryData[
                          (currentIndex - 1 + galleryData.length) %
                            galleryData.length
                        ].description
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Center Card */}
              <div className="w-80 xl:w-96 opacity-100 scale-110 z-10 transition-all duration-500">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden ring-4 ring-[#1F488E]/20 h-[520px] flex flex-col">
                  <div className="h-56">
                    <img
                      src={galleryData[currentIndex].cover}
                      alt={galleryData[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 py-6 flex-1 flex flex-col">
                    <p className="font-bold text-md mb-3 text-[#1F488E] line-clamp-2">
                      {galleryData[currentIndex].title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed ">
                      {galleryData[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Card - Only visible on large screens */}
              <div className="w-72 xl:w-80 opacity-50 scale-95 transition-all duration-500">
                <div
                  className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:opacity-80 h-[520px] flex flex-col"
                  onClick={nextSlide}
                >
                  <div className="h-56">
                    <img
                      src={
                        galleryData[(currentIndex + 1) % galleryData.length].cover
                      }
                      alt="Next event"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 py-6 flex-1 flex flex-col">
                    <p className="font-bold text-md mb-3 text-[#1F488E] line-clamp-2">
                      {galleryData[(currentIndex + 1) % galleryData.length].title}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed ">
                      {galleryData[(currentIndex + 1) % galleryData.length].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Medium screens - Single centered card */}
            <div className="lg:hidden flex items-center justify-center w-full">
              <div className="w-full max-w-sm md:max-w-md opacity-100 z-10 transition-all duration-500">
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden ring-4 ring-[#1F488E]/20 h-[400px] md:h-[460px] flex flex-col">
                  <div className="h-44 md:h-52">
                    <img
                      src={galleryData[currentIndex].cover}
                      alt={galleryData[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-4 md:px-6 py-4 md:py-6 flex-1 flex flex-col">
                    <p className="font-bold text-sm md:text-md mb-2 md:mb-3 text-[#1F488E] line-clamp-2">
                      {galleryData[currentIndex].title}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed ">
                      {galleryData[currentIndex].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 md:mt-8 lg:mt-10 space-x-2">
          {galleryData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#1F488E] scale-110"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;