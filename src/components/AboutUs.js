import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <div className="lg:py-24 sm:py-16 py-12">
        <div className="xl:max-w-[1200px] mx-auto px-3">
          <h2
            className="text-[#1F488E] lg:hidden md:text-[36px] text-[32px] font-bold leading-[120%] mb-6 lg:text-start text-center"
            data-aos="fade-left"
          >
            About Us
          </h2>
          <div className="flex flex-wrap lg:gap-8 gap-8 items-center">
            <div className="lg:w-1/2 flex lg:gap-8 gap-6 mx-auto">
              <div
                className="relative p-2 rounded-xl bg-gradient-border animate-gradient-border max-w-[280px] md:mt-[50px] mt-[25px] transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-down"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#1F488E] via-[#2C5BB8] to-[#1F488E] shadow-xl">
                  <img
                    loading="lazy"
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/5URa2f2eNL.webp"
                    alt="Product Image"
                    className="w-full h-auto rounded-lg scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div
                className="relative p-2 rounded-xl bg-gradient-border animate-gradient-border max-w-[280px] md:mb-[50px] mb-[25px] transform hover:scale-105 transition-transform duration-300"
                data-aos="fade-up"
              >
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-[#1F488E] via-[#2C5BB8] to-[#1F488E] shadow-xl">
                  <img
                    loading="lazy"
                    src="https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/urL3SRqwc8.webp"
                    alt="Product Image"
                    className="w-full h-auto rounded-lg scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            <div className="lg:w-[45%] w-full">
              <h2
                className="text-[#1F488E] lg:flex hidden lg:text-[42px] font-bold leading-[120%] mb-2 lg:text-start text-center"
                data-aos="fade-left"
              >
                About Us
              </h2>
              <p
                className="text-[#59606C] text-[16px] md:text-[18px] leading-relaxed lg:text-justify text-center mb-6"
                data-aos="fade-left"
              >
                Glee Biotech Ltd. is a rapidly growing pharmaceutical company with a clear vision to make a real impact in the critical care sector by delivering high-quality, reliable, and affordable healthcare products.  
                The company has a  strong backup support  of  parent company PDPL ( Plus Distribution Pvt Ltd ) , which ensures  extensive and well-organized distribution network  support  to ensure swift, nationwide reach serving hospitals, clinics, and healthcare providers across India.  
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
