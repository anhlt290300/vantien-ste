import React, { useState } from "react";
import { partner } from "../assets/static-data/mypartner";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
const MyPartner = () => {
  const [partner_, setPartner_] = useState(null);
  return (
    <section>
      <div className="pt-16 px-48 flex flex-col items-center w-full">
        <h1 className=" uppercase text-4xl font-semibold text-[#404040]">
          đối tác của chúng tôi
        </h1>
        <div className="py-12 w-full">
          <Swiper
            className="z-[999] text-black w-full"
            spaceBetween={150}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
            }}
            modules={[Autoplay]}
          >
            {partner.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <div
                    onClick={() => setPartner_(item)}
                    className="w-full h-40 flex justify-center items-center  cursor-pointer"
                  >
                    <img src={item.src} alt={item.title} />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <div className=" min-h-[5rem] w-full flex items-end justify-center pt-8">
            {partner_ && (
              <p className="w-2/3 leading-8 text-center">
                <span className=" text-2xl font-semibold underline underline-offset-4 ">
                  {partner_.title}
                </span>
                {"  "} : <span className=" text-2xl">{partner_.content}</span>
              </p>
            )}
          </div>
        </div>
        <div className="w-1/3 border-b-4 border-red-primary mt-6" />
      </div>
    </section>
  );
};

export default MyPartner;
