import React, { useEffect, useState } from "react";
import logo from "../assets/picture/logo.png";
import vietnam from "../assets/picture/vietnam.svg";
import { nav } from "../assets/static-data/header";
import { BiSearch } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggle } from "../redux/slice/search";
import { IoIosArrowDown } from "react-icons/io";
import { getAllCategory } from "../api/category";

const Header = () => {
  const dispatch = useDispatch();
  //console.log(nav)
  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let category_ = await getAllCategory();
      //console.log(category_[0])
      setCategorys(category_[0]);
    };
    getData();
  }, []);

  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) setActive(true);
      else setActive(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header className="w-screen h-fit desktop:block hidden">
      <div className=" w-full py-4 flex justify-between items-center text-black-primary">
        <div className="w-fit h-fit px-8">
          <a href="/">
            <img src={logo} alt="logo" className="h-14" />
          </a>
        </div>
        <div className="  px-8 border-b border-gray-primary w-full flex justify-end ">
          <div className="grid grid-cols-3 text-sm">
            <div
              className="px-6 py-4 text-center relative flex items-center justify-center
          after:transition-all after:duration-200 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-gray-primary hover:after:h-1"
            >
              <a href="/tin-tuc-va-su-kien">Tin tức và Sự kiện</a>
            </div>
            <div
              className="px-6 py-4 text-center relative flex items-center justify-center
          after:transition-all after:duration-200 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-gray-primary hover:after:h-1"
            >
              <a href="/tuyen-dung">Cơ hội việc làm</a>
            </div>
            <div
              className="px-6 py-4 text-center relative flex justify-center items-center cursor-pointer
          after:transition-all after:duration-200 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-gray-primary hover:after:h-1"
            >
              <img src={vietnam} alt="" className="w-8 mr-2" />
              <span>Việt Nam</span>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          active
            ? "flex desktop-L:justify-center items-center fixed bottom-full translate-y-full left-0 w-screen border-b-4 border-black-primary bg-white-primary transition-all duration-300 ease-in-out z-[9999]"
            : "flex desktop-L:justify-center desktop:justify-start items-center relative w-full border-b-4 border-black-primary"
        }
      >
        <div className="grid grid-cols-4 desktop-L:gap-8 gap-4">
          {nav.map((item, index) => {
            return (
              <div
                key={index}
                className=" text-2xl font-semibold text-center flex items-center justify-center group/nav relative
            after:transition-all after:duration-300 after:ease-in-out after:absolute after:bottom-0 after:left-0 after:w-full after:h-0 after:bg-yellow-primary hover:after:h-1"
              >
                <a
                  href={item.href}
                  className="flex items-center px-6 py-4 justify-between"
                >
                  <span>{item.title}</span>
                  {item.icon && (
                    <div className=" ml-2 group-hover/nav:rotate-180 transition-all duration-200 ease-in-out">
                      <IoIosArrowDown />
                    </div>
                  )}
                </a>
                {item.childs && (
                  <div className="z-[1000] absolute top-full left-0  h-0 w-max overflow-hidden bg-black-second  group-hover/nav:h-max transition-all duration-300 ease-in-out ">
                    <div className="grid grid-cols-1   gap-y-8 gap-x-20 px-8 py-4 text-xl">
                      {/* {item.childs.map((item_, index_) => {
                        return (
                          <a
                            href={`/danh-muc/${item_.slug}`}
                            key={index_}
                            className=" text-white-primary underline-offset-4 hover:underline min-w-max text-start cursor-pointer"
                          >
                            {item_.title}
                          </a>
                        );
                      })} */}
                      {categorys.map((item_, index_) => {
                        return (
                          <a
                            href={`/danh-muc/${item_.slug}`}
                            key={index_}
                            className=" text-white-primary underline-offset-4 hover:underline min-w-max text-start cursor-pointer"
                          >
                            {item_.title}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className=" absolute desktop-L:right-16 right-8 top-1/2 -translate-y-1/2">
          <div
            onClick={() => dispatch(toggle())}
            className="flex items-center justify-center cursor-pointer group/search relative font-semibold"
          >
            <BiSearch size={35} className=" group-hover/search:scale-105" />
            <span className="ml-2 text-lg group-hover/search:text-red-primary :">
              Tìm kiếm
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
