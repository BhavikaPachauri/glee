import { CalendarDays } from "lucide-react";
import { useState, useEffect, useMemo } from "react";

const CountdownPopup = () => {
   const [isOpen, setIsOpen] = useState(false);

  // 🎯 Event Date
  const eventDate = useMemo(() => {
    return new Date("2026-02-27T00:00:00+05:30").getTime();
  }, []);

  // ⏳ Calculate Time
  const calculateTimeLeft = () => {
    const now = Date.now();
    const difference = eventDate - now;

    if (difference <= 0) return null;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  // ✅ Check sessionStorage (Only show once per session)
  useEffect(() => {
    const hasShown = sessionStorage.getItem("countdownShown");

    if (!hasShown) {
      setIsOpen(true);
      sessionStorage.setItem("countdownShown", "true");
    }
  }, []);

  // ⏱ Countdown Interval
  useEffect(() => {
    if (!isOpen) return;

    const interval = setInterval(() => {
      const updatedTime = calculateTimeLeft();
      setTimeLeft(updatedTime);

      if (!updatedTime) {
        clearInterval(interval);
        setIsOpen(false);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [eventDate, isOpen]);

  // 🔥 Auto close after 2 seconds
  useEffect(() => {
    if (!isOpen) return;

    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  if (!isOpen || !timeLeft) return null;


  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold flex items-center justify-center transition"
        >
          ✕
        </button>

        {/* Logos */}
        <div className="flex justify-between items-center mb-6 gap-3">
          <img
            src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/FwEUA73pIY.jpg"
            alt="Glee Biotech Ltd."
            className="h-10 object-contain"
          />
          <img
            src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/AiqrHIBvOY.png"
            alt="ISCCM 2026"
            className="h-10 object-contain"
          />
        </div>

        {/* Heading */}
        <h2 className="text-base font-semibold text-gray-900 mb-3">
           🎉 The countdown to ISCCM - Criticare 2026 is ON
        </h2>

        {/* Partner Info */}
          {/* Sub Text */}
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          <strong>Glee Biotech Ltd.</strong> is proud Academic Partner at <br />
          <strong> ISCCM 2026</strong>
        </p>


        {/* Location */}
        <div className="bg-gradient-to-r from-cyan-100 to-emerald-100 text-emerald-800 text-sm font-medium rounded-xl py-2 px-4 mb-5">
          📍 Chennai Trade Centre, Chennai
        </div>

          {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Welcome all Delegates
        </p>

        {/* Date & Stall */}
        <div className="flex items-center justify-center gap-3 text-sm text-gray-700 font-medium">
          <span className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-blue-600" />
            27 Feb – 1 Mar 2026
          </span>
          <span className="text-gray-300">|</span>
          <span className="font-semibold text-gray-800">
           at Stall 9 & 10
          </span>
        </div>

         {/* Countdown Timer */}
        <div className="grid grid-cols-4 gap-3 mb-6 mt-5">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="text-black py-2 border border-gray-100 shadow-lg rounded-lg "
            >
              <div className="text-2xl font-bold tracking-widest">
                {String(value).padStart(2, "0")}
              </div>
              <div className="text-[10px] uppercase text-gray-400 mt-1">
                {unit}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CountdownPopup;
