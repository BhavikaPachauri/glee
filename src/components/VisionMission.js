import React from "react";

const VisionMission = () => {
  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16 xl:py-20">
      <div className="xl:max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 items-center lg:items-stretch ">
            {/* Vision Section */}
            <div className="p-6 sm:p-8 text-center shadow-2xl bg-white rounded-lg flex flex-col order-1 lg:order-1 lg:mt-[20%] lg:h-[370px]">
              <h2 className="text-2xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">Vision</h2>
              <p className="text-gray-700 text-[18px] leading-relaxed text-justify flex-grow">
                "Touching Lives Globally Through Quality & Affordable Healthcare Solutions".
                We aim to make a meaningful difference in patient well-being by ensuring our products reach those who need them most.
              </p>
            </div>

            {/* Center Network Image */}
            <div className="flex justify-center items-center order-2 lg:order-2 px-4 sm:px-0">
              <div
                className="relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-2xl shadow-2xl overflow-hidden"
                style={{ aspectRatio: "3 / 4" }}
              >
                <img
                  src="./img/HomeVideo.gif"
                  alt="Network"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Mission Section */}
            <div className="p-6 sm:p-8 text-center shadow-2xl bg-white rounded-lg flex flex-col order-3 lg:order-3 lg:mt-[20%] lg:h-[370px]">
              <h2 className="text-2xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">Mission</h2>
              <div className="text-gray-700 text-[18px] leading-relaxed text-left flex-grow">
                <p className="mb-3 sm:mb-4">To provide high-quality, affordable healthcare solutions that meet patient needs and improve lives worldwide.</p>
                {/* <div className="space-y-2 sm:space-y-1">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Circle className="text-blue-900 mt-1.5 w-2 h-2 flex-shrink-0 fill-current" />
                    <span>Providing safe, effective, and Quality healthcare products.</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Circle className="text-blue-900 mt-1.5 w-2 h-2 flex-shrink-0 fill-current" />
                    <span>Maintaining the highest quality standards in everything we do.</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Circle className="text-blue-900 mt-1.5 w-2 h-2 flex-shrink-0 fill-current" />
                    <span>Addressing healthcare gaps with patient-focused solutions.</span>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Circle className="text-blue-900 mt-1.5 w-2 h-2 flex-shrink-0 fill-current" />
                    <span>Committing to continuous growth and global reach.</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;