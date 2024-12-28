import React from "react";

const Maintenance = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto p-6 shadow-lg rounded-lg bg-white">
       
        <div className="relative w-full max-w-md mb-8">
          <img
            src="https://i.ibb.co/301jytm/maintenance-system-illustration-vector.jpg"
            alt="maintenance"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

       
        <h1 className="text-4xl font-extrabold text-blue-800 mb-4">
          Website is Under Maintenance
        </h1>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          We are currently performing scheduled maintenance to improve your
          experience. We will be back shortly. Thank you for your patience and
          understanding.
        </p>

    
        <button
          className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 rounded-full shadow-lg transition-transform transform hover:scale-105"
          onClick={() => alert("Thank you for your patience!")}
        >
          Enjoy It
        </button>
      </div>
    </div>
  );
};

export default Maintenance;
