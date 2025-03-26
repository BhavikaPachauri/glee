import React from "react";

const AboutDetail = () => {
  return (
    <>
      <div className="relative max-lg:py-14 z-[1]">
        <img
          src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/QXx0jIccHU.webp"
          alt="GradientLine"
          className="absolute lg:-bottom-12 -bottom-20 left-0 w-full lg:rotate-3 h-[87px]"
        />
        <div className="xl:max-w-[1365px] mx-auto px-3 lg:mt-[-90px]">
          <div className="flex flex-wrap-reverse lg:gap-0 gap-5 items-center">
            <div className="lg:w-1/2 flex lg:gap-5 gap-3 mx-auto">
              <div
                className="relative p-1.5 rounded-xl bg-gradient-border animate-gradient-border max-w-[280px] md:mt-[50px] mt-[25px]"
                data-aos="fade-down"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 via-blue-800 to-gray-400">
                  <img
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/5URa2f2eNL.webp"
                    alt="Product Image"
                    className="w-full h-auto rounded-lg scale-105"
                  />
                </div>
              </div>
              <div
                className="relative p-1.5 rounded-xl bg-gradient-border animate-gradient-border max-w-[280px] md:mb-[50px] mb-[25px]"
                data-aos="fade-up"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 via-blue-800 to-gray-400">
                  <img
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/urL3SRqwc8.webp"
                    alt="Product Image"
                    className="w-full h-auto rounded-lg scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[45%]">
              <h2
                className="text-black text-[34px] leading-[120%] mb-4 lg:text-start text-center"
                data-aos="fade-left"
              >
                About Us
              </h2>
              <p
                className="text-[#59606C] text-[16px] lg:text-start text-center"
                data-aos="fade-left"
              >
                M/s Glee Biotech Ltd (GLEE), established in 2020 in Gurugram,
                Haryana, is a leader in pharmaceuticals, specializing in
                high-quality injectables and surgical solutions. Our 25,000
                square feet warehouse guarantees top-notch quality. We are
                committed to enhancing patient health with essential products
                such as medicines, consumables, masks, and PPE kits, serving
                critical care and anesthesia needs. GLEE is your trusted partner
                in healthcare excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutDetail;
