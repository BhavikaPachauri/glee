import React from "react";
import "../common/Loader.css";

const Loader = () => {
  return (
    <div className="wrapper w-[150px] h-[60px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="circle w-[20px] h-[20px] absolute rounded-[50%] bg-black left-[15%]"></div>
      <div className="circle w-[20px] h-[20px] absolute rounded-[50%] bg-black left-[15%]"></div>
      <div className="circle w-[20px] h-[20px] absolute rounded-[50%] bg-black left-[15%]"></div>
      <div className="shadow w-[20px] h-[4px] rounded-[50%] bg-black absolute top-[62px] z-[-1] left-[15%] blur-[1px]"></div>
      <div className="shadow w-[20px] h-[4px] rounded-[50%] bg-black absolute top-[62px] z-[-1] left-[15%] blur-[1px]"></div>
      <div className="shadow w-[20px] h-[4px] rounded-[50%] bg-black absolute top-[62px] z-[-1] left-[15%] blur-[1px]"></div>
    </div>
  );
};

export default Loader;
