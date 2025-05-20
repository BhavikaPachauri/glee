import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHeartbeat } from "react-icons/fa";

const ServiceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 6000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const services = [
    {
      title: "Life to Lives...",
      icon: <FaHeartbeat className="text-4xl" />,
    },
    {
      title: "Life to Lives...",
      icon: <FaHeartbeat className="text-4xl" />,
    },
    {
      title: "Life to Lives...",
      icon: <FaHeartbeat className="text-4xl" />,
    },
    {
      title: "Life to Lives...",
      icon: <FaHeartbeat className="text-4xl" />,
    },
    {
      title: "Life to Lives...",
      icon: <FaHeartbeat className="text-4xl" />,
    },
    {
      title: "Life to Lives...",
      icon: <FaHeartbeat className="text-4xl" />,
    },
    {
      title: "Life to Lives...",
      icon: <FaHeartbeat className="text-4xl" />,
    },
    {
      title: "Life to Lives...",
      icon: <FaHeartbeat className="text-4xl" />,
    },
  ];

  return (
    <div className="w-full bg-[#1F488E]">
      <div className="max-w-[1920px]">
        <Slider {...settings} className="service-slider">
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className="flex items-center justify-center text-white">
                <h3 className="text-xl font-medium ff_shrikhand text-nowrap">
                  {service.title}
                </h3>
                <div className="w-20 h-20 flex items-center justify-center text-4xl">
                  {/* {service.icon} */}
                  <img src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Y6Vkdsrk5I.png" alt="Service Icon" className="mt-2"  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ServiceSlider;
