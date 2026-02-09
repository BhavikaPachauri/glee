import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSingleProduct,
  setCategory,
} from "../store/slices/productSlice";
import ProductSlide from "./common/ProductSlide";
import { MoreIcon1, NextArrow1, PrevArrow1 } from "./Icons";

const Products = () => {
  const productSlice = useSelector((state) => state.product);
  const { selectedProduct, categoryWiseProducts, selectedCategory } =
    productSlice;

  const [activeTab, setActiveTab] = useState("description");
  const [activeTab1, setActiveTab1] = useState(selectedCategory);

  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const categories = [ "Injections",
    ];

  const itemsPerPage = 12;
  const totalPages = Math.ceil(categoryWiseProducts.length / itemsPerPage);
  const currentProducts = categoryWiseProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const handleProductClick = (product) => {
    dispatch(setSingleProduct(product));
  };

  const handleBackToProducts = () => {
    dispatch(setSingleProduct(null));
  };

  if (selectedProduct) {
    return (
      <div className="bg-[#F8F8FA]">
        <div className="xl:max-w-[1320px] mx-auto px-3 md:py-16 py-10">
          <div className="md:flex justify-center items-start md:mb-10 mb-7">
            <button
              onClick={handleBackToProducts}
              data-aos="fade-left"
              className="text-[15px] font-normal pt-4 text-[#1F52A9] items-center gap-1 justify-center group sm:flex hidden"
            >
              <span>
                <MoreIcon1 />
              </span>
              Back
            </button>
            <div className="w-full">
              <h2
                className="text-[#1F488E] sm:text-[40px] text-[30px] leading-[120%] text-center font-semibold text-nowrap sm:mb-[15px] mb-2"
                data-aos="fade-down"
              >
                Product Details
              </h2>
              <p
                className="text-[#59606C] text-[16px] font-normal pb-[17px] border-b border-b-[#C6C6C6] text-center"
                data-aos="fade-down"
              >
                Discover quality products tailored for your needs and lasting
                performance.
              </p>
            </div>
            <button
              onClick={handleBackToProducts}
              data-aos="fade-left"
              className="text-[15px] font-normal text-[#1F52A9] items-center gap-1 justify-center group mt-3 sm:hidden flex"
            >
              <span>
                <MoreIcon1 />
              </span>
              Back
            </button>
          </div>

          <div className="flex flex-wrap justify-between lg:gap-0 gap-8 mb-14">
            <div className="lg:w-[35%]" data-aos="fade-right">
              <div className="bg-[#f4f4f4] rounded-[10px] h-full">
                <img loading="lazy" 
                  src={selectedProduct.prod_image_url[0]}
                  className="mx-auto w-full h-full object-contain bg-transparent"
                  alt={selectedProduct.prod_brand}
                />
              </div>
            </div>
            <div className="lg:w-[60%]" data-aos="fade-left">
              <h3 className="text-black sm:text-[30px] text-[24px] leading-[120%] mb-1">
                {selectedProduct.prod_brand}
              </h3>
              <div className="flex mb-4 gap-4">
                <button
                  className={`relative pt-2 pb-1 text-base font-normal text-black after:absolute after:transition-all after:duration-300 after:h-1 after:rounded-[4px] 
          after:bg-gradient-to-r after:from-[#6aaeca] after:via-[#1F488E] after:to-[#727272] after:left-0 after:-bottom-0 ${
            activeTab === "description" ? "after:right-0" : "after:right-full"
          }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={`relative pt-2 pb-1 text-base font-normal text-black after:absolute after:transition-all after:duration-300 after:h-1 after:rounded-[4px] 
                    after:bg-gradient-to-r after:from-[#6aaeca] after:via-[#1F488E] after:to-[#727272] after:left-0 after:-bottom-0 ${
                      activeTab === "details"
                        ? "after:right-0"
                        : "after:right-full"
                    }`}
                  onClick={() => setActiveTab("details")}
                >
                  Details
                </button>
              </div>
              {activeTab === "description" && (
                <div>
                  <h3 className="text-[14px] font-normal text-black mb-1">
                    <strong>Description:</strong>
                  </h3>
                  {selectedProduct.prod_des &&
                  selectedProduct.prod_des.length > 0 ? (
                    selectedProduct.prod_des.map((desc, index) => (
                      <p
                        key={index}
                        className="text-[14px] text-[#525252] font-normal mb-2"
                      >
                        {desc}
                      </p>
                    ))
                  ) : (
                    <p className="text-[14px] text-[#525252] font-normal mb-2">
                      No description available.
                    </p>
                  )}
                  <p className="text-[16px] font-medium">Category</p>
                  <p className="text-[14px] text-[#525252] font-normal mb-1">
                    {selectedProduct.prod_category}
                  </p>
                </div>
              )}

              {activeTab === "details" && (
                <div>
                  <div>
                    <h3 className="text-[14px] font-normal text-black mb-1">
                      <strong>Description:</strong>
                    </h3>
                    {selectedProduct.prod_des &&
                    selectedProduct.prod_des.length > 0 ? (
                      selectedProduct.prod_des.map((desc, index) => (
                        <p
                          key={index}
                          className="text-[14px] text-[#525252] font-normal mb-2"
                        >
                          {desc}
                        </p>
                      ))
                    ) : (
                      <p className="text-[14px] text-[#525252] font-normal mb-2">
                        No description available.
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="text-[16px] font-medium">Category</p>
                    <p className="text-[14px] font-normal mb-1 text-[#525252]">
                      {selectedProduct.prod_category ||
                        "No category available."}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[14px] font-normal text-black mb-1">
                      <strong>Benefits:</strong>
                    </h3>
                    {selectedProduct.prod_benefits &&
                    selectedProduct.prod_benefits.length > 0 ? (
                      selectedProduct.prod_benefits.map((benefit, index) => (
                        <p
                          key={index}
                          className="text-[14px] font-normal text-[#525252] mb-1"
                        >
                          {benefit}
                        </p>
                      ))
                    ) : (
                      <p className="text-[14px] font-normal text-[#525252] mb-1">
                        No benefits available.
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-[14px] font-normal text-black mb-1">
                      <strong>Side Effects:</strong>
                    </h3>
                    {selectedProduct.prod_side_effects &&
                    selectedProduct.prod_side_effects.length > 0 ? (
                      selectedProduct.prod_side_effects.map((effect, index) => (
                        <p
                          key={index}
                          className="text-[14px] font-normal text-[#525252] mb-1"
                        >
                          {effect}
                        </p>
                      ))
                    ) : (
                      <p className="text-[14px] font-normal text-[#525252] mb-1">
                        No side effects listed.
                      </p>
                    )}
                  </div>

                  <div>
                    <h3 className="text-[14px] font-normal text-black mb-1">
                      <strong>Uses:</strong>
                    </h3>
                    {selectedProduct.prod_uses &&
                    selectedProduct.prod_uses.length > 0 ? (
                      selectedProduct.prod_uses.map((use, index) => (
                        <p
                          key={index}
                          className="text-[14px] font-normal text-[#525252] mb-1"
                        >
                          {use}
                        </p>
                      ))
                    ) : (
                      <p className="text-[14px] font-normal text-[#525252] mb-1">
                        No uses listed.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <h3 className="text-[34px] text-black py-6" data-aos="fade-right">
            Related Products
          </h3>
          <ProductSlide />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F4F6]">
      <div className="xl:max-w-[1420px] mx-auto px-3 py-8">
        <h3
          className="text-[#10111A]   text-[32px]   font-bold leading-[126%] mb-3 mt-5 text-center"
          data-aos="fade-down"
        >
          Our Injectable Range
        </h3>
        <p
          className="text-[#59606C] text-[16px] font-normal pb-4 border-b border-b-[#C6C6C6] text-center"
          data-aos="fade-down"
        >
          Discover high-quality pharmaceutical products designed for performance, reliability, and better patient outcomes.
        </p>
        <div className="flex flex-wrap gap-4 justify-center py-6">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveTab1(category);
                dispatch(setCategory(category));
              }}
              className={`px-[30px] py-[9.2px] rounded-[30px] text-[16px] font-normal border border-solid ${
                activeTab1 === category
                  ? "bg-[#1F488E] border-[#1F488E] text-white"
                  : "bg-transparent text-black border-black"
              } transition duration-300`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap mt-5">
          {currentProducts.map((product, index) => (
            <div
              className="xl:w-[25%] lg:w-[33.33%] sm:w-[50%] w-full"
              key={index}
              onClick={() => handleProductClick(product)}
            >
              <div className="px-1 mb-8" data-aos="fade-zoom">
                <div className="bg-white rounded-xl p-4 min-h-[400px] cursor-pointer transition-all duration-500 ease-in-out group hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
                  <div className="relative overflow-hidden flex justify-center items-center h-48 bg-gradient-to-br from-[#f4f4f4] to-[#f8f8f8] rounded-lg group-hover:bg-gradient-to-br group-hover:from-[#f8f8f8] group-hover:to-[#f4f4f4]">
                    <img loading="lazy" 
                      src={product.prod_image_url[0]}
                      alt={product.prod_brand}
                      className="max-h-full transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="mt-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <h2 className="text-[22px] font-semibold text-black group-hover:text-[#1F488E] transition-colors duration-300">
                        {product.prod_brand}
                      </h2>
                      <div className="w-8 h-8 rounded-full bg-[#1F488E]/10 flex items-center justify-center group-hover:bg-[#1F488E]/20 transition-colors duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#1F488E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[15px] text-[#59606C] line-clamp-2 leading-relaxed">
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
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            className={`relative w-[35px] h-[35px] rounded-full p-[2.5px] bg-gradient-to-b from-[#AAABAB] to-[#AAABAB] transition-all duration-300 ease-linear group hover:bg-gradient-to-b hover:from-[#1F488E] hover:to-[#727272] ${
              currentPage === 1
                ? "bg-gradient-to-b from-[#1F488E] to-[#727272] cursor-not-allowed"
                : "bg-gradient-to-b from-[#1F488E] to-[#727272]"
            }`}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center group transition-all duration-300 ease-linear">
              <PrevArrow1 />
            </div>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 mx-1 rounded-full w-[35px] flex justify-center items-center h-[35px] ${
                currentPage === i + 1
                  ? "bg-[#1F488E] text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`relative w-[35px] h-[35px] rounded-full p-[2.5px] bg-gradient-to-b from-[#AAABAB] to-[#AAABAB] transition-all duration-300 ease-linear group hover:bg-gradient-to-b hover:from-[#1F488E] hover:to-[#727272] ${
              currentPage === totalPages
                ? "bg-gradient-to-b from-[#1F488E] to-[#727272] cursor-not-allowed "
                : "bg-gradient-to-b from-[#1F488E] to-[#727272]"
            }`}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            <div className="w-full h-full bg-white rounded-full flex items-center justify-center group transition-all duration-300 ease-linear">
              <NextArrow1 />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
