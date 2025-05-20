import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <div className="bg-history bg-no-repeat bg-cover lg:py-20 sm:py-16 py-12">
        <div className="xl:max-w-[1280px] mx-auto px-3">
        <h2
                className="text-[#1F488E] lg:text-[42px] md:text-[36px] text-[32px] font-bold leading-[126%] text-center"
                data-aos="fade-down"
              >
                Our Commitment
              </h2>
              <p
                className="text-[18px] max-w-5xl mx-auto text-[#59606C] leading-[125%] my-5 text-center"
                data-aos="fade-up"
              >
                Deep Engagement with the Medical Fraternity We Aim to focus &
                promote deep engagement with the medical fraternity and we are
                committed to providing the best Healthcare solutions to them for
                better patient care. Our strategic and diversified approach
                empowers us to venture into new specialty areas, addressing
                unmet patient needs.
              </p>
              <p
                className="text-[18px] text-[#59606C] leading-[125%] max-w-5xl mx-auto text-center"
                data-aos="fade-down"
              >
                While India remains our primary market, Glee Biotech aspires to
                expand its geographical presence in key global markets. Inspired
                by our vision, we are committed to touching lives globally
                through quality and affordable healthcare solutions.
              </p>
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
