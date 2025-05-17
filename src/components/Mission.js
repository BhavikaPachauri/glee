import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mission = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      toast.success('Thank you for subscribing!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-gradient-to-b from-white to-[#FAF9FB] lg:py-20 py-12 relative overflow-hidden">
      <ToastContainer />
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#1F488E]/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1F488E]/5 rounded-full -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-[#1F488E] text-3xl md:text-4xl font-bold mb-1">
            Join Us in Our Mission
          </h2>
          <p className="text-[#59606C] text-lg max-w-2xl mx-auto">
            At Glee Biotech, we are more than just a pharmaceutical company – we
            are a partner in healthcare. Join us in our mission to improve lives
            and build a healthier tomorrow.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <div className="flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-xl border border-[#1F488E]/20 focus:border-[#1F488E] focus:ring-2 focus:ring-[#1F488E]/20 outline-none transition-all duration-300 text-[#59606C]"
              required
            />
          </div>
          <button
            type="submit"
            className="px-8 py-4 bg-[#1F488E] text-white rounded-xl font-semibold hover:bg-[#1F488E]/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Mission;
