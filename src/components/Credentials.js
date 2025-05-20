import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    value: "8+",
    label: "Warehouses",
    desc: "Ensuring seamless storage and distribution.",
    icon: "🏭"
  },
  {
    value: "1,000+",
    label: "Healthcare Clients",
    desc: "Trusting PDPL for reliable solutions.",
    icon: "👥"
  },
  {
    value: "25+",
    label: "Hospital Pharmacy Management",
    desc: "Enhancing patient care through streamlined services.",
    icon: "🏥"
  },
  {
    value: "48,000+",
    label: "Product Range",
    desc: "Catering to critical healthcare needs and saving lives.",
    icon: "📦"
  }
];

const Credentials = () => (
  <section className="w-full bg-gray-100 lg:py-20 sm:py-16 py-12">
    <div className="lg:max-w-[1280px] mx-auto px-3">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center sm:mb-12 mb-8"
      >
        <h2 className="lg:text-[42px] md:text-[36px] text-[32px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1F488E] to-[#2D6BC4] mb-2">
          PDPL's Credentials
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
          PDPL's extensive network and resources empower us to deliver excellence in healthcare solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            whileHover={{ y: -5 }}
            className="group cursor-pointer"
          >
            <div className="bg-white rounded-2xl p-2 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
              <div className="text-center">
                <span className="text-4xl sm:mb-4 mb-2 block transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </span>
                <motion.span 
                  className="block sm:text-5xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#1F488E] to-[#2D6BC4] sm:mb-3 mb-2"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 + 0.2 }}
                >
                  {stat.value}
                </motion.span>
                <h3 className="sm:text-xl text-base font-semibold text-gray-800 sm:mb-2 mb-1">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Credentials; 