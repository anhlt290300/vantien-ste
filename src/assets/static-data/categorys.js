const categorys = [
  {
    slug: "kich-thuy-luc-holmatro",
    title: "Kích thủy lực holmatro",
    img: 'https://kichthuyluc.com.vn/public/upload/editor-upload/files/kich-thuy-luc-Holmatro-HAHC%20100%20H%205%282%29%282%29.png',
    content: 'chúng tôi chuyên cung cấp các dụng cụ cầm tay và máy móc,thiết bị, vật tư sản xuất phục vụ trong ngành Công nghiệp. Là đại diện chính hãng của Kích thủy lực Homatro (Hà Lan) tại Việt Nam, chúng tôi cam kết cung cấp cho khách hàng những sản phẩm chính hãng có giá cạnh tranh nhất với chất lượng tốt nhất theo tiêu chuẩn Châu Âu.'
  },
];

const getCategory = (slug) => {
  if (slug === "tat-ca") return categorys;
  return categorys.find((e) => e.slug === slug);
};

export { getCategory };
