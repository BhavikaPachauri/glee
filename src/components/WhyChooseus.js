import React from "react";
import {
  FaHospital,
  FaTruck,
  FaCheckCircle,
  FaLightbulb,
} from "react-icons/fa";

const WhyChooseus = () => {
  const features = [
    {
      icon: <FaHospital className="w-10 h-10 text-[#1F488E]" />,
      title: "Expertise in Critical Care",
      description: "Specialized solutions for high-risk conditions.",
    },
    {
      icon: <FaTruck className="w-10 h-10 text-[#1F488E]" />,
      title: "PAN-India Presence",
      description: "Reliable and timely delivery nationwide.",
    },
    {
      icon: <FaCheckCircle className="w-10 h-10 text-[#1F488E]" />,
      title: "Quality Assurance",
      description:
        "Partnering with trusted manufacturers for genuine products.",
    },
    {
      icon: <FaLightbulb className="w-10 h-10 text-[#1F488E]" />,
      title: "Innovation and Expansion",
      description:
        "Continuously enhancing our portfolio to meet diverse healthcare needs.",
    },
  ];

  return (
    <section className="lg:py-20 sm:py-16 py-12 px-4 bg-[#D2DAE8]">
      <div className="xl:max-w-[1280px] mx-auto px-3">
        <div className="text-center mb-12">
          <h2 className="text-[#1F488E] lg:text-[42px] md:text-[36px] text-[32px] font-bold leading-[126%] text-center tracking-tighter">
            Why Choose Us?
          </h2>
          <p className="mt-3 text-gray-600 text-lg max-w-2xl mx-auto">
            We are committed to delivering excellence in healthcare solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 text-center"
            >
              <div className="w-16 h-16 bg-[#D2DAE8] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-[#1F488E] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseus;
