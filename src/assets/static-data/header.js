import { getAllCategory } from "./categorys";
const categorys = getAllCategory();
const nav = [
  {
    title: "Trang chủ",
    href: "/",
    icon: false,
    childs: null,
  },
  {
    title: "Giới thiệu",
    href: "/gioi-thieu",
    icon: false,
    childs: null,
  },
  {
    title: "Sản phẩm",
    href: '/danh-muc/tat-ca',
    icon: true,
    childs: categorys,
  },
  {
    title: "Dịch vụ",
    href: "/dich-vu",
    icon: false,
    childs: null,
  },
];

export { nav };
