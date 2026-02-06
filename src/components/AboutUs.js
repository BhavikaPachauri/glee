import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="bg-white lg:py-24 sm:py-16 py-12">
        <div className="xl:max-w-[1200px] mx-auto px-3">
          <h2
            className="text-[#10111A] lg:hidden md:text-[36px] text-[32px] uppercase font-bold leading-[120%] mb-6 lg:text-start text-center"
            data-aos="fade-left"
          >
            About Us
          </h2>
          <div className="flex flex-wrap lg:gap-16 gap-8 items-center">
            <div className=" flex lg:gap-8 gap-6 mx-auto">
              <div
                className="relative p-2 rounded-xl    md:mt-[50px] mt-[25px] "
             
              >
                <div className="relative  ">
                  <img
                    loading="lazy"
                    src="./img/bgAbout.svg"
                    alt="Product Image"
                    className="w-full h-full rounded-lg "
                  />
                </div>
              </div>
            
            </div>
            <div className="lg:w-[45%] w-full">
              <h2
                className="text-[#10111A] lg:flex hidden lg:text-[42px]  uppercase font-bold leading-[120%] mb-10 mt-10 lg:text-start text-center"
                data-aos="fade-left"
              >
                About Us
              </h2>
              <p
                className="text-[#59606C] text-[16px] md:text-[18px] leading-relaxed lg:text-justify text-gray-700 text-center mb-10"
                data-aos="fade-left"
              >
                Glee Biotech Ltd. is a rapidly growing pharmaceutical company with a clear vision to make a real impact in the  healthcare sector by delivering high-quality, reliable, and affordable healthcare products. The company has a strong backup support, which certifies extensive and well-organized distribution network support to ensure swift, nationwide reach serving hospitals, clinics, and healthcare providers across India.
              </p>
              <div className="lg:text-start text-center" data-aos="fade-left">
                <Link
                  to="/aboutus"
                  className="inline-block px-8 py-3 bg-[#1F488E] text-white rounded-full font-semibold hover:bg-[#2C5BB8] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
