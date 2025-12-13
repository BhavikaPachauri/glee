import React from "react";

const AboutDetails = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 lg:py-20 sm:py-16 py-12">
      <div className="xl:max-w-[1280px] mx-auto px-3">
        <div
          className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center justify-start"
          data-aos="fade-up"
        >
          <div className="relative w-full">
            <div className="relative z-10  ">
              
                  <img
                src="./img/bgAbout.svg"
                alt="Glee Biotech Healthcare"
                className="w-full h-[380px] object-contain"
              />
              
             
             
            </div>
          </div>
          <div className="space-y-5 lg:text-start  text-center">
          <h2
          className="text-[#10111A] text-[36px]  uppercase font-bold leading-[120%]"
          data-aos="fade-down"
        >
          About Us
        </h2>
            <p className="text-[#59606C] lg:text-[16px] text-[16px] leading-[128%]">
              Glee Biotech Ltd. is a rapidly growing pharmaceutical company with a clear vision to make a real impact in the critical care sector by delivering high-quality, reliable, and affordable healthcare products.  
              The company has a  strong backup support,   which certifies  extensive and well-organized distribution network  support  to ensure swift, nationwide reach serving hospitals, clinics, and healthcare providers across India.  
            </p>
            <p className="text-[#59606C] lg:text-[16px] text-[16px] leading-[128%]">
              With our PAN INDIA presence, targeted marketing strategies, and efficient logistics, we guarantee timely delivery of specialized products, keeping us a step ahead in a competitive market.  
            </p>
            
            <p className="text-[#59606C] lg:text-[16px] text-[16px] leading-[128%]">
             At Glee Biotech, we combine integrity, commitment, and dedication to improve patient outcomes. While our expertise lies in critical care medicines and medical consumables.<br/> We are expanding our portfolio to include high-quality products in <b>Gastroenterology, Oncology, and Virology</b> .
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
