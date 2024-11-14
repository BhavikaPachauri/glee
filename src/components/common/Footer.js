import React, { useState, useEffect } from "react";
import GleeLogo from "../../assets/images/png/footerLogo.png";
import PhoneIcon from "../../assets/images/png/phone-call.png";
import MailIcon from "../../assets/images/png/email.png";
import LinkedIn from "../../assets/images/png/linkedin.png";
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
                    <div className="flex flex-wrap lg:flex-row border-b pb-11">
                        <div className="lg:w-[25%] flex flex-col justify-between">
                            <a
                                href="#"
                                className="text-white text-4xl font-bold leading-none text-center"
                            >
                                <img src={GleeLogo} className="max-w-[133px]" />
                            </a>
                            <div className="flex gap-6">
                                <a
                                    href="https://www.linkedin.com/company/glee-biotech-ltd/?trk=ppro_cprof&originalSubdomain=ae"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img src={LinkedIn} alt="LinkedIn" width={29} height={29} />
                                </a>
                                <a
                                    href="mailto:info@gleebiotech.com"
                                    target="_blank"
                                    rel="noreferrer"
                                ><img src={MailIcon} alt="MailIcon" width={29} height={29} />
                                </a>
                                <a href="tel:+911244014675" target="_blank" rel="noreferrer">
                                    <img src={PhoneIcon} alt="PhoneIcon" width={29} height={29} />
                                </a>
                            </div>
                        </div>
                        <div className="lg:w-[25%]">
                            <ul className="flex flex-col gap-[30px]">
                                <li><Link
                                    className="font-semibold text-[#91B7C7] text-[20px] pb-1.5"
                                >
                                    ABOUT GLEE
                                </Link></li>
                                <li><Link
                                    to="/"
                                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                                >
                                    {" "}
                                    Home
                                </Link></li>
                                <li> <Link
                                    to="/"
                                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                                >
                                    {" "}
                                    Get in touch
                                </Link></li>
                                <li><Link
                                    to="/"
                                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                                >
                                    {" "}
                                    FAQs
                                </Link></li>

                            </ul>
                        </div>
                        <div className="lg:w-[25%]">
                            <ul className="flex flex-col gap-[30px]">
                                <li> <Link
                                    className="font-semibold text-[#91B7C7] text-[20px] pb-1.5"
                                >
                                    SUPPORT
                                </Link></li>
                                <li><Link
                                    to="/"
                                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                                >
                                    {" "}
                                    Security
                                </Link></li>
                                <li> <Link
                                    to="/"
                                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                                >
                                    {" "}
                                    Privacy
                                </Link></li>
                                <li><Link
                                    to="/"
                                    className="text-[#F3F4F6] text-[15px] after:w-0 after:h-[2px] after:bg-white after:absolute relative after:left-0 after:bottom-[-2px] hover:after:w-full after:duration-500 after:ease-in-out"
                                >
                                    {" "}
                                    News
                                </Link></li>

                            </ul>
                        </div>
                        <div className="lg:w-[25%] flex flex-col justify-between">
                            <ul className="flex flex-col gap-[23px]">
                                <p className="font-semibold text-[#91B7C7] text-[20px] pb-1.5">
                                    NOT QUITE READY FOR GLEE?
                                </p>
                                <p className="font-medium text-white text-[20px]">
                                    Subscribe Us.
                                </p>
                                <p className="text-white text-[15px]">
                                    Get the latest updates and Stay tuned.
                                </p>
                                <div class="flex items-center bg-[#F3F4F6] rounded-[3px] w-full">
                                    <input
                                        type="email"
                                        placeholder="E-mail address"
                                        class="bg-gray-100 text-gray-600 text-[12px] placeholder-[#9DA3AE] px-4 py-1.5 rounded-l-full focus:outline-none w-full"
                                    />
                                    <button
                                        class="text-[#1F488E] hover:text-white hover:bg-[#1F488E] transition-all duration-300 ease-linear bg-white font-semibold text-sm px-1.5 py-2 rounded-[3px]"
                                    >
                                        Subscribe
                                    </button>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center text-[15px] text-white py-11">
                        Copyright © <span id="year_change">{year} </span>
                        Glee Biotech limited All rights reserved
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
