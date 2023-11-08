import React, { useEffect, useState } from "react";
import logo from "../assets/picture/logo.png";
import vietnam from "../assets/picture/vietnam.svg";
import { nav } from "../assets/static-data/header";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { toggle } from "../redux/slice/search";
const HeaderBurger = () => {
  const dispatch = useDispatch();

  const [active, setActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [indexItem, setIndexItem] = useState(null);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) setActive(true);
      else setActive(false);
    });
    console.log(indexItem);
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <header className="w-screen  desktop:hidden block  h-14 ">
      <div className=" fixed top-0 left-0 z-[99999] w-full h-14 flex justify-between items-center text-black-primary bg-white border-b-4 border-y-black-primary">
        <div className="  h-full mobile-L:px-8 px-4 py-2 flex items-center justify-center">
          <a href="/">
            <img src={logo} alt="logo" className="h-8 min-w-[10rem]" />
          </a>
        </div>
        <div className="flex h-full text-black-second">
          <div className="flex items-center justify-center h-full w-14 border border-gray-primary cursor-pointer">
            <BiSearch size={25} />
          </div>
          <div
            onClick={() => setOpenNav((openNav) => !openNav)}
            className={
              openNav
                ? "flex items-center justify-center h-full w-14 border border-gray-primary cursor-pointer bg-yellow-second"
                : "flex items-center justify-center h-full w-14 border border-gray-primary cursor-pointer"
            }
          >
            {openNav ? (
              <AiOutlineClose size={25} />
            ) : (
              <GiHamburgerMenu size={25} />
            )}
          </div>
        </div>
      </div>
      {openNav && (
        <div
          className={
            indexItem
              ? "fixed top-14 left-0 z-[99999] w-full h-[calc(100vh-3.5rem)]  bg-white text-black-second group/nav active"
              : "fixed top-14 left-0 z-[99999] w-full h-[calc(100vh-3.5rem)]  bg-white text-black-second group/nav"
          }
        >
          <div className="w-full grid grid-cols-1">
            {nav.map((item, index) => {
              return (
                <div
                  key={index}
                  className="px-8 py-4 font-semibold text-xl border-b border-gray-primary flex items-center justify-between"
                >
                  <a href={item.href} className="w-full">
                    {item.title}
                  </a>
                  {item.icon && (
                    <IoIosArrowDown
                      onClick={() => setIndexItem(index)}
                      className=" -rotate-90"
                    />
                  )}
                </div>
              );
            })}
            <div className="px-8 py-4  text-xl border-b border-gray-primary flex items-center justify-between">
              <a href="/tin-tuc-va-su-kien" className="w-full">
                Tin tức và Sự kiện
              </a>
            </div>
            <div className="px-8 py-4  text-xl border-b border-gray-primary flex items-center justify-between">
              <a href="/co-hoi-viec-lam" className="w-full">
                Cơ hội việc làm
              </a>
            </div>
            <div className="px-8 py-4  text-xl flex items-center justify-between bg-gray-primary cursor-pointer">
              <div className="flex items-center">
                <img src={vietnam} alt="" className="w-10 mr-2" />
                <span>Thay đổi ngôn ngữ</span>
              </div>
              <IoIosArrowDown className=" -rotate-90" />
            </div>
          </div>
          {indexItem && (
            <div className="w-full  fixed top-14 left-full z-[999999] group-[.active]/nav:-translate-x-full transition-all duration-300 ease-in-out bg-white h-[calc(100vh-3.5rem)]">
              <div className="grid grid-cols-1">
                <div
                  onClick={() => setIndexItem(null)}
                  className="px-8 py-4 font-semibold text-xl border-b border-gray-primary flex items-center justify-start relative"
                >
                  <IoIosArrowDown className=" rotate-90 absolute left-2" />
                  <p>{nav[indexItem].title}</p>
                </div>
                {nav[indexItem].childs.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="pl-12 pr-4 py-4 text-xl border-b border-gray-primary flex items-center justify-start relative"
                    >
                      <a href={item.href}>{item.title}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default HeaderBurger;
