import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../store/slices/productSlice";

const ProductCategory = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categories = [
    {
      id: 1,
      img: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/qVpGdJdrxg.webp",
      label: "Injection",
    },
    {
      id: 2,
      img: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/GdmV9UWiTV.webp",
      label: "Tablet",
    },
    {
      id: 3,
      img: "https://pdpl-stuff.s3.ap-south-1.amazonaws.com/dynamic/ksshospitals.com/3IG5BliZO5.webp",
      label: "Syrup",
    },
  ];

  const handleCategoryClick = (label) => {
    navigate(`/products`);
    dispatch(setCategory(label));
  };

  return (
    <div className="xl:max-w-[1320px] mx-auto px-3">
      <h2
        className="text-[#1F488E] lg:text-[32px] text-[36px] font-semibold lg:text-start text-center"
        data-aos="fade-down"
      >
        Product Category
      </h2>
      <div
        className="flex flex-wrap md:justify-between justify-center items-center lg:pb-[73px] pt-5 pb-14 md:gap-0 gap-5"
        data-aos="fade-down"
      >
        {categories.map((category) => (
          <div
            key={category.id}
            className="md:w-[31.5%] sm:w-[48%] w-full"
            onClick={() => {
              handleCategoryClick(category.label);
            }}
          >
            <div className="relative overflow-hidden rounded-[15px] group cursor-pointer">
              <img loading="lazy" 
                src={category.img}
                alt={category.label}
                className="rounded-[15px]"
              />
              <div className="w-full h-[30%] bg-white bg-opacity-40 absolute flex justify-center items-center group-hover:h-full bottom-0 transition-all duration-300 ease-in-out">
                <p className="lg:text-[32px] md:text-[26px] text-[20px] text-white font-medium">
                  {category.label}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
