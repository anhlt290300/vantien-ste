import React, { useState } from "react";
import Helmet from "../components/Helmet";
import BreadCrumb from "../components/BreadCrumb";
import { useLoaderData } from "react-router-dom";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { convertImgs } from "../utils/convertImgs";
import "../css/swiper.css";

const Products = () => {
  const { category_slug, category_title, product } = useLoaderData();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  //console.log(useLoaderData())
  return (
    <section>
      <Helmet title={`${category_title} - ${product.title}`}>
        <BreadCrumb
          list={[
            { title: "Trang chủ", href: "/" },
            { title: "Danh mục", href: "/danh-muc/tat-ca" },
            { title: category_title, href: `/danh-muc/${category_slug}` },
            { title: product.title, href: null },
          ]}
        />
        <section>
          <div className="w-full tablet:py-4 py-2 desktop-L:px-32 desktop:px-16 tablet:px-8 px-4 product-content content">
            <Swiper
              style={{
                "--swiper-navigation-color": "#404040",
                "--swiper-pagination-color": "#404040",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2 on"
            >
              {convertImgs(product.img).map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="w-full">
                      {" "}
                      <img
                        src={item}
                        className="max-w-[calc(1/2screen)] h-auto mx-auto"
                        alt="img"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper on"
            >
              {convertImgs(product.img).map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div>
                      {" "}
                      <img
                        src={item}
                        className="w-1/2 h-auto mx-auto"
                        alt="img"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <h1 className="py-8 font-semibold ">{product.title}</h1>
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: `${product.main_content}` }}
            />
          </div>
        </section>
      </Helmet>
    </section>
  );
};

export default Products;
