import React from "react";
import MedicineInHand from "../assets/images/png/MedicineInhand.png";
import WomenWithMedicine from "../assets/images/png/WomenWithMedicine.png";
import { Link } from "react-router-dom";
import { MoreIcon } from "./Icons";

const AboutUs = () => {
  return (
    <>
      <div className="max-lg:py-14">
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
                to="/products"
                className="text-[15px] font-normal text-[#1F52A9] flex items-center gap-1 justify-center group"
              >
                See more
                <span>
                  <MoreIcon />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap-reverse lg:gap-0 gap-5 items-center max-w-[1019px] mx-auto">
            <div className="lg:w-1/2 flex lg:gap-5 gap-3 mx-auto">
              <div
                className="relative p-1.5 rounded-xl bg-gradient-border animate-gradient-border max-w-[280px] md:mt-[50px] mt-[25px]"
                data-aos="fade-down"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 via-blue-800 to-gray-400">
                  <img
                    src={MedicineInHand}
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
                    src={WomenWithMedicine}
                    alt="Product Image"
                    className="w-full h-auto rounded-lg scale-105"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[45%]" data-aos="fade-down">
              <p className="text-[#59606C] text-[16px] lg:text-start md:text-center">
                M/s GLEE BIOTECH LTD (GLEE) is the visionary creation of its
                esteemed Promoters and a dedicated team, who collectively bring
                over 30 years of extensive experience in the Pharmaceutical
                Industry. At GLEE, our mission is to enhance and improve human
                lives by addressing medical needs with high-quality, meaningful
                healthcare products.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
