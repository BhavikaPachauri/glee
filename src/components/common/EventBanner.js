import React from "react";
import eventBannerImg from "../../assets/images/banner.png";

const EventBanner = () => {
  return (
    <div className="bg-[#1f488e]">
      <img
        src={eventBannerImg}
        alt="Event Banner"
        className="w-full md:h-screen-minus-83 h-auto"
      />
    </div>
  );
};

export default EventBanner;
