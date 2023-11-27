import React from "react";
import PropTypes from "prop-types";
import { convertImgs } from "../utils/convertImgs";
const NewsCard = ({ item, slug, news }) => {
  //console.log(item)
  return (
    <div className=" border border-gray-primary tablet:grid grid-cols-11 p-4 tablet:gap-6 gap-3 min-h-[15rem] h-full">
      <a
        href={news ? `/tin-tuc-va-su-kien/${slug}` : `/tuyen-dung/${slug}`}
        className="col-span-5 flex items-center"
      >
        <img
          src={news ? item.img : convertImgs(item.img)[0]}
          className=" w-full tablet:h-full"
          alt=""
        />
      </a>
      <div className="flex flex-col col-span-6 target:mt-0 mt-4">
        <h3 className=" font-semibold tablet:text-xl text-base tablet:mb-4 mb-2">
          <a
            href={news ? `/tin-tuc-va-su-kien/${slug}` : `/tuyen-dung/${slug}`}
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
};

NewsCard.propTypes = {
  slug: PropTypes.string,
  item: PropTypes.object.isRequired,
  news: PropTypes.bool.isRequired,
};

export default NewsCard;
