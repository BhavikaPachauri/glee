import React from "react";
import "../components/VisionMissionstyle.css";

const VisionMission = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] relative z-[1] lg:pb-[37px] lg:pt-5 py-20">
        <img loading="lazy" 
          src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/QXx0jIccHU.webp"
          alt="GradientLine"
          className="absolute lg:-top-[36px] -top-20 left-0 w-full lg:-rotate-3 h-[87px]"
        />
        <div className="xl:max-w-[1110px] mx-auto px-3">
          <div className="flex flex-wrap items-center max-lg:justify-center lg:gap-0 gap-10">
            <div
              className="xl:w-[32.5%] lg:w-[31%] max-lg:order-2 md:w-[47%] w-[90%]"
              data-aos="fade-up"
            >
              <div className="relative bg-white p-5 min-h-[333px] flex justify-center items-center flex-col rounded-[10px] shadow-lg transition-all duration-500 hover:scale-105 hover:-rotate-1 hover:shadow-2xl cursor-pointer gradient-hover-card">
                <h2 className="text-black text-[34px] leading-[120%] mb-5 text-center">
                  Vision
                </h2>
                <p className="text-[16px] text-[#59606C] leading-[125%] max-lg:text-center">
                  Our Vision is Life to lives .. Touching lives globally through
                  quality & affordable healthcare solutions.
                </p>
              </div>
            </div>
            <div
              className="lg:w-[34.8%] relative z-[1] max-lg:order-1 lg:block hidden gradient-border"
              data-aos="fade-down"
            >
              <img loading="lazy" 
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/s4rUh5WHds.webp"
                alt="MissionVisionImg"
                className="xl:max-w-[378px] w-full shadow-lg scale-[0.98] cursor-pointer rounded-[10px]"
              />
            </div>
            <div
              className="xl:w-[32.5%] lg:w-[31%] md:w-[47%] w-[90%] max-lg:order-3"
              data-aos="fade-up"
            >
              <div className="relative bg-white p-5 min-h-[333px] flex justify-center items-center flex-col rounded-[10px] shadow-lg transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl cursor-pointer gradient-hover-card">
                <h2 className="text-black text-[34px] leading-[120%] mb-5 text-center">
                  Mission
                </h2>
                <p className="text-[16px] text-[#59606C] leading-[125%] max-lg:text-center">
                  To deliver high quality products and to become fastest growing
                  healthcare organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VisionMission;
