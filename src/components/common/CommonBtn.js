import { Link } from "react-router-dom";

const CommonBtn = ({ btnname }) => {
    return (
        <Link 
            to="#" // Add the appropriate path here
            className="relative inline-block text-white text-[15px] py-[9.4px] px-[21.85px] leading-[18.75px] rounded-full text-lg
                       bg-gradient-to-r from-[#6aaeca] via-[#1F488E] to-[#727272] bg-[length:200%_200%] bg-left transition-all duration-500 ease-out
                       hover:bg-right"
        >
            {btnname}
        </Link>
    );
};

export default CommonBtn;
