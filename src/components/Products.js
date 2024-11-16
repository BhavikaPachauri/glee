import React, { useState } from "react";
import products from './common/Helpers';

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

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

    return (
        <div className="bg-[#F3F4F6]">
            <div className="xl:max-w-[1420px] mx-auto px-3 py-8">
                <h2 className="text-black text-[34px] leading-[120%] mb-8 text-center">
                    Products
                </h2>
                <div className="flex flex-wrap">
                    {currentProducts.map((product, index) => (
                        <div
                            className="xl:w-[25%] lg:w-[33.33%] sm:w-[50%] w-100"
                            key={index}
                        >
                            <div className="xl:px-[15px] sm:px-3 px-2 mb-8">
                                <div className="bg-white rounded-lg md:p-6 p-4 min-h-[400px] w-full cursor-pointer group">
                                    <div className="relative flex justify-center items-center h-48 bg-[#D9D9D9] rounded-[5px] overflow-hidden">
                                        <button className="absolute top-0 -left-full w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center duration-300 group-hover:left-0">
                                            <span className="text-white text-lg font-semibold">
                                                Product Details
                                            </span>
                                        </button>
                                        <img
                                            src={product.imageUrl}
                                            alt={product.name}
                                            className="max-h-full mx-auto"
                                            width={146}
                                        />
                                    </div>
                                    <h2 className="text-[20px] font-normal text-black mt-3.5">
                                        {product.name}
                                    </h2>
                                    <p className="text-base text-[#59606C] mt-1.5">
                                        {product.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center mt-6">
                    <button
                        className={`px-4 py-2 mx-1 rounded ${currentPage === 1
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
                            className={`px-4 py-2 mx-1 rounded ${currentPage === i + 1
                                ? "bg-[#002347] text-white"
                                : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-200"
                                }`}
                            onClick={() => goToPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        className={`px-4 py-2 mx-1 rounded ${currentPage === totalPages
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
