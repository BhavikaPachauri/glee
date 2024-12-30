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
                GLEE BIOTECH LTD is a dedicated healthcare solutions provider
                committed to enhancing human well-being. With over 30 years of
                industry experience, our expert team specializes in sourcing and
                delivering high-quality healthcare products. Our offerings
                include medicines, medical consumables, implants, PPE kits, food
                products, and medical furniture. Although we do not manufacture
                these products, we guarantee their quality through trusted
                partnerships.
              </p>
            </div>
            <div className="lg:w-[33%] sm:w-[90%] mx-auto">
              <p
                className="text-[16px] text-[#59606C] leading-[125%] lg:text-start text-center"
                data-aos="fade-down"
              >
                GLEE BIOTECH LTD was founded by visionary promoters and an
                experienced team with decades of expertise in the pharmaceutical
                industry. Driven by our mission to improve human lives, we have
                established ourselves as a trusted name in healthcare. We are
                continuously committed to providing meaningful and reliable
                healthcare solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
