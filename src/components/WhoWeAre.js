import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className="bg-history bg-no-repeat bg-cover relative z-0">
        <div className="xl:max-w-[1365px] mx-auto px-3 lg:py-[120px] py-[140px]">
          <div className="flex flex-wrap items-center justify-between">
            <div className="lg:w-[20%] w-full">
              <h2
                className="text-black text-[34px] leading-[120%] lg:mb-4 mb-5 lg:text-start text-center"
                data-aos="fade-down"
              >
                Who we are & history
              </h2>
            </div>
            <div className="lg:w-[34%] sm:w-[90%] mx-auto">
              <p
                className="text-[16px] text-[#59606C] leading-[125%] lg:mb-0 mb-5 lg:text-start text-center"
                data-aos="fade-up"
              >
                Glee Biotech Ltd is one of the fastest-growing pharmaceutical
                companies, boasting over 30 years of experience in the critical
                care segment. We specialize in sourcing and delivering
                high-quality healthcare products, which include medical
                consumables, implants, PPE kits, food products, and medical
                furniture.
              </p>
            </div>
            <div className="lg:w-[33%] sm:w-[90%] mx-auto">
              <p
                className="text-[16px] text-[#59606C] leading-[125%] lg:text-start text-center"
                data-aos="fade-down"
              >
                We aim to further consolidate our presence by introducing a
                diverse portfolio of high-quality products in gastroenterology,
                oncology, and virology. Our commitment is to save lives more
                effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
