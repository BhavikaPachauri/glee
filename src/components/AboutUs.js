import React from "react";
import { Link } from "react-router-dom";
import { MoreIcon } from "./Icons";

const AboutUs = () => {
  return (
    <>
      <div className="max-lg:py-14 max-sm:py-10">
        <div className="xl:max-w-[1414px] mx-auto px-3 lg:my-[74px]">
          <div className="max-md:flex justify-between items-center md:relative">
            <h2
              className="text-[#1F488E] lg:text-[58px] md:text-[45px] sm:text-[38px] text-[35px] leading-[126%] mb-4 md:text-center"
              data-aos="fade-down"
            >
              About Us
            </h2>
            <div
              data-aos="fade-left"
              className="md:absolute top-6 2xl:right-0 right-3"
            >
              <Link
                to="/aboutus"
                className="text-[15px] font-normal text-[#1F52A9] flex items-center gap-1 justify-center group"
              >
                Explore
                <span>
                  <MoreIcon />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap lg:gap-0 gap-5 items-center max-w-[1019px] mx-auto">
            <div className="lg:w-1/2 flex lg:gap-5 gap-3 mx-auto">
              <div
                className="relative p-1.5 rounded-xl bg-gradient-border animate-gradient-border max-w-[280px] md:mt-[50px] mt-[25px]"
                data-aos="fade-down"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 via-blue-800 to-gray-400">
                  <img loading="lazy" 
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
                  <img loading="lazy" 
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/urL3SRqwc8.webp"
                    alt="Product Image"
                    className="w-full h-auto rounded-lg scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[45%]" data-aos="fade-down">
              <p className="text-[#59606C] lg:text-[18px] text-[16px] leading-[128%] lg:text-start md:text-center">
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

export default AboutUs;
