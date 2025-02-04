import React from 'react'
import Slider from "react-slick";
const OurPartners = () => {
    const logo = [
        {
            image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/UrUSy3viCF.webp",
        },
        {
            image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/poo3jiFTpT.webp",
        },
        {
            image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/6jCag5QnzG.webp",
        },
        {
            image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/rH8PRpOpsh.webp",
        },
        {
            image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/dtM27bchRt.webp",
        },
        {
            image: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/KgtuNl7aLw.webp",
        },
    ];
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 6000,
        cssEase: "linear",
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 370,
                settings: {
                    slidesToShow: 2,
                },
            },
        ],
    };
    return (
        <>
            <div className='xl:max-w-[1362px] mx-auto px-3 lg:py-[80px] py-14'>
                <h2 className="text-black text-[34px] leading-[120%] mb-8 text-center" data-aos="fade-down">Our Products</h2>
                <Slider {...settings}>
                    {logo.map((a, index) => (
                        <div key={index} className="flex items-center" data-aos="fade-zoom">
                            <img
                                src={a.image}
                                alt="cardimg"
                                width={100}
                                height={70}
                                className="object-fit-contain cursor-pointer"
                            />
                        </div>
                    ))}
                </Slider>
            </div></>
    )
}

export default OurPartners