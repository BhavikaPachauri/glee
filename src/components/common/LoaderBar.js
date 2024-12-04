import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProduct, getProduct } from "../../store/slices/productSlice";
function LoaderBar() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const animationDuration = 500;
    const frameRate = 160;
    const totalFrames = animationDuration / (1000 / frameRate);
    const increment = 100 / totalFrames;
    let currentCount = 0;

    const intervalId = setInterval(() => {
      if (currentCount >= 100) {
        clearInterval(intervalId);
      } else {
        currentCount += increment;
        const newValue = Math.min(Math.round(currentCount), 100);
        setCount(newValue);
      }
    }, 1000 / frameRate);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    if (count === 100) {
      console.log(count);
      dispatch(getProduct());
    }
  }, [count, dispatch]);

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
