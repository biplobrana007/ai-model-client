import React from "react";

import { FaArrowRightLong } from "react-icons/fa6";
import Container from "./Container";

const HeroSlider = ({ slider }) => {
  return (
    <div
      style={{ backgroundImage: `url(${slider.img})` }}
      className="bg-cover bg-center bg-no-repeat "
    >
      <div className="py-10 flex items-center bg-black/60 h-[80vh]">
        <Container>
          <h2 className="text-5xl! md:text-7xl! mt-5 lg:w-1/2 2xl:w-1/3 text-white font-bold nuito-font">
            {slider.title}
          </h2>
          <p className="text-white/50 text-xl lg:w-1/3 font-semibold">
            {slider.desc}
          </p>
          <button className=" flex items-center gap-2  duration-500 mt-20 bg-linear-[25deg,#FD1D1D,#FCB045] py-2 px-5 rounded-full text-base-100 font-semibold cursor-pointer">
            <span>Explore More</span>
            <FaArrowRightLong></FaArrowRightLong>
          </button>
        </Container>
      </div>
    </div>
  );
};

export default HeroSlider;
