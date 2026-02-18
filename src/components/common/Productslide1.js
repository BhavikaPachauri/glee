import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    setSingleProduct,
    setCategory,
} from "../../store/slices/productSlice";

import {  NextArrow1, PrevArrow1 } from "../Icons";

const Product = () => {
    const productSlice = useSelector((state) => state.product);
    const { selectedProduct, categoryWiseProducts, selectedCategory } =
        productSlice;

    const [activeTab, setActiveTab] = useState("description");
    const [activeTab1, setActiveTab1] = useState(selectedCategory);

    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();

    const categories = ["Injections",
    ];

    const itemsPerPage = 1;
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


    return (



        <div >
            <div className="xl:max-w-[1420px] mx-auto px-3">

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
                <div className="flex justify-end gap-2 items-center mt-1">
                    <button
                        className={`relative w-[35px] h-[35px] rounded-full p-[2.5px]  transition-all duration-300 ease-linear group bg-gradient-to-b from-[#1F488E] to-[#727272] ${currentPage === 1
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

                    <button
                        className={`relative w-[35px] h-[35px] rounded-full p-[2.5px]  transition-all duration-300 ease-linear group bg-gradient-to-b from-[#1F488E] to-[#727272] ${currentPage === totalPages
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

export default Product;
