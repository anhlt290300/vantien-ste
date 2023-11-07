import React from "react";
import img_congty from "../assets/picture/cong-ty.jpg";
const AboutUs = () => {
  return (
    <section>
      <div className=" text-center pt-16 px-48 flex flex-col items-center ">
        <h1 className=" uppercase text-4xl font-semibold text-[#404040]">
          về chúng tôi
        </h1>
        <div className="grid grid-cols-2 gap-12 py-12 ">
          <div className="w-full text-start text-xl leading-8 indent-8">
            <p>
              Công ty Trách Nhiệm Hữu Hạn Dịch Vụ Thương Mại Thiết Bị Vạn Tiến
              (tên giao dịch Van Tien S.T.E. Co.,Ltd.) được thành lập từ năm
              2010 chuyên về lĩnh vực cung cấp/cho thuê vật tư, máy móc, thiết
              bị, phụ tùng, hóa chất và các dịch vụ kỹ thuật liên quan đến các
              ngành công nghiệp dầu khí việt nam.
            </p>
            <br />
            <p>
              Với sự lãnh đạo của Ban Giám đốc đầy tâm huyết cùng với đội ngũ
              nhân viên nhiều kinh nghiệm trong lĩnh vực kỹ thuật cũng như
              thương mại, công ty Vạn Tiến S.T.E. đã từng bước phát triển vững
              mạnh và được nhiều khách hàng trong nghành dầu khí biết đến về
              năng lực uy tín trong lĩnh vực cung cấp thiết bị & dịch vụ liên
              quan ...
              <span className="ml-2">
                <a
                  className=" underline underline-offset-4 font-semibold text-xl text-red-primary"
                  href="/lich-su-hinh-thanh"
                >
                  Xem tất cả
                </a>
              </span>
            </p>
          </div>
          <div className="h-full flex items-center justify-end border-l-2 border-dashed border-gray-primary">
            <img className="w-3/4" src={img_congty} alt="" />
          </div>
        </div>
        <div className="w-1/3 border-b-4 border-red-primary mt-6" />
      </div>
    </section>
  );
};

export default AboutUs;
