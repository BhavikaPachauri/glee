import React from 'react'
import Slider from "react-slick";
import Client1 from "../assets/images/webp/glee.webp";
import Client2 from "../assets/images/webp/doufill.webp";
import Client3 from "../assets/images/webp/gvanco.webp";
import Client4 from "../assets/images/webp/czinc.webp";
import Client6 from "../assets/images/webp/aimbact.webp";
import Client7 from "../assets/images/webp/thiatec.webp";

const OurPartners = () => {
    const logo = [
        {
            image: Client7,
        },
        {
            image: Client2,
        },
        {
            image: Client3,
        },
        {
            image: Client4,
        },
        {
            image: Client6,
        },
        {
            image: Client1,
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
                <h2 className="text-black text-[34px] leading-[120%] mb-8 text-center" data-aos="fade-down">Our Partners</h2>
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