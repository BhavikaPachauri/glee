"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineDoubleArrow } from "react-icons/md";

// Variants for staggered list
const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // har point ke beech delay
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

const strengths = [
  {
    title: "Our Legacy",
    description: (
      <>
        Glee Biotech has strong backing from our parent company,{" "}
        <a
          href="https://plusdistributions.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          PDPL (Plus Distribution Pvt. Ltd.)
        </a>
        , a trusted and leading name in the pharmaceutical distribution
        industry in India. With over 32 years of experience, PDPL has been
        delivering quality and affordable products since its inception in 1993.
      </>
    ),
  },
  {
    title: "Our Expertise",
    description: (
      <motion.ul
        className="space-y-2 text-[#1F488E]/80"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          "Legacy of more than 30 years",
          "Associated with major hospital chains",
          "Owned Pharmacies in 37 Hospitals",
          "Catering more than 1000 ICU beds",
          "WHO & GMP certified Products",
          "Assured availability of our critical care range with 5 dedicated CSA PAN India",
          
        ].map((point, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="flex items-start gap-2"
          >
            <MdOutlineDoubleArrow className="text-[#1F488E]" size={20} />
            {point}
          </motion.li>
        ))}
      </motion.ul>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const StrengthCard = ({ title, description }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="cursor-pointer bg-white rounded-2xl sm:p-8 p-4 shadow-xl border border-[#1F488E]/10 hover:-translate-y-1 transition-all duration-300"
  >
    <div className="flex items-center gap-4 sm:mb-6 mb-3">
      <div className="w-14 h-14 rounded-full bg-[#1F488E]/10 flex items-center justify-center text-[#1F488E] text-xl font-bold">
        {title[0]}
      </div>
      <h3 className="text-[#1F488E] text-2xl font-bold">{title}</h3>
    </div>
    <div className="text-[#1F488E]/80 text-lg leading-relaxed text-justify">
      {description}
    </div>
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

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {strengths.map((strength, index) => (
          <StrengthCard key={index} {...strength} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default Strengths;
