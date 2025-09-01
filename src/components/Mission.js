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
    <section className="bg-whitelg:py-20 sm:py-16 py-12">
      <ToastContainer />
      <div className="lg:max-w-[1280px] mx-auto px-3 relative">
        <div className="text-center mb-12">
          <h2 className="text-[#1F488E] lg:text-[42px] md:text-[36px] text-[32px] tracking-tight font-bold mb-1">
            Join Us in Our Mission
          </h2>
          <p className="text-[#59606C] text-lg max-w-2xl mx-auto">
            At Glee Biotech Ltd. , we are more than just a pharmaceutical company – we
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
              className="w-full px-6 py-4 rounded-full border border-[#1F488E]/20 focus:border-[#1F488E] focus:ring-2 focus:ring-[#1F488E]/20 outline-none transition-all duration-300 text-[#59606C]"
              required
            />
          </div>
          <button
            type="submit"
            className="inline-block px-8 py-3 bg-[#1F488E] text-white rounded-full font-semibold hover:bg-[#2C5BB8] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Mission;
