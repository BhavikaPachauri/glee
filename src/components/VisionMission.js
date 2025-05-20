import React from "react";

const VisionMission = () => {
  return (
    <section className="bg-[#EFEFEF] py-12 sm:py-16 lg:py-20">
      <div className="xl:max-w-[1280px] mx-auto px-3 flex flex-col gap-10">
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row overflow-hidden">
          <div className="md:w-1/2 w-full h-64 md:h-auto flex-shrink-0">
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/XkPMcNQ6fX.jpg"
              alt="Vision"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center sm:p-8 p-4">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 tracking-widest uppercase">Our Vision</h3>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Vision</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              Touching Lives Globally Through Quality & Affordable Healthcare Solutions Our vision is to touch lives globally by delivering quality and affordable healthcare solutions. We aim to make a meaningful impact on patient health and well-being, ensuring that our products reach those who need them the most.
            </p>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row-reverse overflow-hidden">
          <div className="md:w-1/2 w-full h-64 md:h-auto flex-shrink-0">
            <img
              src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Yy7A1uG30x.jpg"
              alt="Mission"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="md:w-1/2 w-full flex flex-col justify-center sm:p-8 p-4">
            <h3 className="text-xs font-semibold text-gray-400 mb-2 tracking-widest uppercase">Our Mission</h3>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Mission</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              Our mission is to provide safe and effective healthcare products and become a leading name in the healthcare industry. We aim to bring new and better solutions to the market, always striving for high standards and focusing on the needs of patients everywhere. We are dedicated to growth, innovation, and making a real difference in people's lives through our trusted and reliable products. To provide trustworthy healthcare solutions and grow into one of the quickest-expanding companies in the field. We aim to innovate, uphold the highest standards, and address healthcare gaps for patients across the globe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
