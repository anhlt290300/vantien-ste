import React from "react";
import Helmet from "../components/Helmet";
import BreadCrumb from "../components/BreadCrumb";
const History = () => {
  return (
    <section>
      <Helmet title="Giới thiệu công ty">
        <BreadCrumb
          list={[
            { title: "Trang chủ", href: "/" },
            { title: "Lịch sử hình thành", href: null },
          ]}
        />
        <section>
          <div className="py-4 px-6">
            <img
              className="w-full max-h-[75vh]"
              src="https://cdn.vietnambiz.vn/2020/1/14/corporations-1578972963600590151133.jpg"
              alt=""
            />
            <div className=" desktop-L:w-1/2 desktop:w-2/3 w-full m-auto my-6">
              <h3 className=" font-semibold text-xl">
                CÔNG TY TNHH DỊCH VỤ THƯƠNG MẠI THIẾT BỊ VẠN TIẾN (VANTIEN
                S.T.E)
              </h3>
              <div className="py-4 w-full">
                <p>
                  Công ty Trách Nhiệm Hữu Hạn Dịch Vụ Thương Mại Thiết Bị Vạn
                  Tiến (tên giao dịch Van Tien S.T.E. Co.,Ltd.) được thành lập
                  từ năm 2010 chuyên về lĩnh vực cung cấp/cho thuê vật tư, máy
                  móc, thiết bị, phụ tùng, hóa chất và các dịch vụ kỹ thuật liên
                  quan đến các ngành công nghiệp dầu khí việt nam.
                </p>
                <br />
                <p>
                  Với sự lãnh đạo của Ban Giám đốc đầy tâm huyết cùng với đội
                  ngũ nhân viên nhiều kinh nghiệm trong lĩnh vực kỹ thuật cũng
                  như thương mại, công ty Vạn Tiến S.T.E. đã từng bước phát
                  triển vững mạnh và được nhiều khách hàng trong nghành dầu khí
                  biết đến về năng lực uy tín trong lĩnh vực cung cấp thiết bị &
                  dịch vụ liên quan.
                </p>
                <br />
                <img
                  src="https://teky.edu.vn/blog/wp-content/uploads/2021/08/Cong-ty-IT-so-huu-nhung-nhan-tai.jpg"
                  className="w-full max-h-[50vh]"
                  alt=""
                />
                <br />
                <h4 className="text-xl font-semibold">Thế mạnh của chúng tôi</h4>
                <ul className="list-disc list-inside">
                  <li className="ml-4 my-2">
                    Có kinh nghiệm cao trong việc cung cấp/chuyển đổi hàng hóa
                    mô tả theo tiêu chuẩn IMPA/ISSA code
                  </li>
                  <li className="ml-4 my-2">
                    Có sự hợp tác về tư vấn kỹ thuật và nguồn giá tốt từ các
                    chính hãng về các trang thiết bị bảo hộ lao động Proguard,
                    Towar, Protectar, 3M, Drager..
                  </li>
                  <li className="ml-4 my-2">
                    Đã có rất nhiều kinh nghiệm về các vật tư tiêu hao trong các
                    công việc chế tạo, bảo dưỡng công trình dầu khí vì đã cung
                    cấp nhiều cho các đơn vị dầu khí mảng chính là chế tạo bão
                    dưỡng như PTSC POS, PTSC MC, PVD Tech, PVtran…trong suốt 13
                    năm
                  </li>
                  <li className="ml-4 my-2">
                    Có kinh nghiệm, đáp ứng được khả năng chào giá/ký hợp đồng
                    nguyên tắc 1 năm 1 mức giá cho các vật tư Bảo hộ lao động,
                    Sơn Jotun, các vật tư tiêu hao thông dụng trong công việc
                    chế tạo, bảo dưỡng công trình dầu khí ( theo các hợp đồng
                    mẫu thực tế đã thực hiện)
                  </li>
                  <li className="ml-4 my-2">
                    Đã cung cấp và có kinh nghiệm thật tế rất nhiều các vật tư,
                    thiết bị/phụ tùng thay thế liên quan đến tàu chứa dầu
                    FPSO/FSO, các tàu vận chuyển/xà lan như của PTSC PPS,
                    PVTran, Premier Oil Viet Nam, Modec, PTSC POS…
                  </li>
                  <li className="ml-4 my-2">
                    Các gói thầu lớn trang thiết bị văn phòng như máy tính/máy
                    in/mực in/.. ( như các mẩu hợp đồng đính kèm)
                  </li>
                  <li className="ml-4 my-2">
                    Có thế mạnh đối với các bulông ASTM A193/A194 phủ PTE thường
                    sử dụng trong nghành Dầu khí, đặc biệt thế mạnh cung cấp sớm
                    được các size lớn
                  </li>
                  <li className="ml-4 my-2">
                    Có đầu tư thiết bị và phát triển tốt mảng dịch vụ cho thuê
                    các thiết bị làm sạch bề mặt, sơn ( các thiết bị bắn cát,
                    phun sơn, kiểm tra bề mặt sơn,…), các thiết bị thử tải (
                    water bag 15-35 tấn, bơm nước áp lực, phụ kiện…), các thiết
                    bị đo lường cao cấp nghành điện, thiết bị dò khí, thiết bị
                    test áp lực lên tới 17.000 PSI…..theo phụ lục thiết bị thuê
                    đính kèm
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </Helmet>
    </section>
  );
};

export default History;
