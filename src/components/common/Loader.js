import React from "react";
import Preloader from "../../assets/images/webp/footerLogo.webp";
import LoaderBar from "./LoaderBar";

const Loader = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col gap-5 justify-center items-center fixed bg-[#1f488e]">
        <img src={Preloader} alt="Loader" className="max-w-[110px] w-full" />
        <LoaderBar />
      </div>
    </>
  );
};

export default Loader;
