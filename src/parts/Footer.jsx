import React from "react";
import { nav } from "../assets/static-data/header";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
      <div className="w-screen bg-white pt-12 px-16">
        <div className="w-full px-8 py-8 border-t-2 border-gray-primary grid grid-cols-3">
          <div>
            <div className="grid grid-cols-1 gap-8">
              <h3 className="text-3xl font-semibold">
                Xem thêm trong trang chủ
              </h3>
              {nav.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.href}
                    className={
                      index === 0
                        ? "hidden"
                        : "text-2xl hover:underline underline-offset-4 hover:text-red-primary"
                    }
                  >
                    {item.title}
                  </a>
                );
              })}
            </div>
          </div>
          <div className=" col-span-2 border-l-2 border-gray-primary border-dashed grid grid-cols-1 gap-8 px-16">
            <div>
              <h3 className="text-3xl font-semibold">
                CÔNG TY TNHH DỊCH VỤ THƯƠNG MẠI THIẾT BỊ VẠN TIẾN
              </h3>
              <p className="text-2xl">
                Van Tien Service Trading Equipment (VANTIEN STE){" "}
              </p>
            </div>
            <p className="text-2xl">
              <span className=" font-semibold">Địa chỉ</span>: Lô B10, Khu Biệt
              Thự Bình Minh, Phường 8, TP. Vũng Tàu, tỉnh Bà Rịa – Vũng Tàu
            </p>
            <p className="text-2xl">
              <span className=" font-semibold">Điện thoại</span>: 02543 56 39 56
              - Fax: 02543 56 39 57 - Cellphone/Zalo: Mr Hà 0983.02.00.03
            </p>
            <p className="text-2xl">
              <span className=" font-semibold">Email</span>:
              vantienste@vantienste.com
            </p>
            <div className="flex items-center">
              <a href="/">
                <img
                  src="https://i0.wp.com/easternsea.com.vn/wp-content/uploads/2017/12/bct-fix.png?zoom=1.25&w=1020&ssl=1"
                  alt="logo bộ công thương"
                  className="max-h-[10rem]"
                />
              </a>
              <div className="grid grid-cols-4 gap-6 ml-24">
                <a
                  href="/"
                  className="w-16 h-16 border border-black-primary flex items-center justify-center hover:bg-yellow-second"
                >
                  <FaFacebookF size={30} />
                </a>
                <a
                  href="/"
                  className="w-16 h-16 border border-black-primary flex items-center justify-center hover:bg-yellow-second"
                >
                  <FaInstagram size={30} />
                </a>

                <a
                  href="/"
                  className="w-16 h-16 border border-black-primary flex items-center justify-center hover:bg-yellow-second"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="/"
                  className="w-16 h-16 border border-black-primary flex items-center justify-center hover:bg-yellow-second"
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
