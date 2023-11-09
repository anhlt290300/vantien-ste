import React from "react";
import Helmet from "../components/Helmet";
import BreadCrumb from "../components/BreadCrumb";
import { useLoaderData } from "react-router-dom";

const Products = () => {
  const { category_slug, category_title, product } = useLoaderData();
  return (
    <section>
      <Helmet title={`${category_title} - ${product.title}`}>
        <BreadCrumb
          list={[
            { title: "Trang chủ", href: "/" },
            { title: "Danh mục", href: "/danh-muc/tat-ca" },
            { title: category_title, href: category_slug },
            { title: product.title, href: null },
          ]}
        />
        <section>
          <div className="w-full tablet:py-4 py-2 desktop-L:px-32 desktop:px-16 tablet:px-8 px-4 product-content">
            <div dangerouslySetInnerHTML={{ __html: `${product.content}` }} />
          </div>
        </section>
      </Helmet>
    </section>
  );
};

export default Products;
