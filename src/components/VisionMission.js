import React from 'react'

import GradientLine from '../assets/images/png/GriadentLine.png'

const VisionMission = () => {
  return (
    <>
      <div className="bg-[#EFEFEF] relative z-[1]">

        <img src={GradientLine} alt={GradientLine} className="absolute -top-12 left-0 w-full -rotate-3 h-[87px]" />
        <div className="xl:max-w-[1110px] mx-auto px-3 py-[120px]"></div>
      </div></>
  )
}

export default VisionMission;