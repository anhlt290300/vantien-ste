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
          ? "fixed top-0 w-screen bg-white h-screen text-black-primary z-[9999] bg-[rgba(0,0,0,0.2)]"
          : "hidden"
      }
    >
      <div className=" relative w-full h-fit bg-white">
        <div
          onClick={() => dispatch(toggle())}
          className="fixed top-8 right-16 cursor-pointer"
        >
          <AiOutlineClose size={35} />
        </div>
        <div className="pt-20 px-48 w-full">
          <h1 className=" font-medium text-2xl">Tìm kiếm</h1>
          <div className="w-full flex mt-4">
            <input
              type="text"
              placeholder="Nhập từ tìm kiếm của bạn"
              className=" outline-none font-semibold py-7 px-6 border border-gray-primary w-full placeholder:font-normal"
            />
            <div className="py-8 px-8 bg-black-second ml-6 cursor-pointer">
              <BiSearch className=" text-white-primary" size={35} />
            </div>
          </div>
        </div>
        <div className="pt-12 pb-28 px-48 w-full">
          <h1 className=" font-medium text-2xl">Tìm kiếm gần đây của bạn</h1>
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
