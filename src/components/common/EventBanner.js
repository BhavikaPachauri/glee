import React from "react";
import Slider from "react-slick";

const images = [
  "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/bXPtUf4x42.jpg",
  "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Xxtph8NKda.jpg",
  "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/2WBUKPyAYv.jpg",
];

const EventBanner = () => {
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

  return (
    <div className="bg-[#1f488e]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Event Banner ${index + 1}`}
              className="w-full md:h-screen-minus-83 h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventBanner;
