import React, { useState } from "react";
import Helmet from "../components/Helmet";
import BreadCrumb from "../components/BreadCrumb";
import { useLoaderData } from "react-router-dom";

import { convertImgs } from "../utils/convertImgs";

const New = () => {
  const { news_slug, recruit_slug, news, recruit } = useLoaderData();
  //console.log(useLoaderData());
  return (
    <section>
      <Helmet
        title={
          news !== undefined
            ? `Tin tức và sự kiện - ${news_slug}`
            : `Tuyển dụng - ${recruit_slug}`
        }
      >
        <BreadCrumb
          list={
            news !== undefined
              ? [
                  { title: "Trang chủ", href: "/" },
                  { title: "Tin tức", href: "/tin-tuc-va-su-kien" },
                  { title: news.title, href: null },
                ]
              : [
                  { title: "Trang chủ", href: "/" },
                  { title: "Tuyển dụng", href: "/tuyen-dung" },
                  { title: recruit.title, href: null },
                ]
          }
        />
        <section>
          <div className="w-full tablet:py-4 py-2 desktop-L:px-32 desktop:px-16 tablet:px-8 px-4 product-content content">
            <h1 className="pt-8 font-semibold ">
              {news ? news.title : recruit.title}
            </h1>
            <p className=" my-4">{news ? news.date : recruit.date}</p>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: `${news ? news.main_content : recruit.main_content}`,
              }}
            />
          </div>
        </section>
      </Helmet>
    </section>
  );
};

export default New;
