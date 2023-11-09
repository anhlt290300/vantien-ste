import React from "react";
import Helmet from "../components/Helmet";
import { useLoaderData } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";

const Categorys = () => {
  const { title, categorys, slug, products, content, img } = useLoaderData();
  console.log(categorys);
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
                  </strong>,&nbsp;
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
                    <div
                      key={index}
                      className=" border border-gray-primary tablet:grid grid-cols-11 p-4 tablet:gap-6 gap-3 min-h-[15rem]"
                    >
                      <a
                        href={`/danh-muc/${slug}/${item.slug}`}
                        className="col-span-5 flex items-center"
                      >
                        <img
                          src={item.img[0]}
                          className=" w-full tablet:h-full"
                          alt=""
                        />
                      </a>
                      <div className="flex flex-col col-span-6 target:mt-0 mt-4">
                        <h3 className=" font-semibold tablet:text-xl text-base tablet:mb-4 mb-2">
                          <a
                            href={`/danh-muc/${slug}/${item.slug}`}
                            className=" hover:text-red-primary"
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="max-h-[10rem] tablet:text-base text-sm element normal-case">
                          {item.mini_content}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            {categorys && (
              <div className="grid desktop:grid-cols-2 grid-cols-1 gap-8 bg-white px-4 py-6">
                {categorys.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" border border-gray-primary tablet:grid grid-cols-11 p-4 tablet:gap-6 gap-3 min-h-[15rem]"
                    >
                      <a
                        href={`/danh-muc/${item.slug}`}
                        className="col-span-5 flex items-center"
                      >
                        <img
                          src={item.img}
                          className=" w-full tablet:h-full"
                          alt=""
                        />
                      </a>
                      <div className="flex flex-col col-span-6 target:mt-0 mt-4">
                        <h3 className=" font-semibold tablet:text-xl text-base tablet:mb-4 mb-2">
                          <a
                            href={`/danh-muc/${item.slug}`}
                            className=" hover:text-red-primary"
                          >
                            {item.title}
                          </a>
                        </h3>
                        <p className="max-h-[10rem] tablet:text-base text-sm element normal-case">
                          {item.content}
                        </p>
                      </div>
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
