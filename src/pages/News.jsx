import React from "react";
import Helmet from "../components/Helmet";
import { useLoaderData } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import NewsCard from "../components/NewsCard";
const News = () => {
  const news = useLoaderData();
  //console.log(categorys);
  return (
    <section>
      <Helmet title={`Tin tức và sự kiện - Tất cả`}>
        <BreadCrumb
          list={[
            { title: "Trang chủ", href: "/" },
            { title: "Tất cả tin tức", href: null },
          ]}
        />
        <section>
          <div className="w-full tablet:py-4 py-2 desktop-L:px-32 desktop:px-16 tablet:px-8 px-4">
            {news && (
              <div className="grid desktop:grid-cols-2 grid-cols-1 gap-8 bg-white px-4 py-6">
                {news.map((item, index) => {
                  return (
                    <div key={index}>
                      <NewsCard item={item} slug={item.slug} news={true} />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </Helmet>
    </section>
  );
};

export default News;
