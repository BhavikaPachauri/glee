import React from "react";
import Slider from "react-slick";

const EventBanner = () => {
  const images = [
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/nO0as0SqWC.webp",
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/cb3fyPJQQD.webp",
    "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Cf3A5Nqe2Q.webp",
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
    <div className="bg-[#1f488e] max-sm:h-[200px]">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Event Banner ${index + 1}`}
              className="w-full md:h-[89vh] h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default EventBanner;
