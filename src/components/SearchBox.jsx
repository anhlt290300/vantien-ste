import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";
import { toggle } from "../redux/slice/search";
import { BiSearch } from "react-icons/bi";
const SearchBox = () => {
  const flag = useSelector((value) => value.search.flag);
  const dispatch = useDispatch();
  //console.log(flag);
  return (
    <div
      className={
        flag
          ? "fixed desktop:top-0 top-14 w-screen bg-white h-screen text-black-primary z-[9999] bg-[rgba(0,0,0,0.1)]"
          : "hidden"
      }
    >
      <div className=" relative w-full desktop:h-fit h-[calc(100vh-3.5rem)] bg-white">
        <div
          onClick={() => dispatch(toggle())}
          className="fixed desktop:top-8 desktop:block hidden right-16 cursor-pointer"
        >
          <AiOutlineClose size={35} />
        </div>
        <div className=" desktop:pt-20 pt-8 desktop-L:px-48 desktop:px-32 px-8 w-full">
          <h1 className=" font-medium desktop:text-2xl text-xl">Tìm kiếm</h1>
          <div className="w-full desktop:flex mt-4">
            <input
              type="text"
              placeholder="Nhập từ tìm kiếm của bạn"
              className=" outline-none font-semibold desktop:py-7 desktop:px-6 mobile-L:py-6 py-5 px-4 border border-gray-primary w-full placeholder:font-normal"
            />
            <div className=" desktop:py-8 desktop:px-8 mobile-L:px-5 mobile-L:py-5 px-4 py-4 desktop:w-fit w-full bg-black-second desktop:ml-6 desktop:mt-0 mt-4 cursor-pointer flex items-center justify-center">
              <BiSearch className=" text-white-primary" size={35} />
            </div>
          </div>
        </div>
        <div className="desktop:pt-12 pt-6 pb-28 desktop-L:px-48 desktop:px-32 px-8 w-full">
          <h1 className=" font-medium desktop:text-2xl text-xl">Tìm kiếm gần đây của bạn</h1>
        </div>
      </div>
      <div
        onClick={() => dispatch(toggle())}
        className="w-full h-full cursor-pointer bg-[rgba(0,0,0,0.45)]"
      ></div>
    </div>
  );
};

export default SearchBox;
