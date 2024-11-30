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
                "GLEE Biotech Ltd. is a forward-thinking pharmaceutical and healthcare company founded by experienced professionals with over 30 years of expertise in the pharmaceutical industry. The company focuses on improving human lives by addressing medical needs through the development and supply of genuine healthcare products.",
        },
        {
            title: "Where is GLEE Biotech located?",
            content:
                "GLEE Biotech operates in 315, 3rd Floor, SAS Towers, Medcity, Sector-38, Gurugram-122001, Haryana. For more details about our headquarters or operational facilities, please contact our support team or visit our website.",
        },
        {
            title: "How does GLEE Biotech ensure product quality?",
            content:
                "GLEE is committed to quality and compliance, following strict quality assurance protocols and regulatory standards in all stages of manufacturing, and supply.",
        },
        {
            title: "How does GLEE Biotech contribute to the healthcare ecosystem?",
            content:
                "GLEE Biotech supports the healthcare ecosystem by: Offering high-quality, reliable healthcare products. Collaborating with healthcare providers to improve patient care. Innovating through R&D to address emerging medical needs. Ensuring affordability and accessibility of its products.",
        },
        {
            title: "What sets GLEE Biotech apart from its competitors?",
            content:
                "GLEE's unique combination of extensive industry experience, a broad product portfolio, and a focus on meaningful healthcare innovation sets it apart from other companies in the pharmaceutical and healthcare space.",
        },
    ];

    return (
        <>
            <div className="px-3">
                <div className="max-w-[984px] mx-auto px-3 bg-[#EDEDED] my-[64px] py-7 md:shadow-[6px_6px_30px_0px_#00000026] rounded-[40px]">
                    <h2 className="text-[#1F488E] text-[34px] leading-[120%] mb-7 text-center" data-aos="fade-down">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-[793px] mx-auto w-full flex flex-col gap-[27px]">
                        {accordionData.map((item, index) => (
                            <div
                                className="md:px-6 px-3 rounded-[8px] bg-white"
                                key={index} data-aos="zoom-in-up"
                            >
                                <div
                                    className="flex justify-between items-center leading-[135%] cursor-pointer font-normal text-[#A9A9A9]"
                                    onClick={() => toggleAccordion(index)}
                                >
                                    <div
                                        className={`${openAccordion === index
                                            ? "text-[#1F488E] sm:pt-[21.5px] pt-4 pb-[12px]"
                                            : "text-[#686868] sm:py-[21.5px] py-4"
                                            } sm:text-[20px] text-[16px] font-medium leading-[24px] transition-all duration-300`}
                                    >
                                        {item.title}
                                    </div>
                                    <div
                                        className={`${openAccordion === index ? "rotate-180" : ""
                                            } transition-transform duration-300`}
                                    >
                                        <AccordianArrow />
                                    </div>

                                </div>
                                <div
                                    className={`accordion-content ${openAccordion === index ? "open pb-2 text-[#545454] sm:text-[18px] text-[16px]" : ""
                                        }`}
                                >
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: item.content,
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div></div></>
    );
};

export default Faqs;
