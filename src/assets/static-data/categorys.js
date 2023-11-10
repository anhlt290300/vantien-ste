const categorys = [
  {
    slug: "dung-cu-cam-tay",
    title: "Dụng cụ cầm tay",
    img: "https://media.loveitopcdn.com/21692/thumb/dung-cu-cam-tay.jpg",
    content:
      "chúng tôi chuyên cung cấp các dụng cụ cầm tay và máy móc,thiết bị, vật tư sản xuất phục vụ trong ngành Công nghiệp. Là nhà cung cấp sản phẩm của những thương hiệu lớn trên thế giới, chúng tôi cam kết cung cấp cho khách hàng những sản phẩm chính hãng có giá cạnh tranh nhất với chất lượng tốt nhất theo tiêu chuẩn Châu Âu.",
  },
  {
    slug: "bao-ho-lao-dong",
    title: "Bảo hộ lao động",
    img: "https://giaybaohobinhduong.com/upload/hinhanh/unnamed-7278.png",
    content:
      "chúng tôi - điểm đến đáng tin cậy cho mọi nhu cầu về bảo hộ lao động! Chúng tôi cam kết cung cấp các sản phẩm chất lượng cao nhất để đảm bảo an toàn tối đa cho người lao động trong môi trường làm việc. Với một danh mục đa dạng bao gồm mũ bảo hộ, kính bảo hộ, quần áo chống cháy và nhiều sản phẩm bảo hộ khác, chúng tôi luôn sẵn sàng phục vụ bạn với sự am hiểu, chuyên nghiệp và tận tâm.",
  },
  {
    slug: "bu-long",
    title: "Sản phẩm Bu lông",
    img: "https://kimkhitonghop.com/wp-content/uploads/2020/01/cac-loai-bu-long-oc-vit.jpg",
    content:
      "chúng tôi chuyên cung cấp các loại bu lông đa dạng và chất lượng cao! Chúng tôi tự hào là địa chỉ tin cậy cho mọi nhu cầu về bu lông, từ những loại thông dụng đến những sản phẩm chuyên biệt phục vụ cho nhiều ngành công nghiệp khác nhau. Với đội ngũ nhân viên am hiểu và nhiệt huyết, chúng tôi cam kết cung cấp cho bạn những sản phẩm chất lượng tốt nhất, đáp ứng đầy đủ các tiêu chuẩn và yêu cầu kỹ thuật.",
  },
  {
    slug: "drager",
    title: "Thiết bị cứu hộ, y tế, bảo hộ Drager",
    img: "https://www.draeger.com/Media/Content/Products/Default/draeger-fabius-plus-anaesthesia-machines-4-3-D-34354-2009.jpg?imwidth=480",
    content:
      "cửa hàng chúng tôi - nơi chuyên cung cấp các sản phẩm chất lượng của hãng Dräger! Với hơn một thế kỷ kinh nghiệm và cam kết với sứ mệnh bảo vệ và cứu sống, Dräger đã trở thành một tên tuổi uy tín trong ngành công nghiệp bảo hộ và y tế. Chúng tôi tự hào giới thiệu những sản phẩm chất lượng cao của Dräger, bao gồm các thiết bị y tế và bảo hộ như máy dò khí, thiết bị cứu hộ, mặt nạ bảo hộ và nhiều sản phẩm chất lượng khác.",
  },
  {
    slug: "stauf",
    title: "Sản phẩm, phụ kiện xây dựng Stauf",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ53dyjVkFB6fyWNl9ridLanIMxqSL8px3iDw&usqp=CAU",
    content:
      "chúng tôi tự hào là đại diện cho sự chất lượng và độ tin cậy của các sản phẩm từ hãng Stauf. Với Stauf - một trong những tên tuổi hàng đầu trong ngành công nghiệp về các giải pháp dán và chăm sóc sàn, chúng tôi cung cấp một loạt các sản phẩm chất lượng cao từ keo dán sàn, chất làm phẳng đến các phụ kiện vật liệu xây dựng. Chất lượng và hiệu suất là tiêu chí hàng đầu của Stauf và chúng tôi tự tin rằng những sản phẩm của họ sẽ mang đến sự hoàn hảo cho các dự án xây dựng và sửa chữa của bạn.",
  },
];

const getCategory = (slug) => {
  if (slug === "tat-ca") return categorys;
  return categorys.find((e) => e.slug === slug);
};

const getAllCategory = () => categorys;

export { getCategory, getAllCategory };
