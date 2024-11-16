import React from 'react';
import { Link } from 'react-router-dom';
import ProductSlide from './common/ProductSlide'

const HomeProduct = () => {

    return (
        <>
            <div className="bg-[#F8F8FA]">
                <div className="xl:max-w-[1414px] mx-auto px-3 w-full md:py-[73px] py-14">
                    <div className="flex justify-between items-center mb-1">
                        <h2 className="font-mediun text-[32px]">Products</h2>
                        <Link to="/products" className="text-[15px] text-medium font-bold !underline">See more</Link>
                    </div>
                    <p className="text-[#59606C] text-base font-normal max-w-[775px] mb-[18px]">
                        Lorem Ipsum is simply dummy text of the printing and typese Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typese Lorem
                        Ipsum is simply dummy text of the printing and typesetting industry.{" "}
                    </p>
                   <ProductSlide/>
                </div>
            </div>
        </>
    );
};

export default HomeProduct;
