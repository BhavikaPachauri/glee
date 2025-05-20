import React, { useState } from "react";
import { AccordianArrow } from "./Icons";

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is GLEE Biotech Ltd. (GLEE)?",
      content:
        "GLEE Biotech Ltd. is the visionary creation of its esteemed promoters and a dedicated team, who collectively bring over 30 years of extensive experience in the pharmaceutical industry. It is one of the Fastest Growing Pharmaceutical Companies in the critical care Segment with an all-India presence.",
    },
    {
      title: "Where is GLEE Biotech located?",
      content:
        "GLEE Biotech is located at 315, 3rd Floor, SAS Towers, Medicity, Sector 38, Gurugram, Haryana. For more information about our headquarters or operational facilities, please contact our support team or visit our website.",
    },
    {
      title: "How does GLEE Biotech ensure product quality?",
      content:
        "GLEE is dedicated to maintaining high quality and compliance standards by adhering to strict quality assurance protocols and regulatory requirements throughout all stages of manufacturing and supply. Our products are certified with WHO-GMP and ISO 9001:2015. Our primary goal is to provide quality medicines to our esteemed medical community at affordable prices.",
    },
    {
      title: "How does GLEE Biotech contribute to the healthcare ecosystem?",
      content:
        "GLEE Biotech supports the healthcare ecosystem by Offering high-quality, reliable healthcare products. We have a diverse portfolio with quality products in critical care, Gastroenterology, Oncology, and virology.",
    },
    {
      title: "What sets GLEE Biotech apart from its competitors?",
      content:
        "GLEE's unique combination of extensive industry experience, a broad product portfolio, and a focus on meaningful healthcare innovation sets it apart from other companies in the pharmaceutical and healthcare space.",
    },
  ];

  return (
    <section
      className="relative bg-[#CFD7E4]"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F488E]/5 via-transparent to-[#1F488E]/5"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1F488E]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#1F488E]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#1F488E]/5 via-transparent to-[#1F488E]/5 rounded-full filter blur-3xl"></div>
      </div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-[#1F488E] rounded-full filter blur-[100px] opacity-10" />
      <svg
        className="absolute top-20 right-20 w-[30px] h-[30px] opacity-20 z-0 hidden md:block animate-float"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="30"
          cy="30"
          r="25"
          stroke="#1F488E"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="30"
          cy="30"
          r="15"
          stroke="#1F488E"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      <svg
        className="absolute top-40 left-20 w-[60px] h-[20px] opacity-20 z-0 hidden md:block animate-float-delayed"
        viewBox="0 0 100 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0 h60 a20 20 0 0 1 20 20 a20 20 0 0 1 -20 20 h-60 a20 20 0 0 1 -20 -20 a20 20 0 0 1 20 -20"
          stroke="#1F488E"
          strokeWidth="2"
          fill="none"
        />
        <line x1="50" y1="0" x2="50" y2="40" stroke="#1F488E" strokeWidth="2" />
      </svg>
      <svg
        className="absolute bottom-40 right-40 w-[60px] h-[30px] opacity-20 z-0 hidden md:block animate-float"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="10"
          y="10"
          width="60"
          height="60"
          rx="10"
          stroke="#1F488E"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="40"
          cy="40"
          r="20"
          stroke="#1F488E"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <svg
        className="absolute top-60 right-40 w-[60px] h-[20px] opacity-20 z-0 hidden md:block animate-float-delayed"
        viewBox="0 0 120 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="20"
          cy="20"
          r="15"
          stroke="#1F488E"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="60"
          cy="20"
          r="15"
          stroke="#1F488E"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="100"
          cy="20"
          r="15"
          stroke="#1F488E"
          strokeWidth="2"
          fill="none"
        />
      </svg>
      <svg
        className="absolute bottom-20 left-40 w-[60px] h-[20px] opacity-20 z-0 hidden md:block animate-float"
        viewBox="0 0 140 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 0 h100 a20 20 0 0 1 20 20 a20 20 0 0 1 -20 20 h-100 a20 20 0 0 1 -20 -20 a20 20 0 0 1 20 -20"
          stroke="#1F488E"
          strokeWidth="2"
          fill="none"
        />
        <line x1="70" y1="0" x2="70" y2="40" stroke="#1F488E" strokeWidth="2" />
      </svg>
      <div className="max-w-[984px] mx-auto px-3 md:py-20 py-12 relative">
        <h2
          id="faq-heading"
          className="text-[#1F488E] drop-shadow-lg text-3xl md:text-4xl font-bold leading-[126%] mb-4 text-center"
          data-aos="fade-down"
        >
          Frequently Asked Questions
        </h2>
        <div className="max-w-[793px] mx-auto w-full flex flex-col gap-6 mt-6">
          {accordionData.map((item, index) => (
            <div
              className="md:px-6 px-4 rounded-xl bg-white/90 backdrop-blur-sm border border-gray-100 hover:border-[#1F488E]/20 transition-all duration-300 shadow-sm hover:shadow-md"
              key={index}
              data-aos="zoom-in-up"
            >
              <button
                className="w-full flex justify-between items-center leading-[135%] cursor-pointer font-normal"
                onClick={() => toggleAccordion(index)}
                aria-expanded={openAccordion === index}
                aria-controls={`faq-content-${index}`}
              >
                <div
                  className={`${
                    openAccordion === index
                      ? "text-[#1F488E] sm:pt-[21.5px] pt-4 pb-[12px]"
                      : "text-[#686868] sm:py-[21.5px] py-4"
                  } sm:text-[20px] text-[16px] font-medium leading-[24px] transition-all duration-300 text-left`}
                >
                  {item.title}
                </div>
                <div
                  className={`${
                    openAccordion === index ? "rotate-180" : ""
                  } transition-transform duration-300`}
                  aria-hidden="true"
                >
                  <AccordianArrow />
                </div>
              </button>
              <div
                id={`faq-content-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openAccordion === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="pb-6 text-[#545454] sm:text-[18px] text-[16px] leading-relaxed border-t border-gray-100 mt-2">
                  <p
                    className="pt-4"
                    dangerouslySetInnerHTML={{
                      __html: item.content,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
