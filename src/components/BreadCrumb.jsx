import React from "react";
import PropTypes from "prop-types";

const BreadCrumb = ({ list }) => {
  return (
    <div className=" bg-gray-primary w-full select-none font-normal">
      <div className=" desktop:px-8 tablet:px-4 py-2">
        <ol className="flex justify-start items-center text-black-primary text-base">
          {list.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  index !== 0
                    ? " before:content-['/']  before:text-[#777] before:px-[10px] before:text-[12px] flex items-center justify-center"
                    : " before:text-[#777] before:px-[10px] before:text-[12px] flex items-center justify-center "
                }
              >
                {item.href && <a href={item.href} className="text-lg hover:underline hover:underline-offset-4 hover:text-red-primary">{item.title}</a>}
                {item.href === null && <p>{item.title}</p>}
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

BreadCrumb.propTypes = {
  list: PropTypes.array.isRequired,
};

export default BreadCrumb;
