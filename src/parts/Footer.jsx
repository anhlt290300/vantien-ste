import React, { useState } from "react";
import { nav } from "../assets/static-data/header";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
const Footer = () => {
  const [open, setOpen] = useState(false);
  return (
    <footer>
      <div className="w-screen bg-white pt-12 tablet:px-16 px-4">
        <div className="w-full tablet:px-8 px-4 py-8 border-t-2 border-gray-primary grid desktop:grid-cols-3 grid-cols-1">
          <div>
            <div
              className={
                open
                  ? "grid grid-cols-1 desktop:gap-6 gap-0 desktop:bg-white bg-white-primary -m-4 desktop:m-0 group/navfooter active"
                  : "grid grid-cols-1 desktop:gap-6 gap-0 desktop:bg-white bg-white-primary -m-4 desktop:m-0 group/navfooter"
              }
            >
              <h3
                onClick={() => {
                  if (window.innerWidth < 1024) setOpen(!open);
                }}
                className={
                  open
                    ? " desktop-L:text-2xl tablet:text-xl font-semibold flex items-center desktop:cursor-default cursor-pointer desktop:p-0 p-4 bg-gray-primary group/seemore active"
                    : " desktop-L:text-2xl tablet:text-xl font-semibold flex items-center desktop:cursor-default cursor-pointer desktop:p-0 p-4 group/seemore"
                }
              >
                Xem thêm trong trang chủ
                <span className=" desktop:hidden block ml-2 group-[.active]/seemore:rotate-180 transition-all duration-200 ease-in-out">
                  <IoIosArrowDown />
                </span>
              </h3>
              <div className="grid grid-cols-1 desktop:gap-6 gap-0 ] desktop:max-h-[400px] max-h-0 group-[.active]/navfooter:max-h-[400px] overflow-hidden transition-all duration-500 ease-in-out">
                {nav.map((item, index) => {
                  return (
                    <a
                      key={index}
                      href={item.href}
                      className={
                        index === 0
                          ? "hidden"
                          : " tablet:text-xl text-base desktop:hover:underline underline-offset-4 desktop:hover:text-red-primary desktop:p-0 tablet:p-4 px-4 py-2 desktop:hover:bg-white hover:bg-yellow-second"
                      }
                    >
                      {item.title}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
          <div className=" col-span-2 desktop:border-l-2 border-gray-primary border-dashed grid grid-cols-1 desktop-L:gap-2 gap-3 desktop-L:pl-16 desktop:pl-8 desktop:mt-0 mt-8">
            <div>
              <h3 className="desktop-L:text-2xl tablet:text-xl text-base font-semibold">
                CÔNG TY TNHH DỊCH VỤ THƯƠNG MẠI THIẾT BỊ VẠN TIẾN
              </h3>
              <p className=" desktop:text-xl mobile-L:text-base text-sm">
                Van Tien Service Trading Equipment (VANTIEN STE){" "}
              </p>
            </div>
            <p className="desktop:text-xl mobile-L:text-base text-sm">
              <span className=" font-semibold">Địa chỉ</span>: Lô B10, Khu Biệt
              Thự Bình Minh, Phường 8, TP. Vũng Tàu, tỉnh Bà Rịa – Vũng Tàu
            </p>
            <p className="desktop:text-xl mobile-L:text-base text-sm">
              <span className=" font-semibold">Điện thoại</span>: 02543 56 39 56
              - Fax: 02543 56 39 57 - Cellphone/Zalo: Mr Hà 0983.02.00.03
            </p>
            <p className="desktop:text-xl mobile-L:text-base text-sm">
              <span className=" font-semibold">Email</span>:
              vantienste@vantienste.com
            </p>
            <div className=" tablet:flex grid grid-cols-1 items-center">
              <a href="/">
                <img
                  src="https://i0.wp.com/easternsea.com.vn/wp-content/uploads/2017/12/bct-fix.png?zoom=1.25&w=1020&ssl=1"
                  alt="logo bộ công thương"
                  className="max-h-[10rem]"
                />
              </a>
              <div className="w-fit h-full grid grid-cols-4 tablet:gap-6 gap-4 desktop-L:ml-24 tablet:ml-8 m-auto tablet:mt-0 mt-4 items-center">
                <a
                  href="/"
                  className="desktop-L:w-16 desktop-L:h-16 w-12 h-12 border border-black-primary flex items-center justify-center hover:bg-yellow-second"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="/"
                  className="desktop-L:w-16 desktop-L:h-16 w-12 h-12  border border-black-primary flex items-center justify-center hover:bg-yellow-second"
                >
                  <FaInstagram size={30}  />
                </a>

                <a
                  href="/"
                  className="desktop-L:w-16 desktop-L:h-16 w-12 h-12 border border-black-primary flex items-center justify-center hover:bg-yellow-second"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="/"
                  className="ddesktop-L:w-16 desktop-L:h-16 w-12 h-12 border border-black-primary flex items-center justify-center hover:bg-yellow-second"
                >
                  <FaYoutube size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
