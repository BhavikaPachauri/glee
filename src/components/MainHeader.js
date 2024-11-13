import React, { useState } from "react";
import Slider from 'react-slick';
import BuildingImg from '../assets/images/png/BulidingImg.jpg';
import { NextArrow, PrevArrow } from './Icons';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
};

const MainHeader = () => {
    const slider = React.useRef(null);
    const [prevClicked, setPrevClicked] = useState(false);
    const [nextClicked, setNextClicked] = useState(false);

    const handlePrevClick = () => {
        setPrevClicked(true);
        slider?.current?.slickPrev();

        setTimeout(() => {
            setPrevClicked(false);
        }, 200);
    };

    const handleNextClick = () => {
        setNextClicked(true);
        slider?.current?.slickNext();

        setTimeout(() => {
            setNextClicked(false);
        }, 200);
    };


    return (
        <div className="w-full">
            <Slider {...settings} ref={slider}>
                {[...Array(3)].map((_, index) => (
                    <div key={index} className="animate-background flex items-center lg:py-28 py-14">
                        <div className="xl:max-w-[1157px] mx-auto px-3 w-full">
                            <div className="flex flex-wrap items-center justify-between">
                                <div className="w-full lg:w-[55%] text-center lg:text-left">
                                    <h1 className="font-medium lg:text-[58px] md:text-[45px] sm:text-[38px] text-[35px] text-white leading-[125%] sm:mb-0 mb-1">
                                        Glee Biotech Limited
                                    </h1>
                                    <p className="text-[15px] font-light text-white lg:pr-32">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type
                                        specimen book. It has survived not only five centuries, but also the leap into
                                        electronic typesetting, remaining essentially unchanged. It was popularised in
                                        the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                                        and more recently with desktop publishing software like Aldus PageMaker including
                                        versions of Lorem Ipsum.
                                    </p>

                                    <div className='flex gap-4 items-center lg:mt-8 mt-4 lg:justify-start justify-center' >
                                        <button
                                            className={`cursor-pointer transition-all duration-300 ease-linear ${prevClicked ? "scale-110" : ""
                                                }`}
                                            onClick={handlePrevClick}
                                        >
                                            <PrevArrow />
                                        </button>
                                        <button
                                            className={`cursor-pointer transition-all duration-300 ease-linear ${nextClicked ? "scale-110" : ""
                                                }`}
                                            onClick={handleNextClick}
                                        >
                                            <NextArrow />
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full lg:w-[40%] mt-8 lg:mt-0 flex flex-col justify-center lg:justify-end">
                                    <img
                                        src={BuildingImg}
                                        alt="Building"
                                        width={480}
                                        height={411}
                                        className="rounded-[10px] mx-auto"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MainHeader;
