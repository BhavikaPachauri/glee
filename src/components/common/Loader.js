import React from "react";
import LoaderBar from "./LoaderBar";

const Loader = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-5 justify-center items-center fixed bg-[#1f488e]">
        <img loading="lazy" 
          src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/ZajgnpYEp0.webp"
          alt="Loader"
          className="max-w-[110px] w-full"
        />
        <LoaderBar />
      </div>
    </>
  );
};

export default Loader;
