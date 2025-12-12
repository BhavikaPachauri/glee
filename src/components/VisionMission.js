import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
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
            {/* <h3 className="text-xs font-semibold text-gray-400 mb-2 tracking-widest uppercase">Our Vision</h3> */}
            <h2 className="text-2xl font-bold text-[#10111A] mb-4 uppercase">Our Vision</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              “Touching Lives Globally Through Quality & Affordable Healthcare Solutions"  
              We aim to make a meaningful difference in patient well-being by ensuring our products reach those who need them most.
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
            {/* <h3 className="text-xs font-semibold text-gray-400 mb-2 tracking-widest uppercase">Our Mission</h3> */}
            <h2 className="text-2xl font-bold text-[#10111A] mb-4 uppercase">Our Mission</h2>
            <p className="text-gray-600 text-base leading-relaxed mb-2">
              To become a leading and trusted name in the healthcare industry by :
              <br/>   
              <div className="flex items-center gap-2"><MdOutlineDoubleArrow  />Providing safe, effective, and Quality  healthcare products.</div>
              <div className="flex items-center gap-2"><MdOutlineDoubleArrow  />Maintaining the highest quality standards in everything we do.</div>
              <div className="flex items-center gap-2"><MdOutlineDoubleArrow  />Addressing healthcare gaps with patient-focused solutions.</div>
              <div className="flex items-center gap-2"><MdOutlineDoubleArrow  /> Committing to continuous growth and global reach.  </div>

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
