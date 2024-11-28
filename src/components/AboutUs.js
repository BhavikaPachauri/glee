import React from 'react'
import MedicineInHand from '../assets/images/png/MedicineInhand.png'
import WomenWithMedicine from '../assets/images/png/WomenWithMedicine.png'

const AboutUs = () => {
    return (
        <><div className="max-lg:py-14">
            <div className="xl:max-w-[1019px] mx-auto px-3 lg:my-[74px]">
                <h2 className="text-[#1F488E] lg:text-[58px] md:text-[45px] sm:text-[38px] text-[35px] leading-[126%] mb-4 text-center">About Us</h2>
                <div className="flex flex-wrap-reverse lg:gap-0 gap-5 items-center">
                    <div className="lg:w-1/2 flex lg:gap-5 gap-3 mx-auto">
                        <div className="relative p-1.5 rounded-xl bg-gradient-border animate-gradient-border max-w-[280px] md:mt-[50px] mt-[25px]">
                            <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 via-blue-800 to-gray-400">
                                <img src={MedicineInHand} alt="Product Image" className="w-full h-auto rounded-lg scale-105" />
                            </div>
                        </div>
                        <div className="relative p-1.5 rounded-xl bg-gradient-border animate-gradient-border max-w-[280px] md:mb-[50px] mb-[25px]">
                            <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-400 via-blue-800 to-gray-400">
                                <img src={WomenWithMedicine} alt="Product Image" className="w-full h-auto rounded-lg scale-105" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[45%]">
                        <p className="text-[#59606C] text-[16px] lg:text-start text-center">M/s GLEE BIOTECH LTD (GLEE) is the visionary creation of its esteemed Promoters and a dedicated team, who collectively bring over 30 years of extensive experience in the Pharmaceutical Industry. At GLEE, our mission is to enhance and improve human lives by addressing medical needs with high-quality, meaningful healthcare products.
                        </p>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default AboutUs;