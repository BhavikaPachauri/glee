import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { WebLogo } from "../Icons";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isMenuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isMenuOpen]);

  const renderNavLink = (path, label) => (
    <li className="relative group">
      <Link
        to={path}
        className={`text-[15px] text-black flex items-center transition-all duration-300 relative 
          ${isActive(path) ? "after:right-0" : "after:right-full"} 
          after:absolute after:transition-all after:duration-300 after:h-1 after:rounded-[4px] 
          after:bg-gradient-to-r after:from-[#6aaeca] after:via-[#1F488E] after:to-[#727272] after:left-0 
          hover:after:right-0 after:-bottom-1`}
      >
        {label}
      </Link>
    </li>
  );

  return (
    <div className="shadow-xl sticky top-0 z-20 bg-white">
      <nav className="flex justify-between items-center xl:max-w-[1364px] mx-auto p-3">
        <a
          href="/"
          aria-label="Website Logo"
          className="text-base flex items-center text-[#A3A3A3] font-bold"
        >
          <WebLogo />
          <span className="max-sm:hidden font-bold text-[#9e9d9d]">
            Glee<span className="text-[#1F488E] mx-[3px]">Biotech</span>Ltd.
           
          </span>
        </a>

        <ul
          className={`flex xl:gap-[57px] gap-[40px] transition-all duration-300 ease-linear bg-white
            ${isMenuOpen ? "left-0 z-30" : "left-[-100%]"} 
            max-lg:w-full max-lg:fixed max-lg:top-0 max-lg:min-h-screen 
            max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center bottom-0`}
        >
          {/* {renderNavLink("/", "Home")} */}
          {renderNavLink("/aboutus", "About Us")}
          {renderNavLink("/products", "Products")}
          {renderNavLink("/contact", "Contact Us")}
          {/* {renderNavLink("/glee-products", "upload Products")} */}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:+91-124-4014-4675"
            className="max-sm:hidden relative inline-block px-8 py-3 bg-[#1F488E] text-white rounded-full font-semibold hover:bg-[#2C5BB8] transform hover:scale-[1.01] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Call Us
          </a>
          <div
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="w-[35px] h-[25px] relative z-50 flex flex-col justify-between lg:hidden cursor-pointer"
          >
            <span
              className={`transition-all duration-300 ease-linear rounded-3xl
                ${isMenuOpen ? "rotate-[48deg] translate-y-[23px]" : ""} 
                bg-[#002347] w-full h-[4px]`}
            ></span>
            <span
              className={`transition-all duration-300 ease-linear rounded-3xl 
                ${isMenuOpen ? "opacity-0" : "bg-[#002347] w-3/4 h-[4px]"}`}
            ></span>
            <span
              className={`transition-all duration-300 ease-linear rounded-3xl 
                ${isMenuOpen ? "rotate-[-50deg] translate-y-[50%]" : ""} 
                bg-[#002347] w-full h-[4px]`}
            ></span>
          </div>
        </div>

        <div
          className="h-[4px] bg-[#03317F] fixed top-[83px] left-0 right-0"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </nav>
    </div>
  );
};

export default NavBar;
