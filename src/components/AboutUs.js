import React from "react";
import TeamWork from '../assets/images/png/TeamPhoto.png'

const AboutUs = () => {
    return (
        <>
            <div className="bg-[#F3F4F6] -mt-2">
                <div className="xl:max-w-[854px] mx-auto px-3 w-full md:py-[73px] py-14">
                    <h1 className="font-medium lg:text-[58px] md:text-[45px] sm:text-[38px] text-[35px] text-black text-center leading-[125%] mb-4">
                        About Us
                    </h1>
                    <div className="flex flex-wrap-reverse items-center justify-between md:gap-0 gap-6">
                        <div className="md:w-[43.5%] mx-auto">
                            {" "}
                            <img src={TeamWork} alt="TeamWork" width={360}/>
                        </div>
                        <div className="lg:w-[49%] md:w-[50%]">
                            <p className="text-[#59606C] text-base md:px-0 sm:px-4 md:text-start text-center"> M/s GLEE BIOTECH LTD (GLEE) is the visionary creation of its
                                esteemed Promoters and a dedicated team, who collectively bring
                                over 30 years of extensive experience in the Pharmaceutical
                                Industry. At GLEE, our mission is to enhance and improve human
                                lives by addressing medical needs with high-quality, meaningful
                                healthcare products.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
