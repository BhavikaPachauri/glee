import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSingleProduct } from "../store/slices/productSlice";
import DummyImg from "../assets/images/png/DummyImg.png";
import ProductSlide from "./common/ProductSlide";

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const productSlice = useSelector((state) => state.product);
  const { products, selectedProduct } = productSlice;

  const itemsPerPage = 4;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentProducts = products.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

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
      <div className="bg-[#F3F4F6]">
        <div className="xl:max-w-[1160px] mx-auto px-3 py-8">
          <button onClick={handleBackToProducts} className="mb-4 px-4 py-2 bg-[#002347] text-white rounded">
            Back to Products
          </button>
          <h2 className="text-black text-[34px] leading-[120%] lg:mb-[67px] mb-10 text-center">Product Details</h2>
          <div className="flex flex-wrap items-center justify-between mb-10">
            <div className="lg:w-[41%]">
              <div className="bg-[#D9D9D9] rounded-[10px]">
                <img src={selectedProduct.imageUrl || DummyImg} width={244} height={244} className="mx-auto" alt={selectedProduct.name} />
              </div>
            </div>
            <div className="lg:w-[50%]">
              <h3 className="text-black text-[34px] leading-[120%] mb-2">{selectedProduct.name}</h3>
              <p className="text-[12px] text-black font-normal mb-2">{selectedProduct.description}</p>
              <p className="text-[24px] font-medium">Category</p>
              <p className="text-[12px] font-normal">{selectedProduct.category}</p>
            </div>
          </div>
          <ProductSlide />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F3F4F6]">
      <div className="xl:max-w-[1420px] mx-auto px-3 py-8">
        <h2 className="text-black text-[34px] leading-[120%] mb-8 text-center">Products</h2>
        <div className="flex flex-wrap">
          {currentProducts.map((product, index) => (
            <div className="xl:w-[25%] lg:w-[33.33%] sm:w-[50%] w-100" key={index} onClick={() => handleProductClick(product)}>
              <div className="xl:px-[15px] sm:px-3 px-2 mb-8">
                <div className="bg-white rounded-lg md:p-6 p-4 min-h-[400px] w-full cursor-pointer group">
                  <div className="relative flex justify-center items-center h-48 bg-[#D9D9D9] rounded-[5px] overflow-hidden">
                    <button className="absolute top-0 -left-full w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center duration-300 group-hover:left-0">
                      <span className="text-white text-lg font-semibold">Product Details</span>
                    </button>
                    <img src={product.imageUrl} alt={product.name} className="max-h-full mx-auto" width={146} />
                  </div>
                  <h2 className="text-[20px] font-normal text-black mt-3.5">{product.name}</h2>
                  <p className="text-base text-[#59606C] mt-1.5">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center mt-6">
          <button
            className={`px-4 py-2 mx-1 rounded ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#002347] text-white hover:bg-[#1b4b73]"}`}
            onClick={goToPreviousPage}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === i + 1 ? "bg-[#002347] text-white" : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => goToPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
          <button
            className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#002347] text-white hover:bg-[#1b4b73]"}`}
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
