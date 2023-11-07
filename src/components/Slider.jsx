import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import { imgs } from "../assets/static-data/slider";

const Slider = () => {
  const swiperRef = useRef(null);

  return (
    <div className="relative">
      <Swiper
        effect={"fade"}
        loop={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        onSlideChange={() => {
          let index = swiperRef.current.realIndex;
        }}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[EffectFade, Autoplay, Pagination]}
      >
        {imgs.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <a href={item.href}>
                {" "}
                <img src={item} className="w-screen" alt="img" />
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div
        onClick={() => swiperRef.current?.slidePrev()}
        className=" absolute top-1/2 -translate-y-1/2 left-20 p-6 rounded-full bg-[rgba(0,0,0,0.5)] z-[999] text-yellow-second cursor-pointer"
      >
        <AiOutlineLeft size={40} />
      </div>
      <div
        onClick={() => swiperRef.current?.slideNext()}
        className=" absolute top-1/2 -translate-y-1/2 right-20 p-6 rounded-full bg-[rgba(0,0,0,0.5)] z-[999] text-yellow-second cursor-pointer"
      >
        <AiOutlineRight size={40} />
      </div>
    </div>
  );
};

export default Slider;
