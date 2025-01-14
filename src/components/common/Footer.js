import React, { useState, useEffect } from "react";
import GleeLogo from "../../assets/images/webp/footerLogo.webp";
import GleeLogoSmall from "../../assets/images/webp/footer-logo.webp";
import PhoneIcon from "../../assets/images/webp/phone-call.webp";
import MailIcon from "../../assets/images/webp/email.webp";
import LinkedIn from "../../assets/images/webp/linkedin.webp";
import { Link } from "react-router-dom";
import { CallIcon, LocationIcon, EmailIcon } from "../Icons";

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const d = new Date();
    setYear(d.getFullYear());
  }, []);
  return (
    <>
      <div className="animate-background pt-14">
        <div className="xl:max-w-[1370px] mx-auto px-3">
          <div className="flex flex-wrap justify-between border-b pb-11 lg:gap-0 gap-12">
            <div className="lg:w-[25%] md:w-[30%] w-full flex flex-col gap-5 max-lg:order-1">
              <a
                href="#"
                className="text-white text-4xl font-bold leading-none text-center"
              >
                <img
                  src={GleeLogo}
                  alt="GleeLogoSmall"
                  className="max-w-[133px] lg:block hidden"
                />
                <img
                  src={GleeLogoSmall}
                  alt="GleeLogoSmall"
                  className="sm:max-w-[300px] max-w-[220px] lg:hidden block"
                />
              </a>
              <p className="text-white text-[15px] lg:pe-10">
                GLEE is committed to enhancing lives through quality healthcare
                products.
              </p>
              <div className="gap-6 lg:flex hidden">
                <a
                  href="https://www.linkedin.com/company/glee-biotech-ltd/?trk=ppro_cprof&originalSubdomain=ae"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={LinkedIn}
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
                    src={MailIcon}
                    alt="MailIcon"
                    width={29}
                    height={29}
                    className="transition-all duration-500 hover:-translate-y-2"
                  />
                </a>
                <a href="tel:+911244014675" target="_blank" rel="noreferrer">
                  <img
                    src={PhoneIcon}
                    alt="PhoneIcon"
                    width={29}
                    height={29}
                    className="transition-all duration-500 hover:-translate-y-2"
                  />
                </a>
              </div>
            </div>
            <div className="md:w-[25%] w-[41%] max-lg:order-2">
              <ul className="flex flex-col sm:gap-[30px] gap-5">
                <li>
                  <Link className="font-semibold text-[#91B7C7] text-[20px] pb-1.5">
                    QUICK LINKS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    {" "}
                    Home
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/aboutus"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    {" "}
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    {" "}
                    Products
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:w-[25%] w-[40%] max-lg:order-3">
              <ul className="flex flex-col sm:gap-[30px] gap-5">
                <li>
                  {" "}
                  <Link className="font-semibold text-[#91B7C7] text-[20px] pb-1.5">
                    SUPPORT
                  </Link>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    {" "}
                    FAQs
                  </a>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/contact"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    Get in touch
                  </Link>
                </li>
                <li>
                  <a
                    href="mailto:info@gleebiotech.com"
                    target="_blank"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    {" "}
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
            <div className="lg:w-[25%] sm:w-[80%] w-full flex flex-col justify-between max-lg:order-4">
              <ul className="flex flex-col sm:gap-[23px] gap-4">
                <li className="font-semibold text-[#91B7C7] text-[20px] sm:pb-1.5 text-nowrap">
                  CONTACT INFORMATION
                </li>
                <li className="gap-6 lg:hidden flex">
                  <a
                    href="https://www.linkedin.com/company/glee-biotech-ltd/?trk=ppro_cprof&originalSubdomain=ae"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={LinkedIn}
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
                      src={MailIcon}
                      alt="MailIcon"
                      width={29}
                      height={29}
                      className="transition-all duration-500 hover:-translate-y-2"
                    />
                  </a>
                  <a href="tel:+911244014675" target="_blank" rel="noreferrer">
                    <img
                      src={PhoneIcon}
                      alt="PhoneIcon"
                      width={29}
                      height={29}
                      className="transition-all duration-500 hover:-translate-y-2"
                    />
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-[15px] flex gap-2 items-start"
                    href="tel: +911244014675"
                  >
                    <CallIcon />
                    +911244014675
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@gleebiotech.com"
                    target="_blank"
                    className="text-white text-[15px] flex gap-2 items-start"
                  >
                    <EmailIcon />
                    info@gleebiotech.com
                  </a>
                </li>
                <li>
                  <a
                    className="text-white text-[15px] flex gap-2 items-start"
                    target="_blank"
                    href="https://www.google.com/maps/place/Glee+Biotech+LTD/@28.4409584,77.0370194,17z/data=!3m2!4b1!5s0x390d1876c5f94b7f:0xd48f8b6e1eae4d79!4m6!3m5!1s0x390d19b6ea67792d:0xe28bd8ef251ecf0f!8m2!3d28.4409584!4d77.0395943!16s%2Fg%2F11pkd43f64?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                  >
                    <LocationIcon />
                    315, 3rd Floor, SAS Towers, Medicity, Sector 38, Gurugram,
                    Haryana 122001
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center sm:text-[15px] text-[12px] text-white lg:py-11 py-7">
            Copyright © <span id="year_change">{year} </span>
            Glee Biotech limited All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
