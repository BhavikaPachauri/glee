import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "8+",
    label: "Warehouses",
    desc: "Ensuring seamless storage and distribution."
  },
  {
    value: "1,000+",
    label: "Healthcare Clients",
    desc: "Trusting PDPL for reliable solutions."
  },
  {
    value: "25+",
    label: "Hospital Pharmacy Management",
    desc: "Enhancing patient care through streamlined services."
  },
  {
    value: "48,000+",
    label: "Product Range",
    desc: "Catering to critical healthcare needs and saving lives."
  }
];

const Credentials = () => (
  <section className="w-full bg-gray-100 lg:py-20 py-12">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-10">
        <h2 className="text-[#1F488E] text-3xl md:text-4xl font-bold mb-3">
          PDPL's Credentials
        </h2>
        <p className="text-[#59606C] text-lg max-w-2xl mx-auto">
          PDPL's extensive network and resources empower us to deliver excellence in healthcare solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative"
          >
            <div className="text-center p-6 hover:bg-[#FAF9FB] rounded-lg transition-colors duration-300 h-[200px] flex flex-col justify-center">
              <span className="block text-[#1F488E] text-5xl font-bold mb-3">
                {stat.value}
              </span>
              <span className="block text-[#1F488E] text-xl font-semibold mb-2">
                {stat.label}
              </span>
              <span className="block text-[#1F488E]/70 text-sm">
                {stat.desc}
              </span>
            </div>
            {idx !== stats.length - 1 && (
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-16 bg-[#1F488E]/10"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Credentials; 