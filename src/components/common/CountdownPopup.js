import { useState, useEffect } from "react";

const CountdownPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(() => {
    const eventDate = new Date("2025-03-06T00:00:00").getTime();
    const now = new Date().getTime();
    return Math.max(Math.floor((eventDate - now) / 1000), 0);
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setFadeIn(true), 10);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  const formatTime = (seconds) => {
    if (seconds <= 0) return "Ongoing ⏳";

    const days = Math.floor(seconds / (24 * 60 * 60));
    const hours = Math.floor((seconds % (24 * 60 * 60)) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  const closePopup = () => {
    setFadeIn(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <>
      {isOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm transition-opacity duration-300 ${
            fadeIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white md:p-6 p-4 rounded-2xl shadow-2xl text-center relative w-[90%] max-w-md border border-gray-300 transform transition-all duration-300 ${
              fadeIn ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <button
              className="absolute top-2 right-3 text-gray-600 bg-white hover:text-gray-900 transition"
              onClick={closePopup}
            >
              ✖
            </button>
            <div className="flex justify-between items-center gap-4 mb-4">
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/FwEUA73pIY.jpg"
                alt="Glee Biotech Ltd."
                className="h-12 sm:h-10"
              />
              <img
                src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/AiqrHIBvOY.png"
                alt="ISCCM 2025"
                className="h-12 sm:h-10"
              />
            </div>

            <h2 className="text-2xl font-bold text-gray-800">
              🚀 Countdown Alert 🚀
              <br /> {formatTime(timeLeft)}
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              The excitement is building as <strong>Glee Biotech Ltd.</strong>{" "}
              welcomes you to <strong>STALL SP-3</strong> at
              <strong> ISCCM 2025</strong> in Kochi, Kerala!
            </p>

            <div className="mt-4 bg-blue-100 p-3 rounded-lg text-sm sm:text-base">
              📅{" "}
              <strong>
                {timeLeft <= 0 ? "Ongoing ⏳" : "6th - 9th March 2025"}
              </strong>
              <br />
              📍 <strong>Kochi, Kerala</strong>
            </div>

            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Join us to explore{" "}
              <strong>
                cutting-edge innovations in critical care medicine
              </strong>{" "}
              and network with industry leaders.
            </p>

            <p className="mt-2 text-blue-600 font-semibold text-sm sm:text-base">
              Let's push the boundaries of healthcare together! 🚑👨‍⚕️
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CountdownPopup;
