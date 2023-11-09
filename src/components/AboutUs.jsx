import React from "react";
import img_congty from "../assets/picture/cong-ty.jpg";
const AboutUs = () => {
  return (
    <section>
      <div className="text-center desktop:pt-16 tablet:pt-8 pt-6 desktop-L:px-32 desktop:px-16 tablet:px-8 flex flex-col items-center overflow-hidden">
        <h1 className=" uppercase desktop-L:text-4xl desktop:text-3xl tablet:text-2xl text-xl font-semibold text-[#404040]">
          về chúng tôi
        </h1>
        <div className=" tablet:grid desktop:grid-cols-5 tablet:grid-cols-7 tablet:gap-4  desktop:py-12 tablet:py-6 ">
          <div className="w-full text-start desktop:text-xl tablet:text-base desktop::leading-8 leading-6 tablet:indent-8 indent-4 desktop:col-span-3 col-span-4 tablet:p-0 p-4  ">
            <p>
              Công ty Trách Nhiệm Hữu Hạn Dịch Vụ Thương Mại Thiết Bị Vạn Tiến
              (tên giao dịch Van Tien S.T.E. Co.,Ltd.) được thành lập từ năm
              2010 chuyên về lĩnh vực cung cấp/cho thuê vật tư, máy móc, thiết
              bị, phụ tùng, hóa chất và các dịch vụ kỹ thuật liên quan đến các
              ngành công nghiệp dầu khí việt nam.
            </p>
            <br className=" tablet:block hidden" />
            <p className=" tablet:block hidden" >
              Với sự lãnh đạo của Ban Giám đốc đầy tâm huyết cùng với đội ngũ
              nhân viên nhiều kinh nghiệm trong lĩnh vực kỹ thuật cũng như
              thương mại, công ty Vạn Tiến S.T.E. đã từng bước phát triển vững
              mạnh và được nhiều khách hàng trong nghành dầu khí biết đến về
              năng lực uy tín trong lĩnh vực cung cấp thiết bị & dịch vụ liên
              quan ...
            </p>
            <span className="flex tablet:justify-start justify-end w-full">
              <a
                className=" underline underline-offset-4 font-semibold desktop:text-xl mobile-L:text-lg text-base indent-0 text-red-primary"
                href="/lich-su-hinh-thanh"
              >
                Xem tất cả
              </a>
            </span>
          </div>
          <div className="h-full flex items-center justify-end tablet:border-l-2 border-dashed border-gray-primary desktop:col-span-2 col-span-3 tablet:pl-8 tablet:pr-0 tablet:p-4 px-4">
            <img className=" tablet:h-4/5 w-full tablet:w-full max-h-fit" src={img_congty} alt="" />
          </div>
        </div>
        <div className="w-1/3 border-b-4 border-red-primary mt-6" />
      </div>
    </section>
  );
};

export default AboutUs;
