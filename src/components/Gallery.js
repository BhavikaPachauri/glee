import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const galleryData = [
  {
    title: "Jagarnathpuri Conference",
    description: "Celebrating the spirit of innovation and collaboration at Glee Biotech's event in Jagarnathpuri. Our team showcased cutting-edge solutions and engaged with industry leaders to drive progress and growth.",
    cover: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/zVGYPr2IXY.png"
  },
  {
    title: "Kochi Event",
    description: "A glimpse into the energy at our stall as we connected with industry experts and distributed delegate kits! Thank you to everyone who visited and engaged in meaningful conversations.",
    cover: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/MQSj1Tzeno.jpg"
  },
  {
    title: "Navi Mumbai Event",
    description: "Glee Biotech CME Participation- @ TERNA Hospital ( Navi Mumbai ) An insightful day with Drs discussing smarter antibiotic use",
    cover: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/gpuDLsnU4I.png"
  },
  {
    title: "Award Ceremony",
    description: "At Glee Biotech, every milestone we reach is powered by our incredible team. To honor their dedication, we're proud to reward excellence with the keys to a brand-new car!",
    cover: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BJY0RUX74t.jpg"
  },
  {
    title: "Sonipat Budget Meet",
    description: "Glee Biotech participated in the Sonipat Budget Meet, where we showcased our innovative solutions and engaged with industry experts to drive progress and growth.",
    cover: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BJY0RUX74t.jpg"
  },
];

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % galleryData.length);
    }, 3000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };



  return (
    <section className="w-full bg-gradient-to-b from-[#f6f8fb] to-white lg:py-20 sm:py-16 py-12">
      <div className="xl:max-w-[1280px] mx-auto px-3">
        <h2 className="text-[#1F488E] lg:text-[42px] md:text-[36px] text-[32px] font-bold leading-[126%] text-center lg:mb-12 mb-8">
          Events & Conferences
        </h2>
        
        {/* Slider Container */}
        <div 
          className="relative flex items-center justify-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-30 bg-white/90 hover:bg-white text-[#1F488E] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 z-30 bg-white/90 hover:bg-white text-[#1F488E] rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slides Container */}
          <div className="relative w-full max-w-6xl h-[500px] flex items-center justify-center">
            <div className="flex items-center justify-center gap-8 w-full">
              {/* Left Card */}
              <div className="w-80 opacity-50 scale-95 transition-all duration-500">
                <div
                  className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:opacity-70"
                  onClick={prevSlide}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length].cover}
                      alt={galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 pt-6 pb-6 text-center">
                    <div className="font-bold text-xl mb-3 text-[#1F488E]">
                      {galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length].title}
                    </div>
                    <div className="text-gray-500 text-sm leading-relaxed">
                      {galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length].description.length > 100 
                        ? `${galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length].description.substring(0, 100)}...` 
                        : galleryData[(currentIndex - 1 + galleryData.length) % galleryData.length].description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Card - Highlighted */}
              <div className="w-80 opacity-100 scale-110 z-10 transition-all duration-500">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden ring-4 ring-[#1F488E]/20">
                  <div className="h-48 overflow-hidden">
                    <img
                      src={galleryData[currentIndex].cover}
                      alt={galleryData[currentIndex].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 pt-6 pb-6 text-center">
                    <div className="font-bold text-2xl mb-3 text-[#1F488E]">
                      {galleryData[currentIndex].title}
                    </div>
                    <div className="text-gray-600 text-base leading-relaxed">
                      {galleryData[currentIndex].description.length > 130 
                        ? `${galleryData[currentIndex].description.substring(0, 130)}...` 
                        : galleryData[currentIndex].description}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Card */}
              <div className="w-80 opacity-50 scale-95 transition-all duration-500">
                <div
                  className="bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer hover:opacity-70"
                  onClick={nextSlide}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={galleryData[(currentIndex + 1) % galleryData.length].cover}
                      alt={galleryData[(currentIndex + 1) % galleryData.length].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 pt-6 pb-6 text-center">
                    <div className="font-bold text-xl mb-3 text-[#1F488E]">
                      {galleryData[(currentIndex + 1) % galleryData.length].title}
                    </div>
                    <div className="text-gray-500 text-sm leading-relaxed">
                      {galleryData[(currentIndex + 1) % galleryData.length].description.length > 100 
                        ? `${galleryData[(currentIndex + 1) % galleryData.length].description.substring(0, 100)}...` 
                        : galleryData[(currentIndex + 1) % galleryData.length].description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 space-x-2">
          {galleryData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-[#1F488E] scale-110' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Mobile View - Stack Cards */}
        <div className="lg:hidden mt-8">
          <div className="grid gap-6">
            {galleryData.map((item, index) => (
              <div
                key={index}
                className={`w-full bg-white rounded-3xl shadow-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-4 ring-[#1F488E]/20 shadow-2xl' 
                    : 'opacity-70'
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 pt-6 pb-6 text-center">
                  <div className="font-bold text-xl mb-3 text-[#1F488E]">
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;