import React from "react";
import Slider from "react-slick";

const EventBanner = () => {
  const images = [
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ZfrMqhH3tZ.jpg",
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/eWj74ZvbFE.jpg",
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/UAbqjZRo3O.jpg",
  ];

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
