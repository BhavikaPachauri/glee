import React, { useState } from "react";
import Slider from "react-slick";
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
        Dedicated to delivering high-quality pharmaceutical products since 2020,
        M/s Glee Biotech Ltd commits to{" "}
        <span className="text-[#6BD4FF] font-medium">excellence</span> in the
        healthcare industry.
      </>
    ),
  },
  {
    description: (
      <>
        {" "}
        We specialize in a
        <span className="text-[#6BD4FF] font-medium"> comprehensive</span> range
        of healthcare solutions, including medicines, injectables, surgical
        supplies.
      </>
    ),
  },
  {
    description: (
      <>
        We aim to foster{" "}
        <span className="text-[#6BD4FF] font-medium">collaboration</span>{" "}
        amongst various healthcare professionals to optimise patient care .
      </>
    ),
  },
  {
    description: (
      <>
        Our focus on stringent quality standards and regulatory compliance our
        focus on stringent quality standards and regulatory compliance with{" "}
        <span className="text-[#6BD4FF] font-medium">
          {" "}
          WHO_GMP&ISO 9001:2015 CERTIFICATIONS
        </span>{" "}
        THAT ensures, every product meets High Quality standards for safety &
        efficacy.
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
      <div className="bg-herobanner bg-cover bg-center flex items-center lg:pt-[140px] lg:pb-[70px] py-20 relative">
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
                  className="sm:text-[22px] text-[18px] leading-[128%] font-light text-white max-w-[730px]"
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
              className={`cursor-pointer transition-transform duration-300 ease-linear ${
                prevClicked ? "scale-110" : ""
              }`}
              onClick={handlePrevClick}
              aria-label="Previous"
              type="button"
            >
              <PrevArrow />
            </button>
            <button
              className={`cursor-pointer transition-all duration-300 ease-linear ${
                nextClicked ? "scale-110" : ""
              }`}
              onClick={handleNextClick}
              aria-label="Next"
              type="button"
            >
              <NextArrow />
            </button>
          </div>
          <div className="sm:text-[24px] text-white text-[20px] font-normal italic text-end flex justify-end">
            <span>“</span>
            <img
              loading="lazy"
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/sIIF2mxKfN.webp"
              width={300}
              className="md:w-[300px] w-[200px]"
            />
            <span>”</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
