import React from "react";

const AboutDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 lg:py-20 sm:py-16 py-12">
      <div className="xl:max-w-[1280px] mx-auto px-3">
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center"
          data-aos="fade-up"
        >
          <div className="space-y-3 lg:text-start text-center">
          <h2
          className="text-[#1F488E] text-[26px] font-bold leading-[120%]"
          data-aos="fade-down"
        >
          About Us
        </h2>
            <p className="text-[#59606C] lg:text-[18px] text-[16px] leading-[128%]">
              Glee Biotech is a growing pharmaceutical company with big goals
              and a clear vision for the future. We want to make a real
              difference in the critical care sector by offering high-quality
              and reliable healthcare products. With the strong support of our
              parent company, PDPL, we benefit from their large and
              well-organized distribution network. This helps us reach
              hospitals, clinics, and healthcare providers all over the country
              quickly and smoothly.
            </p>
            <p className="text-[#59606C] lg:text-[18px] text-[16px] leading-[128%]">
              We can proudly boast of our pan-India presence, focused marketing
              approach, and efficient distribution network that ensures the
              timely delivery of specialized products across India. This keeps
              us a step ahead of our competition.
            </p>
            <p className="text-[#59606C] lg:text-[18px] text-[16px] leading-[128%]">
              At Glee Biotech, we are focused on doing our best, bringing new
              ideas, and improving the lives of patients with our honest and
              dedicated approach to healthcare. We are committed to providing
              high-quality healthcare solutions, with our products in the
              critical care segment and medical consumables. We are Further
              Spreading our Wings and consolidating our Portfolio by Introducing
              High-Quality Products in Gastroenterology, Oncology, and Virology.
            </p>
          </div>
          <div className="relative w-full">
            <div className="relative z-10 rounded-2xl shadow-xl ">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/1zgLbTjhS9.webp"
                alt="Glee Biotech Healthcare"
                className="w-full h-[500px] object-cover rounded-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-xl">
                <h3 className="text-white text-2xl font-semibold">
                  Healthcare Excellence
                </h3>
                <p className="text-white/80 mt-2">
                  Delivering Quality Care Nationwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
