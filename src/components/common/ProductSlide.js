import React, { useEffect, useState } from "react";
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
        <button
          className={` sm:block hidden absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer transition-transform duration-200 ${prevClicked ? "scale-110" : ""
            }`}
          onClick={handlePrevClick}
        >
          <PrevArrow1 />
        </button>
        <button
          className={`sm:block hidden absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer transition-transform duration-200 ${nextClicked ? "scale-110" : ""
            }`}
          onClick={handleNextClick}
        >
          <NextArrow1 />
        </button>
        <Slider {...settings} ref={slider} className="sm:mx-5">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="px-2"
              onClick={() => {
                selctedProduct(product);
              }}
            >
              <div className="bg-white rounded-lg p-3 min-h-[400px] cursor-pointer hover:scale-[0.98] hover:shadow-md transition-all duration-300 ease-linear">
                <div className="flex justify-center items-center h-48 bg-[#D9D9D9] rounded-[5px]">
                  <img src={product.prod_image_url[0]} alt={product.prod_brand} className="max-h-full" />
                </div>
                <h2 className="text-[20px] font-normal text-black mt-3.5">{product.prod_brand}</h2>
                <p className="text-[14px] text-[#59606C] mt-1.5">{product.prod_des[0]}</p>
              </div>
            </div>
          ))}
        </Slider>
        <div className="sm:hidden mt-6 justify-end gap-5 flex">
          <button
            className={`w-12 h-12 rounded bg-white flex justify-center items-center border border-black p-2 cursor-pointer transition-transform duration-200 ${prevClicked ? "scale-110" : ""
              }`}
            onClick={handlePrevClick}
          >
            <PrevArrow1 />
          </button>
          <button
            className={`w-12 h-12 rounded bg-white flex justify-center items-center border border-black p-2 cursor-pointer transition-transform duration-200 ${nextClicked ? "scale-110" : ""
              }`}
            onClick={handleNextClick}
          >
            <NextArrow1 />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductSlide;
