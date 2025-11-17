
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper/modules";
import { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import HeroSlider from "./HeroSlider";


const Hero = () => {
const {authLoaidng} = use(AuthContext)

const sliders = [
  {
    img: "https://i.ibb.co.com/d0hDzkTZ/slide01.jpg",
    title: "Understanding AI Models ",
    desc: "Dive into the core concepts of machine learning and deep learning.",
  },
  {
    img: "https://i.ibb.co.com/N27DrDFd/slide02.jpg",
    title: "Generative AI Explained ",
    desc: "Explore models like GPT and DALL-E that create new content, from text to images.",
  },
  {
    img: "https://i.ibb.co.com/wN4Hc6fB/slide03.jpg",
    title: "Deployment and Impact",
    desc: "Learn about deploying AI models in real-world applications and their societal impact.",
  },
];
  return (
    <div>
      <Swiper modules={[Pagination]} pagination={{ clickable: true }}>
        {authLoaidng ? (
          <Loading></Loading>
        ) : (
          sliders &&
          sliders.map((slider) => (
            <SwiperSlide key={slider.id}>
              <HeroSlider slider={slider}></HeroSlider>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Hero;
