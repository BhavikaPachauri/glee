import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import DummyImg from '../assets/images/png/DummyImg.png'
import { NextArrow1, PrevArrow1 } from './Icons';
import { Link } from 'react-router-dom';

const HomeProduct = () => {
    //slick Arrows--------------------------
    const slider = React.useRef(null);
    const [prevClicked, setPrevClicked] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);

    const handlePrevClick = () => {
        setPrevClicked(true);
        slider?.current?.slickPrev();
        setTimeout(() => setPrevClicked(false), 200);
    };

    const handleNextClick = () => {
        setNextClicked(true);
        slider?.current?.slickNext();
        setTimeout(() => setNextClicked(false), 200);

        //slick Arrows--------------------------
    };
    // const [products, setProducts] = useState([]);

    // useEffect(() => {
    //     axios.get('/api/products') // Replace '/api/products' with your actual endpoint
    //         .then(response => setProducts(response.data))
    //         .catch(error => console.error('Error fetching products:', error));
    // }, []);
    // {
    //     "name": "Product One",
    //     "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    //     "imageUrl": "/path/to/image.jpg"
    //   },
    const products = [
        {
            name: "Product One",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            imageUrl: DummyImg,
        },
        {
            name: "Product Two",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
            imageUrl: DummyImg,
        },
        {
            name: "Product Three",
            description: "It has survived not only five centuries, but also the leap into electronic typesetting.",
            imageUrl: DummyImg,
        },
        {
            name: "Product Four",
            description: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            imageUrl: DummyImg,
        },
        {
            name: "Product Five",
            description: "Lorem Ipsum passages, and more recently with desktop publishing software.",
            imageUrl: DummyImg,
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                },
            },]
    };
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
                    <div className='relative'>
                        <button
                            className={` sm:block hidden absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer transition-transform duration-200 ${prevClicked ? "scale-110" : ""}`}
                            onClick={handlePrevClick}
                        >
                            <PrevArrow1 />
                        </button>
                        <button
                            className={`sm:block hidden absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer transition-transform duration-200 ${nextClicked ? "scale-110" : ""}`}
                            onClick={handleNextClick}
                        >
                            <NextArrow1 />
                        </button>
                        <Slider {...settings} ref={slider} className='sm:mx-5'>
                            {products.map((product, index) => (
                                <div key={index} className="xl:px-[15px] sm:px-3 px-2">
                                    <div className="bg-white rounded-lg md:p-6 p-4 min-h-[400px]">
                                        <div className="flex justify-center items-center h-48 bg-[#D9D9D9] rounded-[5px]">
                                            <img src={product.imageUrl} alt={product.name} className="max-h-full" width={146} />
                                        </div>
                                        <h2 className="text-[20px] font-normal text-black mt-3.5">{product.name}</h2>
                                        <p className="text-base text-[#59606C] mt-1.5">{product.description}</p>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                        <div className='sm:hidden mt-6 justify-end gap-5 flex'>
                            <button
                                className={`w-12 h-12 rounded bg-white flex justify-center items-center border border-black p-2 cursor-pointer transition-transform duration-200 ${prevClicked ? "scale-110" : ""}`}
                                onClick={handlePrevClick}
                            >
                                <PrevArrow1 />
                            </button>
                            <button
                                className={`w-12 h-12 rounded bg-white flex justify-center items-center border border-black p-2 cursor-pointer transition-transform duration-200 ${nextClicked ? "scale-110" : ""}`}
                                onClick={handleNextClick}
                            >
                                <NextArrow1 />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeProduct;
