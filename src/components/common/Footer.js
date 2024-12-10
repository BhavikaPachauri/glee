import React, { useState, useEffect } from "react";
import GleeLogo from "../../assets/images/webp/footerLogo.webp";
import GleeLogoSmall from "../../assets/images/webp/footer-logo.webp";
import PhoneIcon from "../../assets/images/webp/phone-call.webp";
import MailIcon from "../../assets/images/webp/email.webp";
import LinkedIn from "../../assets/images/webp/linkedin.webp";
import { Link } from "react-router-dom";

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
            <div className="lg:w-[25%] md:w-[30%] w-full flex flex-col lg:gap-[62px] max-lg:order-1">
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
            <div className="md:w-[25%] w-[40%] max-lg:order-2">
              <ul className="flex flex-col sm:gap-[30px] gap-5">
                <li>
                  <Link className="font-semibold text-[#91B7C7] text-[20px] pb-1.5">
                    ABOUT GLEE
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
                    to="/contact"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    {" "}
                    Get in touch
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
                  <Link
                    to="/products"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    {" "}
                    Products
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    {" "}
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                  >
                    {" "}
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="lg:w-[25%] w-[80%] flex flex-col justify-between max-lg:order-4">
              <ul className="flex flex-col gap-[23px]">
                <li className="font-semibold text-[#91B7C7] text-[20px] pb-1.5 text-nowrap">
                  NOT QUITE READY FOR GLEE?
                </li>
                <li className="font-medium text-white text-[20px]">
                  Subscribe Us.
                </li>
                <li>
                  <div className="gap-6 lg:hidden flex">
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
                    <a
                      href="tel:+911244014675"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <img
                        src={PhoneIcon}
                        alt="PhoneIcon"
                        width={29}
                        height={29}
                        className="transition-all duration-500 hover:-translate-y-2"
                      />
                    </a>
                  </div>
                </li>
                <li className="text-white text-[15px]">
                  Get the latest updates and Stay tuned.
                </li>
                <li>
                  <div className="flex items-center bg-[#F3F4F6] rounded-[3px] w-full">
                    <input
                      type="email"
                      placeholder="E-mail address"
                      className="bg-gray-100 text-gray-600 text-[12px] placeholder-[#9DA3AE] px-4 py-1.5 rounded-l-full focus:outline-none w-full"
                    />
                    <button className="text-[#1F488E] hover:text-white hover:bg-[#1F488E] transition-all duration-300 ease-linear bg-white font-semibold text-sm px-1.5 py-2 rounded-[3px]">
                      Subscribe
                    </button>
                  </div>
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
