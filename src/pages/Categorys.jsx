import React from "react";
import Helmet from "../components/Helmet";
import { useLoaderData } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
const Categorys = () => {
  const { title, categorys, slug, products, content, img } = useLoaderData();
  //console.log(categorys);
  return (
    <section>
      <Helmet title={`Danh mục - ${title}`}>
        <BreadCrumb
          list={[
            { title: "Trang chủ", href: "/" },
            { title: "Danh mục", href: "/danh-muc/tat-ca" },
            { title: title, href: null },
          ]}
        />
        <section>
          <div className="w-full tablet:py-4 py-2 desktop-L:px-32 desktop:px-16 tablet:px-8 px-4">
            {!categorys && (
              <img
                className="w-full tablet:max-h-[30vw]"
                src={img}
                alt={title}
              />
            )}
            <div className="w-full mt-4 bg-white py-4 px-6">
              <h3 className=" font-semibold desktop:text-2xl tablet:text-xl text-lg ">
                {title}
              </h3>

              {!categorys && (
                <p className=" tablet:text-lg  text-sm leading-8 tablet:mt-4 mt-2">
                  <strong>
                    Công ty TNHH dịch vụ thương mại thiết bị Vạn Tiến
                  </strong>
                  ,&nbsp;
                  <span>{content}</span>
                </p>
              )}
            </div>
          </div>
          <div className="w-full desktop:py-4 py-2 desktop-L:px-32 desktop:px-16 tablet:px-8 px-4 ">
            {!categorys && (
              <div className="grid desktop:grid-cols-2 grid-cols-1 gap-8 bg-white px-4 py-6">
                {products.map((item, index) => {
                  return (
                    <div key={index}>
                      <ProductCard
                        item={item}
                        slug={slug}
                        category={false}
                        index={index}
                      />
                    </div>
                  );
                })}
              </div>
            )}
            {categorys && (
              <div className="grid desktop:grid-cols-2 grid-cols-1 gap-8 bg-white px-4 py-6">
                {categorys.map((item, index) => {
                  return (
                    <div key={index}>
                      <ProductCard
                        item={item}
                        slug={slug}
                        category={true}
                        index={index}
                      />
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

export default Categorys;
