import {
  HiOutlineViewGrid,
  HiOutlineCube,
  HiOutlineShoppingCart,
  HiOutlineUsers,
  HiOutlineDocumentText,
  HiOutlineAnnotation,
} from "react-icons/hi";

const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "danh-muc",
    label: "Danh mục",
    path: "/quan-tri-vien/danh-muc",
    // icon: HiOutlineCube ,
  },
  {
    key: "san-pham",
    label: "Sản phẩm",
    path: "/quan-tri-vien/san-pham",
    // icon: HiOutlineCube ,
  },
  {
    key: "tin-tuc-va-su-kien",
    label: "Tin tức và sự kiện",
    path: "/quan-tri-vien/tin-tuc-va-su-kien",
    // icon: HiOutlineShoppingCart ,
  },
  {
    key: "tuyen-dung",
    label: "Bài viết tuyển dụng",
    path: "/quan-tri-vien/tuyen-dung",
    // icon: HiOutlineUsers ,
  },
];

const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  //   {
  //     key: "settings",
  //     label: "Settings",
  //     path: "/settings",
  //     icon: HiOutlineCog ,
  //   },
  //   {
  //     key: "support",
  //     label: "Help & Support",
  //     path: "/support",
  //     icon: HiOutlineQuestionMarkCircle ,
  //   },
];

export { DASHBOARD_SIDEBAR_BOTTOM_LINKS, DASHBOARD_SIDEBAR_LINKS };
