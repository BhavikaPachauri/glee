import React, { useState } from "react";
import Slider from "react-slick";
import HeroBanner from "../assets/images/png/HeroBanner.png";
import { NextArrow, PrevArrow } from "./Icons";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
};

const slidesData = [
  {
    description: (
      <>
        Redefining Critical Care In{" "}
        <span className="text-[#6BD4FF] font-medium">INDIA</span> With A
        Multi-Faceted Approach That Incorporates Advancements In Technology,
        Innovative Strategies Enhance Patient Outcomes.
      </>
    ),
  },
  {
    description: (
      <>
        Redefining Critical Care In{" "}
        <span className="text-[#6BD4FF] font-medium">INDIA</span> With A
        Multi-Faceted Approach That Incorporates Advancements In Technology,
        Innovative Strategies Enhance Patient Outcomes.
      </>
    ),
  },
  {
    description: (
      <>
        Redefining Critical Care In{" "}
        <span className="text-[#6BD4FF] font-medium">INDIA</span> With A
        Multi-Faceted Approach That Incorporates Advancements In Technology,
        Innovative Strategies Enhance Patient Outcomes.
      </>
    ),
  },
  {
    description: (
      <>
        Redefining Critical Care In{" "}
        <span className="text-[#6BD4FF] font-medium">INDIA</span> With A
        Multi-Faceted Approach That Incorporates Advancements In Technology,
        Innovative Strategies Enhance Patient Outcomes.
      </>
    ),
  },
];

const MainHeader = () => {
  const slider = React.useRef(null);
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);

  const handlePrevClick = () => {
    setPrevClicked(true);
    slider?.current?.slickPrev();

    setTimeout(() => {
      setPrevClicked(false);
    }, 200);
  };

  const handleNextClick = () => {
    setNextClicked(true);
    slider?.current?.slickNext();

    setTimeout(() => {
      setNextClicked(false);
    }, 200);
  };

  return (
    <div className="w-full">
      <div className="animate-background flex items-center lg:pt-[140px] lg:pb-[70px] py-20 relative">
        <img
          src={HeroBanner}
          alt="HeroBanner"
          className="w-full h-full absolute top-0 left-0 z-0"
        />
        <div className="xl:max-w-[1157px] mx-auto px-3 w-full relative z-10">
          <Slider {...settings} ref={slider}>
            {slidesData.map((slide, index) => (
              <div
                key={index}
                className="w-full lg:w-[55%] text-center lg:text-left"
              >
                <h1
                  className="font-medium lg:text-[58px] md:text-[45px] sm:text-[38px] text-[35px] text-white leading-[125%] mb-[17px]"
                  data-aos="fade-down"
                >
                  Glee Biotech Limited
                </h1>
                <p
                  className="sm:text-[24px] text-[20px] leading-[128%] font-light text-white max-w-[714px]"
                  data-aos="fade-down"
                >
                  {slide.description}
                </p>
              </div>
            ))}
          </Slider>
          <div
            className="flex gap-4 items-center lg:mt-8 mt-4 lg:justify-start justify-center lg:mb-[150px] mb-20"
            data-aos="fade-down"
          >
            <button
              className={`cursor-pointer transition-all duration-300 ease-linear ${
                prevClicked ? "scale-110" : ""
              }`}
              onClick={handlePrevClick}
            >
              <PrevArrow />
            </button>
            <button
              className={`cursor-pointer transition-all duration-300 ease-linear ${
                nextClicked ? "scale-110" : ""
              }`}
              onClick={handleNextClick}
            >
              <NextArrow />
            </button>
          </div>
          <p className="sm:text-[24px] text-[20px] font-normal italic text-end">
            “Redefining the future of Critical Care.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
