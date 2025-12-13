"use client";
import React from "react";
import { motion } from "framer-motion";
import { MdOutlineDoubleArrow } from "react-icons/md";
import { FaCircle } from "react-icons/fa6";

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
    img:"./img/legacy.svg",
    description: (
      <motion.ul
        className="space-y-2 text-[#1F488E]/80"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          "Legacy of more than 30 years.",
          "Established in 2015 with 30+ years of combined pharma expertise.",
          "Large warehousing & production capacity for wide distribution.",
          "Trusted by major hospital groups (Park, Yatharth, Medeor, Jaipur Golden, etc.).",
         
          
          
        ].map((point, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="flex items-start gap-2"
          >
            <FaCircle  className="text-[#1F488E] mt-3 w-1 h-1 flex-shrink-0" />
          


            {point}
          </motion.li>
        ))}
      </motion.ul>
    ),
  },
  {
    title: "Our Expertise",
    img:"./img/expert.svg",
    description: (
      <motion.ul
        className="space-y-2 text-[#1F488E]/80"
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          "Associated with major hospital chains.",
          "Owned Pharmacies in 37+ Hospitals.",
          "Catering to more than 1000+ ICU beds.",
          (<p><b>WHO & GMP</b> certified Products.</p>),
           "Focus on high-quality, regulatory compliance.",
          "Strong presence in critical care, anesthesia, antibiotics, gastro, cardio, and neuro segments.",
          "Assured availability of our critical  care range with  dedicated CSA PAN India.",
          
        ].map((point, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            className="flex items-start gap-2"
          >
            <FaCircle  className="text-[#1F488E] mt-3 w-1 h-1 flex-shrink-0" />
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

const StrengthCard = ({img, title, description }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 120 }}
    className="cursor-pointer bg-white rounded-2xl sm:p-6 p-4 shadow-xl border-2 border-[#C0DDFF] hover:-translate-y-1 transition-all duration-300"
  >
    <div className="flex items-center gap-4 sm:mb-6 mb-3">
      <div className="w-12 h-12  bg-[#F4F4F4] rounded-md flex items-center justify-center text-[#1F488E] text-xl font-bold">
        <img src={img} width={20}/>
      </div>
    </div>
      <h3 className="text-[#1F488E] text-lg font-bold  ">{title}</h3>
    <div className="text-black text-[16px] leading-relaxed text-justify">
      {description}
    </div>
  </motion.div>
);

const Strengths = () => (
  <section className="w-full bg-[#E5EFFF] lg:py-20 sm:py-16 py-12 relative overflow-hidden">
    <div className="lg:max-w-[1280px] mx-auto px-3 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center md:mb-12 mb-8"
      >
        <h2 className="text-[#10111A]  text-[30px]  font-bold mb-1">
          Our Strengths
        </h2>
        <p className="text-[#59606C] text-lg max-w-2xl mx-auto">
          Building on a legacy of excellence  in healthcare
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
