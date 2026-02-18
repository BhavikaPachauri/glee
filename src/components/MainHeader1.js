import React from "react";
import { Link } from "react-router-dom";

const MainHeader1 = () => {
  return (
    <div className="relative w-full h-[30vh] md:h-[55vh] lg:h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./img/bg.mp4" type="video/mp4" />
      </video>

    </div>
  );
};

export default MainHeader1;
