import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import { products } from "../assets/fakedata/product";
const HighlightProducts = () => {
  return (
    <section>
      <div className="pt-16 px-48 flex flex-col items-center w-full">
        <h1 className=" uppercase text-4xl font-semibold text-[#404040]">
          sản phẩm nổi bật
        </h1>
        <div className="py-12 w-full">
          <Swiper
            className="z-[999] text-black w-full"
            spaceBetween={150}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
          >
            {products.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="w-full h-[800px] flex flex-col justify-start items-center bg-white cursor-pointer">
                    <img src={item.img} className="w-full" alt="" />
                    <div className="p-6 -mt-12 bg-white max-w-[calc(100%-2.5rem)] overflow-hidden">
                      <h3 className="text-2xl font-semibold underline underline-offset-4 hover:text-red-primary">
                        {item.title}
                      </h3>
                      <p className="mt-4 text-lg left-6 ">{item.content}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="w-1/3 border-b-4 border-red-primary mt-6" />
      </div>
    </section>
  );
};

export default HighlightProducts;
