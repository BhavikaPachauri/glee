import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "../../store/slices/productSlice";

function LoaderBar() {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const animationDuration = 500;
    const frameRate = 160;
    const totalFrames = animationDuration / (1000 / frameRate);
    const increment = 100 / totalFrames;
    let currentCount = 0;

    const intervalId = setInterval(() => {
      currentCount += increment;
      const newValue = Math.min(Math.round(currentCount), 100);
      setCount(newValue);

      if (currentCount >= 100) {
        clearInterval(intervalId);
        setIsComplete(true);
      }
    }, 1000 / frameRate);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (isComplete) {
      setTimeout(() => {
        dispatch(getProduct());
      }, 400);
    }
  }, [isComplete, count, dispatch]);

  return (
    <div className="flex items-center justify-center flex-col">
      <div
        className="w-[159px] rounded-full overflow-hidden"
        style={{ height: "3px", background: "#000" }}
      >
        <div
          className="rounded-full"
          style={{
            width: `${count}%`,
            height: "100%",
            background: "#fff",
            transition: "width 0.5s",
          }}
        ></div>
      </div>
    </div>
  );
}

export default LoaderBar;
