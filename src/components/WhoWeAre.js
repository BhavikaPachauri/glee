import React from "react";
// import { FaHeartbeat } from "react-icons/fa";
const WhoWeAre = () => {
  return (
    <>
      <div className="bg-history bg-no-repeat bg-cover lg:py-20 sm:py-16 py-12">
      

        <div className="xl:max-w-[1280px] mx-auto px-3">
            <h2
                className="text-[#10111A]  text-[30px] font-bold   leading-[126%] text-center"
                data-aos="fade-down"
              >
                Our Commitment
              </h2>
                <div className="flex items-center justify-center text-[#1F488E]">
                <h3 className="text-xl font-medium ff_shrikhand text-nowrap">
                  Life to Lives …
                </h3>
                <div className="w-20 h-20 flex items-center justify-center text-4xl">
                  {/* {service.icon} */}
                  <img src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Y6Vkdsrk5I.png" alt="Service Icon" className="mt-2"  />
                </div>
              </div>
              <p
                className="text-[18px] max-w-5xl mx-auto text-[#59606C] leading-[125%] my-5 text-center"
                data-aos="fade-up"
              >
                We foster strong engagement with the medical fraternity, ensuring they have access to the most effective healthcare solutions for better patient care. Our strategic and diversified approach enables us to enter new specialties, addressing unmet patient needs with speed and precision.  
              </p>
              <p
                className="text-[18px] text-[#59606C] leading-[125%] max-w-5xl mx-auto text-center"
                data-aos="fade-down"
              >
                While India remains our primary market, we have global aspirations expanding into key international markets to touch lives worldwide through quality and affordable healthcare solutions.
              </p>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
