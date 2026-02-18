import React from "react";

const ServiceSlider = () => {
  const services = [
    { icon: "/img/gleeLifeTolives.png" },
    { icon: "/img/gleeLifeTolives.png" },
    { icon: "/img/gleeLifeTolives.png" },
    { icon: "/img/gleeLifeTolives.png" },
    { icon: "/img/gleeLifeTolives.png" },
    { icon: "/img/gleeLifeTolives.png" },
  ];

  return (
    <div className="w-full bg-[#1F488E] overflow-hidden">
      <div className="relative flex w-max animate-marquee">

        {/* Duplicate items for smooth infinite scroll */}
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className="flex items-center justify-center px-12 py-6"
          >
            <div className="w-40 h-16 flex items-center justify-center">
              <img
                src={service.icon}
                alt="Service Icon"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default ServiceSlider;
