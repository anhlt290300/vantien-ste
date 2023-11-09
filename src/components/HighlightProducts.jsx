import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
import { products } from "../assets/fakedata/product";
const HighlightProducts = () => {
  return (
    <section>
      <div className="text-center desktop:pt-16 tablet:pt-8 pt-6 desktop-L:px-32 desktop:px-16 tablet:px-8 flex flex-col items-center">
        <h1 className="  uppercase desktop-L:text-4xl desktop:text-3xl tablet:text-2xl text-xl font-semibold text-[#404040]">
          sản phẩm nổi bật
        </h1>
        {/* desktop */}
        <div className="py-14 w-full desktop:block hidden">
          <Swiper
            className="z-[900] text-black w-full"
            spaceBetween={30}
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
                  <div className="w-full h-[760px] flex flex-col justify-start items-center bg-white cursor-pointer text-left">
                    <img src={item.img} className="w-full" alt="" />
                    <div className=" desktop-L:px-6 px-4 py-4 desktop-L:-mt-12 -mt-8 bg-white desktop-L:max-w-[calc(100%-2.5rem)] desktop:max-w-[calc(100%-1.5rem)] overflow-hidden h-2/3">
                      <h3 className=" desktop-L:text-2xl text-xl font-semibold underline underline-offset-4 hover:text-red-primary">
                        {item.title}
                      </h3>
                      <p className=" desktop-L:mt-4 mt-2 desktop:text-lg text-base left-6 ">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* tablet */}
        <div className="py-8 w-full desktop:hidden tablet:block hidden">
          <Swiper
            className="z-[900] text-black w-full"
            spaceBetween={30}
            slidesPerView={2}
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
                  <div className="w-full h-[650px] flex flex-col justify-start items-center bg-white cursor-pointer text-left">
                    <img src={item.img} className="w-full" alt="" />
                    <div className="  px-4 py-4 -mt-8 bg-white max-w-[calc(100%-1.5rem)] overflow-hidden h-2/3">
                      <h3 className=" text-lg font-semibold underline underline-offset-4 hover:text-red-primary">
                        {item.title}
                      </h3>
                      <p className=" mt-4 desktop:text-lg text-base left-6 ">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        {/* mobile */}
        <div className="pt-6 w-full tablet:hidden block px-4">
          <Swiper
            className="z-[900] text-black w-full"
            spaceBetween={30}
            slidesPerView={1}
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
                  <div className="w-full h-[450px] flex flex-col justify-start items-center bg-white cursor-pointer text-left">
                    <div style={{backgroundImage:`url(${item.img})`}} className=" h-1/2 w-full bg-cover"/>                    
                    <div className=" mobile-L:p-4 p-2 -mt-4 bg-white max-w-[calc(100%-1.5rem)] overflow-hidden h-2/3">
                      <h3 className=" text-base font-semibold underline underline-offset-4 hover:text-red-primary">
                        {item.title}
                      </h3>
                      <p className=" mobile-L:mt-4 mt-2 text-sm mobile-L:leading-6 leading-5 ">
                        {item.content}
                      </p>
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
