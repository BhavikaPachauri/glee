import React from "react";
import { Link } from "react-router-dom";
import ProductSlide from "./common/ProductSlide";
import { useDispatch, useSelector } from "react-redux";
import { MoreIcon } from "./Icons";
import { setCategory } from "../store/slices/productSlice";

const HomeProduct = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="xl:max-w-[1280px] mx-auto px-3 w-full lg:py-20 sm:py-16 py-12">
        <div className="flex justify-between items-center mb-4">
          <h2
            className="text-[#1F488E] text-3xl md:text-4xl font-bold"
            data-aos="fade-right"
          >
            Our Products
          </h2>
          <div
            data-aos="fade-left"
            onClick={() => {
              dispatch(setCategory("All"));
            }}
          >
            <Link
              to="/products"
              className="text-[15px] font-normal text-[#1F52A9] flex items-center gap-1 justify-center group"
            >
              See all
              <span>
                <MoreIcon />
              </span>
            </Link>
          </div>
        </div>
        <ProductSlide />
        <div id="faq"></div>
      </div>
    </>
  );
};

export default HomeProduct;
