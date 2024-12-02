import React from "react";
import { Link } from "react-router-dom";
import ProductSlide from "./common/ProductSlide";
import { useSelector } from "react-redux";
import { MoreIcon } from "./Icons";

const HomeProduct = () => {
  return (
    <>
      <div className="bg-[#F8F8FA]">
        <div className="xl:max-w-[1414px] mx-auto px-3 w-full md:py-[73px] py-14">
          <div className="flex justify-between items-center mb-1">
            <h2 className="text-[#1F488E] text-[32px] font-semibold" data-aos="fade-right">Products</h2>
            <div data-aos="fade-left">
              <Link to="/products" className="text-[15px] font-normal text-[#1F52A9] flex items-center gap-1 justify-center group" >
                See more<span><MoreIcon /></span>
              </Link>
            </div>
          </div>
          <p className="text-[#59606C] text-base font-normal mb-[18px]" data-aos="fade-right">
            Discover our range designed to highlight key benefit or solution, With features, we ensure [specific value , durability, style, performance].
          </p>
          <ProductSlide />
        </div>
      </div>
    </>
  );
};

export default HomeProduct
