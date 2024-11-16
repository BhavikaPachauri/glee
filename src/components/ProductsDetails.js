import React from 'react';
import DummyImg from '../assets/images/png/DummyImg.png'
import HomeProduct from '../components/HomeProduct'
import ProductSlide from './common/ProductSlide';

const ProductsDetails = () => {
    return (
        <>
            <div className="bg-[#F3F4F6]">
                <div className="xl:max-w-[1160px] mx-auto px-3 py-8">
                    <h2 className="text-black text-[34px] leading-[120%] lg:mb-[67px] mb-10 text-center">
                        Product Details
                    </h2>
                    <div className='flex flex-wrap items-center justify-between mb-10'>
                        <div className='lg:w-[41%]'>
                            <div className='bg-[#D9D9D9] rounded-[10px]'><img src={DummyImg} width={244} height={244} className='mx-auto' /></div>
                        </div>
                        <div className='lg:w-[50%]'>
                            <h3 className="text-black text-[34px] leading-[120%] mb-2">
                                Product name
                            </h3>
                            <p className='text-[12px] text-black font-normal mb-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p className='text-[24px] font-medium'>Category</p>
                            <p className='text-[12px] font-normal'>Medicines</p>
                        </div>
                    </div>
                    <ProductSlide />
                </div>
            </div></>
    )
}

export default ProductsDetails