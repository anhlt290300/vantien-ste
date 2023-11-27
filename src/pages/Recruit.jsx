import React from "react";
import { useLoaderData } from "react-router-dom";
import Helmet from "../components/Helmet";
import BreadCrumb from "../components/BreadCrumb";
import NewsCard from "../components/NewsCard";

const Recruit = () => {
  const recruit = useLoaderData();
  //console.log(categorys);
  return (
    <section>
      <Helmet title={`Tin tuyển dụng - Tất cả`}>
        <BreadCrumb
          list={[
            { title: "Trang chủ", href: "/" },
            { title: "Tất cả tin tuyển dụng", href: null },
          ]}
        />
        <section>
          <div className="w-full tablet:py-4 py-2 desktop-L:px-32 desktop:px-16 tablet:px-8 px-4">
            {recruit && (
              <div className="grid desktop:grid-cols-2 grid-cols-1 gap-8 bg-white px-4 py-6">
                {recruit.map((item, index) => {
                  return (
                    <div key={index}>
                      <NewsCard item={item} slug={item.slug} news={false} />
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

export default Recruit;
