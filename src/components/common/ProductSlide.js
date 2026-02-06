import React, { useState } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { NextArrow1, PrevArrow1 } from "../Icons";
import { setSingleProduct } from "../../store/slices/productSlice";
import { useNavigate, useLocation } from "react-router-dom";

export const ProductSlide = () => {
  const slider = React.useRef(null);
  // const [prevClicked, setPrevClicked] = useState(false);
  // const [nextClicked, setNextClicked] = useState(false);
  const productSlice = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { products } = productSlice;
  const handlePrevClick = () => {
    setPrevClicked(true);
    slider?.current?.slickPrev();
    setTimeout(() => setPrevClicked(false), 200);
  };

  const handleNextClick = () => {
    setNextClicked(true);
    slider?.current?.slickNext();
    setTimeout(() => setNextClicked(false), 200);
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const selctedProduct = (prod) => {
    dispatch(setSingleProduct(prod));
    if (location.pathname === "/") {
      navigate("/products");
    }
    if (location.pathname === "/products") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <div className="relative">
        <Slider {...settings} ref={slider}>
          {products.map((product, index) => (
            <div
              key={product.id}
              className="px-3"
              onClick={() => {
                selctedProduct(product);
              }}
            >
              <div data-aos="fade-down" className="pb-3">
                <div className="bg-white rounded-xl p-4 min-h-[400px] cursor-pointer transition-all duration-500 ease-in-out group border border-gray-100 shadow-md hover:shadow-xl">
                  <div className="relative overflow-hidden flex justify-center   items-center h-48 bg-gradient-to-br from-[#f4f4f4] to-[#f8f8f8] rounded-lg group-hover:bg-gradient-to-br group-hover:from-[#f8f8f8] group-hover:to-[#f4f4f4]">
                    <img loading="lazy" 
                      src={product.prod_image_url[0]}
                      alt={product.prod_brand}
                      className="max-h-full transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[20px] font-medium text-black group-hover:text-[#1F488E] transition-colors duration-300">
                        {product.prod_brand}
                      </h2>
                      <div className="w-8 h-8 rounded-full bg-[#1F488E]/10 flex items-center justify-center group-hover:bg-[#1F488E]/20 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F488E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[14px] text-[#59606C] line-clamp-3 leading-normal">
                      {product.prod_des[0]}
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                      <span className="inline-block px-4 py-1.5 text-sm font-medium text-[#1F488E] bg-[#1F488E]/10 rounded-full group-hover:bg-[#1F488E]/15 transition-colors duration-300">
                        {product.prod_category}
                      </span>
                      <button className="inline-flex items-center gap-1.5 px-4 py-1.5 text-sm font-medium text-white bg-[#1F488E] rounded-full hover:bg-[#1F488E]/90 transition-all duration-300 transform hover:scale-105">
                        View Details
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="flex justify-end mt-4 gap-3.5">
          <button
            className={`relative w-[40px] h-[40px] rounded-full p-[2.5px] bg-gradient-to-b from-[#1F488E] to-[#727272] cursor-pointer transition-all duration-300 ease-linear group hover:shadow-lg hover:scale-105`}
            onClick={handlePrevClick}
            aria-label="Previous"
            type="button"
          >
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center group transition-all duration-300 ease-linear">
              <PrevArrow1 />
            </div>
          </button>
          <button
            className={`relative w-[40px] h-[40px] rounded-full p-[2.5px] bg-gradient-to-b from-[#1F488E] to-[#727272] cursor-pointer transition-all duration-300 ease-linear group hover:shadow-lg hover:scale-105`}
            onClick={handleNextClick}
            aria-label="Next"
            type="button"
          >
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center group transition-all duration-300 ease-linear">
              <NextArrow1 />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSlide;
