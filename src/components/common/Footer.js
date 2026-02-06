import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CallIcon, EmailIcon } from "../Icons";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const d = new Date();
    setYear(d.getFullYear());
  }, []);

  return (
    <>
      <div className="animate-background relative overflow-hidden pt-14">
        <div className="xl:max-w-[1370px] mx-auto px-3">
          <div className="flex flex-wrap justify-between border-b pb-11 lg:gap-0 gap-12">

            {/* LOGO */}
            <div className="lg:w-[25%] md:w-[30%] w-full flex flex-col gap-5 max-lg:order-1">
              <a
                href="/"
                className="text-white text-4xl font-bold leading-none text-center"
              >
                <img
                  loading="lazy"
                  src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ZajgnpYEp0.webp"
                  alt="GleeLogoSmall"
                  className="max-w-[133px] lg:block hidden"
                />
                <img
                  loading="lazy"
                  src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/vhb6buV8Oq.webp"
                  alt="GleeLogoSmall"
                  className="sm:max-w-[300px] max-w-[220px] lg:hidden block"
                />
              </a>

              <p className="text-white text-[15px] lg:pe-28 mt-[-40px]">
                <div className="flex items-center justify-center text-white">
                  <h3 className="text-xl font-medium ff_shrikhand text-nowrap">
                    Life to Lives …
                  </h3>
                  <div className="w-20 h-20 flex items-center justify-center text-4xl">
                    <img
                      src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/Y6Vkdsrk5I.png"
                      alt="Service Icon"
                      className="mt-2"
                    />
                  </div>
                </div>
              </p>

              <div className="gap-6 lg:flex hidden">
                <a
                  href="https://www.linkedin.com/company/glee-biotech/?viewAsMember=true"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/DOTMGYA1eh.webp"
                    alt="LinkedIn"
                    width={29}
                    height={29}
                    className="transition-all duration-500 hover:-translate-y-2"
                  />
                </a>
                <a
                  href="mailto:info@gleebiotech.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    loading="lazy"
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/FdxrYWtXRA.webp"
                    alt="MailIcon"
                    width={29}
                    height={29}
                    className="transition-all duration-500 hover:-translate-y-2"
                  />
                </a>
                <a href="tel:+911244014675">
                  <img
                    loading="lazy"
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/v7IfkPAIci.webp"
                    alt="PhoneIcon"
                    width={29}
                    height={29}
                    className="transition-all duration-500 hover:-translate-y-2"
                  />
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div className="md:w-[25%] w-[41%] max-lg:order-2">
              <ul className="flex flex-col sm:gap-[30px] gap-5">
                <li>
                  <span className="font-semibold text-[#91B7C7] text-[20px] pb-1.5">
                    QUICK LINKS
                  </span>
                </li>
                <li><Link to="/" className="text-[#F3F4F6] text-[15px]">Home</Link></li>
                <li><Link to="/aboutus" className="text-[#F3F4F6] text-[15px]">About</Link></li>
                <li><Link to="/products" className="text-[#F3F4F6] text-[15px]">Products</Link></li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div className="md:w-[25%] w-[40%] max-lg:order-3">
              <ul className="flex flex-col sm:gap-[30px] gap-5">
                <li>
                  <span className="font-semibold text-[#91B7C7] text-[20px] pb-1.5">
                    SUPPORT
                  </span>
                </li>
                <li><Link to="/faq" className="text-[#F3F4F6] text-[15px]">FAQs</Link></li>
                <li><Link to="/contact" className="text-[#F3F4F6] text-[15px]">Get in touch</Link></li>
                <li>
                  <a href="mailto:info@gleebiotech.com" className="text-[#F3F4F6] text-[15px]">
                    Join Us
                  </a>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="lg:w-[25%] sm:w-[80%] w-full flex flex-col justify-between max-lg:order-4">
              <ul className="flex flex-col sm:gap-[23px] gap-4">
                <li className="font-semibold text-[#91B7C7] text-[20px]">CONTACT US</li>
                <li>
                  <a href="tel:+911244014675" className="text-white text-[15px] flex gap-4 items-start">
                    <CallIcon /> +911244014675
                  </a>
                </li>
                <li>
                  <a href="mailto:info@gleebiotech.com" className="text-white text-[15px] flex gap-4 items-start">
                    <EmailIcon /> info@gleebiotech.com
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-[14px] flex gap-4 items-start"
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.google.com/maps/place/Glee+Biotech+LTD/@28.4409584,77.0370194,17z/data=!3m2!4b1!5s0x390d1876c5f94b7f:0xd48f8b6e1eae4d79!4m6!3m5!1s0x390d19b6ea67792d:0xe28bd8ef251ecf0f!8m2!3d28.4409584!4d77.0395943!16s%2Fg%2F11pkd43f64?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  >
                    <img src="./img/location.svg" alt="Location Icon"/>
                    315, 3rd Floor, SAS Towers, Medicity, Sector 38, Gurugram,
                    Haryana 122001
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className="flex md:flex-row flex-col md:justify-between py-5">
            <p className="text-center text-white text-[12px] sm:text-[15px]">
              Copyright © {year} Glee Biotech Limited. All rights reserved
            </p>
            <p className="text-center text-white text-[12px] sm:text-[15px]">
              <Link to="/terms">Terms & Conditions</Link> | Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
