import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSingleProduct } from "../store/slices/productSlice";
import ProductSlide from "./common/ProductSlide";

const Products = () => {
  const [activeTab, setActiveTab] = useState("description");
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const productSlice = useSelector((state) => state.product);
  const { products, selectedProduct } = productSlice;

  const itemsPerPage = 12;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice(
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
          <div className="flex justify-between items-center md:mb-10 mb-7">
            <h2 className="text-black sm:text-[42px] text-[30px] leading-[120%] text-center text-nowrap">
              Product Details
            </h2>
            <button
              onClick={handleBackToProducts}
              className="px-4 py-2 bg-[#002347] text-white rounded"
            >
              Back <span className="sm:bolck hidden">to Products</span>
            </button>
          </div>

          <div className="flex flex-wrap justify-between lg:gap-0 gap-8 mb-14">
            <div className="lg:w-[35%]">
              <div className="bg-[#f4f4f4] rounded-[10px] h-full">
                <img
                  src={selectedProduct.prod_image_url[0]}
                  className="mx-auto w-full h-full object-contain bg-transparent"
                  alt={selectedProduct.prod_brand}
                />
              </div>
            </div>
            <div className="lg:w-[60%]">
              <h3 className="text-black text-[30px] leading-[120%] mb-1">
                {selectedProduct.prod_brand}
              </h3>
              <div className="flex mb-4 gap-4">
                <button
                  className={`pt-2 pb-1 text-base font-normal text-black ${
                    activeTab === "description"
                      ? "border-b-4 border-b-[#1F488E]"
                      : "border-b-4 border-b-[#FAFAFA]"
                  }`}
                  onClick={() => setActiveTab("description")}
                >
                  Description
                </button>
                <button
                  className={`pt-2 pb-1 text-base font-normal text-black ${
                    activeTab === "details"
                      ? "border-b-4 border-b-[#1F488E]"
                      : "border-b-4 border-b-[#FAFAFA]"
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
                        key={index} // Using index as the key. Prefer a unique identifier if available.
                        className="text-[14px] text-black font-normal mb-2"
                      >
                        {desc}
                      </p>
                    ))
                  ) : (
                    <p className="text-[14px] text-black font-normal mb-2">
                      No description available.
                    </p>
                  )}
                  <p className="text-[20px] font-medium">Category</p>
                  <p className="text-[14px] font-normal mb-1">
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
                          className="text-[14px] text-black font-normal mb-2"
                        >
                          {desc}
                        </p>
                      ))
                    ) : (
                      <p className="text-[14px] text-black font-normal mb-2">
                        No description available.
                      </p>
                    )}
                  </div>

                  <div>
                    <p className="text-[20px] font-medium">Category</p>
                    <p className="text-[14px] font-normal mb-1">
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
                          className="text-[14px] font-normal text-black mb-1"
                        >
                          {benefit}
                        </p>
                      ))
                    ) : (
                      <p className="text-[14px] font-normal text-black mb-1">
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
                          className="text-[14px] font-normal text-black mb-1"
                        >
                          {effect}
                        </p>
                      ))
                    ) : (
                      <p className="text-[14px] font-normal text-black mb-1">
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
                          className="text-[14px] font-normal text-black mb-1"
                        >
                          {use}
                        </p>
                      ))
                    ) : (
                      <p className="text-[14px] font-normal text-black mb-1">
                        No uses listed.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
          <h3 className="text-[34px] text-black py-6">Related Products</h3>
          <ProductSlide />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F4F6]">
      <div className="xl:max-w-[1420px] mx-auto px-3 py-8">
        <h3 className="lg:text-[58px] md:text-[45px] sm:text-[38px] text-[35px] text-[#1F488E]">
          Explore Our Range
        </h3>
        <p className="text-[#59606C] text-[16px] font-normal pb-4 border-b border-b-[#C6C6C6]">
          Discover quality products tailored for your needs and lasting
          performance.
        </p>
        <div className="flex flex-wrap lg:mt-10 mt-5">
          {currentProducts.map((product, index) => (
            <div
              className="xl:w-[25%] lg:w-[33.33%] sm:w-[50%] w-full"
              data-aos="fade-zoom"
              key={index}
              onClick={() => handleProductClick(product)}
            >
              <div className="xl:px-[15px] sm:px-3 px-2 mb-8">
                <div className="bg-white rounded-lg p-4 min-h-[400px] h-full flex flex-col justify-between w-full cursor-pointer group">
                  <div className="relative flex justify-center items-center h-48 bg-[#f4f4f4] rounded-[5px] overflow-hidden">
                    <button className="absolute top-0 -left-full w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center duration-300 group-hover:left-0">
                      <span className="text-white text-lg font-semibold">
                        Product Details
                      </span>
                    </button>
                    <div className="flex justify-center items-center h-48 bg-[#f4f4f4] rounded-[5px]">
                      <img
                        src={product.prod_image_url[0]}
                        alt={product.prod_brand}
                        className="max-h-full"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col mt-3.5">
                    <h2 className="text-[18px] font-normal text-black">
                      {product.prod_brand}
                    </h2>
                    <p className="text-[15px] text-[#59606C] mt-1.5">
                      {product.prod_des[0]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === 1
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#002347] text-white hover:bg-[#1b4b73]"
            }`}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === i + 1
                  ? "bg-[#002347] text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === totalPages
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#002347] text-white hover:bg-[#1b4b73]"
            }`}
            onClick={goToNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Products;
