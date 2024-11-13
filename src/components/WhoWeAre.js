import React from 'react'
import GradientLine from '../assets/images/png/GriadentLine.png'

const WhoWeAre = () => {
    return (
        <><div className="bg-history bg-no-repeat bg-cover relative">
            <img src={GradientLine} alt={GradientLine} className="absolute bottom-0 left-0 w-full -rotate-3" />
            <div className="xl:max-w-[1365px] mx-auto px-3 py-[120px]">
                <div className="flex flex-wrap items-center justify-between">
                    <div className="lg:w-[20%] w-full"
                    ><h2 className="text-black text-[34px] leading-[120%] lg:mb-4 mb-5 lg:text-start text-center">Who we are & history</h2></div>
                    <div className="lg:w-[34%] sm:w-[90%] mx-auto"><p className="text-[16px] text-[#59606C] leading-[125%] lg:mb-0 mb-5 lg:text-start text-center">GLEE BIOTECH LTD is a dedicated healthcare solutions provider focused on enhancing human well-being. Backed by over 30 years of industry experience, our expert team excels in sourcing and delivering high-quality healthcare products, including medicines, medical consumables, implants, PPE kits, food products, and medical furniture. Though not a manufacturer, we ensure product quality through trusted partnerships.</p></div>
                    <div className="lg:w-[33%] sm:w-[90%] mx-auto"><p className="text-[16px] text-[#59606C] leading-[125%] lg:text-start text-center">GLEE BIOTECH LTD was established by visionary Promoters and a seasoned team with decades of expertise in pharmaceuticals. Driven by a mission to improve human lives, we have grown into a trusted name in the healthcare industry, continuously dedicated to providing meaningful and reliable healthcare solutions.</p></div>
                </div>
            </div></div></>
    )
}

export default WhoWeAre