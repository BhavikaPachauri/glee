import React, { useState } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { NextArrow1, PrevArrow1 } from "../Icons";
import { setSingleProduct } from "../../store/slices/productSlice";
import { useNavigate, useLocation } from "react-router-dom";

export const ProductSlide = () => {
  const slider = React.useRef(null);
  const [prevClicked, setPrevClicked] = useState(false);
  const [nextClicked, setNextClicked] = useState(false);
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
              className="px-1"
              onClick={() => {
                selctedProduct(product);
              }}
            >
              <div data-aos="fade-down">
                <div className="bg-white rounded-lg p-3 min-h-[400px] cursor-pointer hover:scale-[0.98] hover:shadow-md transition-all duration-300 ease-linear">
                  <div className="flex justify-center items-center h-48 bg-[#f4f4f4] rounded-[5px]">
                    <img
                      src={product.prod_image_url[0]}
                      alt={product.prod_brand}
                      className="max-h-full"
                    />
                  </div>
                  <h2 className="text-[20px] font-normal text-black mt-3.5">
                    {product.prod_brand}
                  </h2>
                  <p className="text-[14px] text-[#59606C] mt-1.5">
                    {product.prod_des[0]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="mt-6 justify-end gap-3.5 flex">
          <button
            className={`relative w-[32px] h-[32px] rounded-full p-[2.5px] bg-gradient-to-b from-[#AAABAB] to-[#AAABAB] cursor-pointer transition-all duration-300 ease-linear group hover:bg-gradient-to-b hover:from-[#1F488E] hover:to-[#727272] ${
              prevClicked
                ? "scale-110 bg-gradient-to-b from-[#1F488E] to-[#727272]"
                : ""
            }`}
            onClick={handlePrevClick}
            aria-label="Previous"
            type="button"
          >
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center group transition-all duration-300 ease-linear">
              <PrevArrow1 />
            </div>
          </button>
          <button
            className={`relative w-[32px] h-[32px] rounded-full p-[2.5px] bg-gradient-to-b from-[#AAABAB] to-[#AAABAB] cursor-pointer transition-all duration-300 ease-linear group hover:bg-gradient-to-b hover:from-[#1F488E] hover:to-[#727272] ${
              nextClicked
                ? "scale-110 bg-gradient-to-b from-[#1F488E] to-[#727272]"
                : ""
            }`}
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
