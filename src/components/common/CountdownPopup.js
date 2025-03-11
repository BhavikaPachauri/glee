import { useState, useEffect } from "react";

const CountdownPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);
  const [isEventOver, setIsEventOver] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
      setTimeout(() => setFadeIn(true), 10);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

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
              🎉 Event Completed! 🎉
            </h2>

            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              <strong>Glee Biotech Ltd.</strong> was proud to be a{" "}
              <strong>partner</strong> at <strong>ISCCM 2025</strong> in Kochi, Kerala! 
            </p>

            <div className="mt-4 bg-green-100 p-3 rounded-lg text-sm sm:text-base">
              ✅ <strong>Event Successfully Concluded</strong>
              <br />
              📍 <strong>Kochi, Kerala</strong>
            </div>

            <p className="mt-4 text-gray-600 text-sm sm:text-base">
              Thank you all Delegates who visited <strong>STALL SP-3</strong> and engaged with us. 
              We appreciate your support in advancing <strong>critical care medicine</strong>! 🚀
            </p>

            <p className="mt-2 text-blue-600 font-semibold text-sm sm:text-base">
              Stay tuned for our upcoming innovations! 🚑👨‍⚕️
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CountdownPopup;
