import React, { useState } from "react";
import { customer } from "../assets/static-data/customer";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
const MyCustomer = () => {
  const [customer_, setCustomer_] = useState(null);
  return (
    <section>
      <div className="text-center desktop:pt-16 tablet:pt-8 pt-6 desktop-L:px-32 desktop:px-16 tablet:px-8 flex flex-col items-center">
        <h1 className=" uppercase desktop-L:text-4xl desktop:text-3xl tablet:text-2xl text-xl font-semibold text-[#404040]">
          khách hàng của chúng tôi
        </h1>
        {/* desktop */}
        <div className=" desktop-L:py-8 py-4 w-full desktop:block hidden">
          <Swiper
            className="z-[999] text-black w-full"
            spaceBetween={100}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
          >
            {customer.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => setCustomer_(item)}
                    className="w-full desktop-L:h-40 h-32 flex justify-center items-center  cursor-pointer"
                  >
                    <img src={item.src} alt={item.title} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className=" desktop-L:min-h-[5rem] min-h-[3rem] w-full flex items-end justify-center pt-8">
            {customer_ && (
              <p className="w-full leading-8 text-center">
                <span className=" desktop-L:text-2xl text-xl font-semibold underline-offset-4 ">
                  {customer_.title}
                </span>
              </p>
            )}
          </div>
        </div>
        {/* tablet */}
        <div className=" py-6 w-full desktop:hidden tablet:block hidden pt-6">
          <Swiper
            className="z-[999] text-black w-full"
            spaceBetween={50}
            slidesPerView={3}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
          >
            {customer.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => setCustomer_(item)}
                    className="w-full h-36 flex justify-center items-center  cursor-pointer"
                  >
                    <img src={item.src} alt={item.title} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className=" min-h-[2rem] w-full flex items-end justify-center py-4">
            {customer_ && (
              <p className="w-full leading-8 text-center">
                <span className=" text-base font-semibold">
                  {customer_.title}
                </span>
              </p>
            )}
          </div>
        </div>
        {/* mobile large */}
        <div className=" py-6 w-full tablet:hidden mobile-L:block hidden px-4">
          <Swiper
            className="z-[999] text-black w-full"
            spaceBetween={50}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
          >
            {customer.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => setCustomer_(item)}
                    className="w-full h-32 flex justify-center items-center  cursor-pointer"
                  >
                    <img src={item.src} alt={item.title} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className=" min-h-[1rem] w-full flex items-end justify-center py-4">
            {customer_ && (
              <p className="w-full leading-6 text-center">
                <span className=" text-sm font-semibold">
                  {customer_.title}
                </span>
              </p>
            )}
          </div>
        </div>
        {/* mobile small */}
        <div className=" pt-6 w-full mobile-L:hidden block px-4">
          <Swiper
            className="z-[999] text-black w-full"
            spaceBetween={100}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
          >
            {customer.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => setCustomer_(item)}
                    className="w-full h-16 flex justify-center items-center  cursor-pointer"
                  >
                    <img src={item.src} className="h-full" alt={item.title} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className=" min-h-[1rem] w-full flex items-end justify-center pt-4">
            {customer_ && (
              <p className="w-full leading-6 text-center">
                <span className=" text-sm font-semibold  ">
                  {customer_.title}
                </span>
              </p>
            )}
          </div>
        </div>
        <div className="w-1/3 border-b-4 border-red-primary mt-6" />
      </div>
    </section>
  );
};

export default MyCustomer;
