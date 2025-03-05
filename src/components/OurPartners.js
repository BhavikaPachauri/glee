import React from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { setSingleProduct } from "../store/slices/productSlice";
import { useNavigate, useLocation } from "react-router-dom";

const OurPartners = () => {
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
  const productSlice = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { products } = productSlice;
  const selctedProduct = (prod) => {
    dispatch(setSingleProduct(prod));
    if (location.pathname === "/aboutus") {
      navigate("/products");
    }
    if (location.pathname === "/products") {
      window.scrollTo(0, 0);
    }
  };
  return (
    <>
      <div className="xl:max-w-[1362px] mx-auto px-3 lg:py-[80px] py-14">
        <h2
          className="text-black text-[34px] leading-[120%] mb-8 text-center"
          data-aos="fade-down"
        >
          Our Products
        </h2>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div
              key={product.id}
              onClick={() => {
                selctedProduct(product);
              }}
            >
              <div className="flex items-center" data-aos="fade-zoom">
                <img
                  src={product.prod_image_url}
                  alt="cardimg"
                  width={100}
                  // height={200}
                  className="object-fit-contain cursor-pointer aspect-square"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default OurPartners;
