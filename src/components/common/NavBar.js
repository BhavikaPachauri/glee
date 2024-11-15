import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { WebLogo } from "../Icons";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isProductsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [isCareerDropdownOpen, setCareerDropdownOpen] = useState(false);

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

  const renderNavLink = (path, label, dropdownItems, isDropdownOpen, toggleDropdown) => (
    <div
      className="relative group"
      onMouseEnter={toggleDropdown}
      onMouseLeave={toggleDropdown}
    >
      <Link
        to={path}
        className={`text-[15px] text-black flex items-center transition-all duration-300 relative 
          ${isActive(path) ? "after:right-0" : "after:right-full"} 
          after:absolute after:transition-all after:duration-300 after:h-1 after:rounded-[4px] 
          after:bg-gradient-to-r after:from-[#6aaeca] after:via-[#1F488E] after:to-[#727272] after:left-0 
          hover:after:right-0 after:-bottom-1`}
      >
        {label}
        {dropdownItems && (
          <span
            className={`ml-2 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""
              }`}
          >
            ▼
          </span>
        )}
      </Link>
      {dropdownItems && (
        <ul
          className={`absolute z-30 top-full left-0 bg-white shadow-lg mt-2 py-2 w-48 rounded-md transition-all duration-300 ease-in-out overflow-hidden
      ${isDropdownOpen ? "opacity-100 max-h-[400px] translate-y-0" : "opacity-0 max-h-0 translate-y-4"}`}
          style={{ transitionProperty: "opacity, transform, max-height" }}
        >
          {dropdownItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}

    </div>
  );

  return (
    <div className="shadow-xl sticky top-0 z-20 bg-white">
      <nav className="flex justify-between items-center xl:max-w-[1364px] mx-auto px-3 sm:py-5 py-3">
        <a href="/" className="text-base flex items-center text-[#A3A3A3] font-bold">
          <WebLogo />
          <span className="max-sm:hidden">
            Glee<span className="text-[#1F488E] mx-[3px]">Biotech</span>Ltd.
          </span>
        </a>

        <ul
          className={`flex xl:gap-[57px] gap-[40px] transition-all duration-300 ease-linear bg-white
            ${isMenuOpen ? "left-0 z-30" : "left-[-100%]"} 
            max-lg:w-full max-lg:fixed max-lg:top-0 max-lg:min-h-screen 
            max-lg:flex max-lg:flex-col max-lg:items-center max-lg:justify-center bottom-0`}
        >
          {renderNavLink("/", "Home")}
          {renderNavLink("/aboutus", "About Us")}
          {renderNavLink(
            "/products",
            "Products",
            [
              { path: "/products/medicine", label: "Medicine" },
              { path: "/products/medicaldevices", label: "Medical Devices" },
              { path: "/products/laboratory", label: "Laboratory" },
            ],
            isProductsDropdownOpen,
            () => setProductsDropdownOpen(!isProductsDropdownOpen)
          )}
          {renderNavLink(
            "/career",
            "Career",
            [
              { path: "/career/job-openings", label: "Job Openings" },
              { path: "/career/internships", label: "Internships" },
              { path: "/career/benefits", label: "Benefits" },
            ],
            isCareerDropdownOpen,
            () => setCareerDropdownOpen(!isCareerDropdownOpen)
          )}
          {renderNavLink("/contact", "Contact Us")}
        </ul>

        <div className="flex items-center gap-3">
          <a href="tel:911244014675" className="max-sm:hidden relative inline-block text-white text-[15px] py-[9.4px] px-[21.85px] leading-[18.75px] rounded-full text-lg
                       bg-gradient-to-r from-[#6aaeca] via-[#1F488E] to-[#727272] bg-[length:200%_200%] bg-left transition-all duration-500 ease-out
                       hover:bg-right">
            0124-4013-4675
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
          className="h-[4px] bg-gradient-to-r from-transparent to-transparent fixed top-[105px] left-0 right-0"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </nav>
    </div>
  );
};

export default NavBar;
