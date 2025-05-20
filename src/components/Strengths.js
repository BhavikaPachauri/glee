import React from "react";
import { motion } from "framer-motion";

const strengths = [
  {
    title: "Our Legacy",
    description: (
      <>
        "Glee Biotech has strong backing from our parent company,{" "}
        <a
          href="https://plusdistributions.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          PDPL (Plus Distribution Pvt. Ltd.)
        </a>
        , a trusted and leading name in the pharmaceutical distribution industry
        in India. With over 32 years of experience, PDPL has been delivering
        healthy and empowering lives since its establishment in 1993."
      </>
    ),
    icon: (
      <svg
        className="w-6 h-6 text-[#1F488E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Our Expertise",
    description:
      "PDPL is known for its excellence in delivering high-quality pharmaceutical products nationwide. With their solid support, Glee Biotech benefits from a robust supply chain, extensive market reach, and a strong foundation in the healthcare sector. This partnership allows us to focus on innovation and growth while ensuring our products reach healthcare providers and patients efficiently and reliably.",
    icon: (
      <svg
        className="w-6 h-6 text-[#1F488E]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
];

const StrengthCard = ({ title, description, icon, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="cursor-pointer bg-white rounded-2xl sm:p-8 p-4 shadow-xl border border-[#1F488E]/10 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
  >
    <div className="flex items-center gap-4 sm:mb-6 mb-3">
      <div className="w-14 h-14 rounded-full bg-[#1F488E]/10 flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-[#1F488E] text-2xl font-bold">{title}</h3>
    </div>
    <p className="text-[#1F488E]/80 text-lg leading-relaxed text-justify">{description}</p>
  </motion.div>
);

const Strengths = () => (
  <section className="w-full bg-[#1F488E]/20 lg:py-20 sm:py-16 py-12 relative overflow-hidden">
    <div className="lg:max-w-[1280px] mx-auto px-3 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center md:mb-12 mb-8"
      >
        <h2 className="text-[#1F488E] lg:text-[42px] md:text-[36px] text-[32px] font-bold mb-1">
          Our Strengths
        </h2>
        <p className="text-[#59606C] text-lg max-w-2xl mx-auto">
          Building on a legacy of excellence and innovation in healthcare
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {strengths.map((strength, index) => (
          <StrengthCard key={strength.title} {...strength} index={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Strengths;
