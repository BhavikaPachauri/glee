import React, { useState } from "react";
import { AccordianArrow } from "./Icons";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Faqs = () => {
  const [openAccordion, setOpenAccordion] = useState(null);
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const accordionData = [
    {
      title: "What is the journey of Glee Biotech Ltd.",
      content: (
        <ul className="pl-2 space-y-2">
          <li className="flex items-start gap-2">
            <MdOutlineDoubleArrow className="text-[#1F488E] mt-1" />
            <span>
              <strong>1993 :</strong> Journey initiated in healthcare segment
            </span>
          </li>
          <li className="flex items-start gap-2">
            <MdOutlineDoubleArrow className="text-[#1F488E] mt-1" />
            <span>
              <strong>2020 :</strong> Initiation of Glee Biotech Ltd. to serve hospital business
            </span>
          </li>
          <li className="flex items-start gap-2">
            <MdOutlineDoubleArrow className="text-[#1F488E] mt-1" />
            <span>
              <strong>2023 : WHO GMP & ISO 9001:2015</strong>  certified products initiation in critical care segment
            </span>
          </li>
          <li className="flex items-start gap-2">
            <MdOutlineDoubleArrow className="text-[#1F488E] mt-1" />
            <span>
              Glee Biotech Ltd. products initiated in major institutes in North and Central India
            </span>
          </li>
          <li className="flex items-start gap-2">
            <MdOutlineDoubleArrow className="text-[#1F488E] " size={40}/>
            <span>
              <strong>2024-25 :</strong> Glee Biotech Ltd. took the big leap <b>ALL INDIA</b> with a <b>PAN INDIA</b> launch of team to promote critical care products, aiming to provide affordable healthcare solutions in critical care
            </span>
          </li>
        </ul>
      ),
    },
    {
      title: "Where is GLEE Biotech Ltd. located?",
      content: (
        <p>
          GLEE Biotech Ltd. is located at 315, 3rd Floor, SAS Towers, Medicity,
          Sector 38, Gurugram, Haryana. For more information about our
          headquarters or operational facilities, please contact our support
          team or visit our website.
        </p>
      ),
    },
    {
      title: "How does GLEE Biotech Ltd. ensure product quality?",
      content: (
        <p>
          GLEE Biotech Ltd. is dedicated to maintaining high quality and compliance standards
          by adhering to strict quality assurance protocols and regulatory
          requirements throughout all stages of manufacturing and supply. Our
          products are certified with <b>WHO-GMP</b> and <b>ISO 9001:2015</b>. Our primary
          goal is to provide quality medicines to our esteemed medical community
          at affordable prices.
        </p>
      ),
    },
    {
      title: "How does GLEE Biotech Ltd. contribute to the healthcare ecosystem?",
      content: (
        <p>
          GLEE Biotech Ltd. supports the healthcare ecosystem by offering
          high-quality, reliable healthcare products. We have a diverse
          portfolio with quality products in <b>critical care, Gastroenterology,
          Oncology, and Virology.</b> 
        </p>
      ),
    },
    {
      title: "What sets GLEE Biotech Ltd. apart from its competitors?",
      content: (
        <p>
          GLEE Biotech Ltd. unique combination of extensive industry experience, a broad
          product portfolio, and a focused approach towards meaningful healthcare
          & strong pan-India presence, extensive distribution network catering
          to the needs of faster delivery when life is at stake, sets it apart
          from other companies in the pharmaceutical and healthcare space.
        </p>
      ),
    },
  ];

  return (
    <section className="relative bg-[#CFD7E4]">
      {/* Background visuals */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F488E]/5 via-transparent to-[#1F488E]/5"></div>
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1F488E]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#1F488E]/5 rounded-full filter blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-[#1F488E]/5 via-transparent to-[#1F488E]/5 rounded-full filter blur-3xl"></div>
      </div>

      {/* Content */}
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
                  <div className="pt-4">{item.content}</div>
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




