import React, { useState } from "react";

const galleryData = [
  {
    title: "Jagarnathpuri Conference",
    description: "Celebrating the spirit of innovation and collaboration at Glee Biotech's event in Jagarnathpuri. Our team showcased cutting-edge solutions and engaged with industry leaders to drive progress and growth.",
    cover:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/zVGYPr2IXY.png"
  },
  {
    title: "Kochi Event",
    description: "A glimpse into the energy at our stall as we connected with industry experts and distributed delegate kits! Thank you to everyone who visited and engaged in meaningful conversations.",
    cover:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/MQSj1Tzeno.jpg"
  },
  {
    title: "Navi Mumbai Event",
    description: "Glee Biotech CME Participation- @ TERNA Hospital ( Navi Mumbai ) An insightful day with Drs discussing smarter antibiotic use",
    cover:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/gpuDLsnU4I.png"
  },
  {
    title: "Award Ceremony",
    description: "At Glee Biotech, every milestone we reach is powered by our incredible team. To honor their dedication, we’re proud to reward excellence with the keys to a brand-new car!",
    cover:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BJY0RUX74t.jpg"
  },
  {
    title: "Sonipat Budget Meet",
    description: "Glee Biotech participated in the Sonipat Budget Meet, where we showcased our innovative solutions and engaged with industry experts to drive progress and growth.",
    cover:
      "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/BJY0RUX74t.jpg"
  },
];

const Gallery = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f6f8fb] to-white lg:py-20 sm:py-16 py-12">
      <div className="xl:max-w-[1280px] mx-auto px-3">
      <h2
        className="text-[#1F488E] lg:text-[42px] md:text-[36px] text-[32px] font-bold leading-[126%] text-center lg:mb-12 mb-8"
        data-aos="fade-down"
      >
        Events & Conferences
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {galleryData.map((item, idx) => (
          <div
            key={idx}
            className="w-full bg-white rounded-3xl shadow-lg overflow-hidden cursor-pointer relative transition-transform duration-200 hover:scale-[1.01] hover:shadow-2xl flex flex-col"
          >
            <div className="h-56 overflow-hidden">
              <img
                src={item.cover}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 pt-8 pb-6 text-center flex-1 flex flex-col justify-between">
              <div className="font-bold text-2xl mb-2 text-[#1F488E]">{item.title}</div>
              <div className="text-gray-500 text-base">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Gallery;
