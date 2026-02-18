import { CalendarDays } from "lucide-react";
import { useState, useEffect } from "react";

const CountdownPopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (!isOpen) return;

    if (timeLeft === 0) {
      setIsOpen(false);
      return;
    }

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft, isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl p-6 sm:p-8 text-center animate-scaleIn">

        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-lg font-bold flex items-center justify-center transition"
        >
          ✕
        </button>

        {/* Logos */}
        <div className="flex justify-between items-center mb-6 gap-3">
          <img
            src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/FwEUA73pIY.jpg"
            alt="Glee Biotech Ltd."
            className="h-10 sm:h-12 object-contain"
          />
          <img
            src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/AiqrHIBvOY.png"
            alt="ISCCM 2026"
            className="h-10 sm:h-12 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-sm  font-bold text-gray-900 mb-3">
          🎉 The countdown to ISCCM - Criticare 2026 is ON
        </h2>

        {/* Sub Text */}
        <p className="text-sm sm:text-base text-gray-700 mb-4">
          <strong>Glee Biotech Ltd.</strong> is proud Academic Partner <br />
          <strong>@ ISCCM 2026</strong>
        </p>

        {/* Location */}
        <div className="bg-gradient-to-br from-cyan-100 to-green-100 text-green-800 font-semibold text-sm rounded-xl py-3 px-4 mb-4">
          📍 Chennai Trade Centre, Chennai
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">
          Welcome all Delegates
        </p>
        <p className="flex items-center justify-center gap-3 text-sm sm:text-base text-gray-700 font-medium mb-4">

          {/* Date with Icon */}
          <span className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4 text-blue-600" />
            27th Feb – 1st March 2026
          </span>

          {/* Divider */}
          <span className="text-gray-400">|</span>

          {/* Stall */}
          <span className="text-gray-800 font-semibold">
            @STALL 9 & 10
          </span>

        </p>

        {/* Countdown Badge */}
        <div className="inline-block bg-gray-900 text-white text-xs sm:text-sm px-4 py-2 rounded-full">
          Closing in {timeLeft}s
        </div>
      </div>
    </div>
  );
};

export default CountdownPopup;
