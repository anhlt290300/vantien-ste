import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ item, slug, category, admin }) => {
  //console.log(item);
  return (
    <div className=" border border-gray-primary tablet:grid grid-cols-11 p-4 tablet:gap-6 gap-3 min-h-[15rem] h-full">
      {!admin && (
        <a
          href={
            category
              ? `/danh-muc/${item.slug}`
              : `/danh-muc/${slug}/${item.slug}`
          }
          className="col-span-5 flex items-center"
        >
          <img
            src={category ? item.img : item.img}
            className=" w-full tablet:h-full"
            alt=""
          />
        </a>
      )}
      {admin && (
        <div
          href={
            category
              ? `/danh-muc/${item.slug}`
              : `/danh-muc/${slug}/${item.slug}`
          }
          className="col-span-5 flex items-center"
        >
          <img
            src={category ? item.img : item.img}
            className=" w-full tablet:h-full"
            alt=""
          />
        </div>
      )}
      <div className="flex flex-col col-span-6 target:mt-0 mt-4">
        <h3 className=" font-semibold tablet:text-xl text-base tablet:mb-4 mb-2">
          {!admin && (
            <a
              href={
                category
                  ? `/danh-muc/${item.slug}`
                  : `/danh-muc/${slug}/${item.slug}`
              }
              className=" hover:text-red-primary"
            >
              {item.title}
            </a>
          )}
          {admin && (
            <div
              href={
                category
                  ? `/danh-muc/${item.slug}`
                  : `/danh-muc/${slug}/${item.slug}`
              }
              className=" "
            >
              {item.title}
            </div>
          )}
        </h3>
        <p className="max-h-[10rem] tablet:text-base text-sm element normal-case">
          {category ? item.content : item.mini_content}
        </p>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  slug: PropTypes.string,
  item: PropTypes.object.isRequired,
  category: PropTypes.bool.isRequired,
  admin: PropTypes.bool,
};

export default ProductCard;
