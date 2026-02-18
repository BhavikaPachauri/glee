import React from "react";
import { Link } from "react-router-dom";
import { useDispatch} from "react-redux";
import { MoreIcon } from "./Icons";
import { setCategory } from "../store/slices/productSlice";

import ProductSlide from "./common/ProductSlide";
import Product from "./common/Productslide1";

const HomeProduct = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="xl:max-w-[1280px] mx-auto px-3 w-full lg:py-20 sm:py-16 py-12">
        <div className="flex justify-between  items-center mb-4">
          <h2
            className="text-[#666] text-xl ms-3   md:text-[30px] font-bold"
            data-aos="fade-right"
          >
            Glee Biotech Products
          </h2>
          <div
            data-aos="fade-left"
            onClick={() => {
              dispatch(setCategory("All"));
            }}
          >
            <Link
              to="/products"
              className="text-[12px] md:text-[15px] font-normal text-[#1F52A9] flex  items-center gap-1 justify-cente me-4 group"
            >
              See all
              <span>
                <MoreIcon />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:hidden"> <Product/> </div>
        <div className="hidden md:block">  <ProductSlide/> </div>
        <div id="faq"></div>
      </div>
    </>
  );
};

export default HomeProduct;
