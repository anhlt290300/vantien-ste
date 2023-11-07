import capthep from "./cap-thep.jpg";
import vaithuytinh from "./vai-thuy-tinh.jpg";
const products = [
  {
    img: "https://easternsea.com.vn/wp-content/uploads/2019/06/slider_germany-120x120.jpg",
    title: "CÁP THÉP HIỆU NĂNG CAO THƯƠNG HIỆU PYTHON® (ĐỨC)",
    content:
      "Hiện nay có rất nhiều loại cẩu trục với các ứng dụng khác nhau nên không có một cấu trúc cáp tiêu chuẩn phù hợp cho cùng lúc tất cả các loại cẩu trục. Trong phần lớn các trường hợp, các loại cẩu trục có nguồn gốc từ Bắc Mỹ yêu cầu kích cỡ theo hệ đo lường Anh thì loại cáp cấu trúc Class 6×19 hoặc 6×36 là các lựa chọn truyền thống...",
  },
  {
    img: "https://i1.wp.com/easternsea.com.vn/wp-content/uploads/2018/05/vai-thuy-tinh-HT800-150x150.jpg?resize=150%2C150&ssl=1",
    title: "VẢI THỦY TINH HT800 – VẢI BẠT CHỐNG CHÁY HT800",
    content:
      "Vải HT800 chống cháy được sử dụng như chăn hàn hoặc tấm lót cách nhiệt bảo vệ con người, tài sản và máy móc có giá trị, nhạy cảm với lửa khỏi những tia lửa bắn ra khi hàn xì. Mô hình dệt Satin có công nghệ xử lý nhiệt hiên đại cho ra kết quả là vải dày hơn, nặng hơn và cực kì mạnh mẽ trước các tác động của thiên nhiên và lửa.",
  },
  {
    img: "https://easternsea.com.vn/wp-content/uploads/2019/06/slider_germany-120x120.jpg",
    title: "CÁP THÉP HIỆU NĂNG CAO THƯƠNG HIỆU PYTHON® (ĐỨC)",
    content:
      "Hiện nay có rất nhiều loại cẩu trục với các ứng dụng khác nhau nên không có một cấu trúc cáp tiêu chuẩn phù hợp cho cùng lúc tất cả các loại cẩu trục. Trong phần lớn các trường hợp, các loại cẩu trục có nguồn gốc từ Bắc Mỹ yêu cầu kích cỡ theo hệ đo lường Anh thì loại cáp cấu trúc Class 6×19 hoặc 6×36 là các lựa chọn truyền thống...",
  },
  {
    img: "https://i1.wp.com/easternsea.com.vn/wp-content/uploads/2018/05/vai-thuy-tinh-HT800-150x150.jpg?resize=150%2C150&ssl=1",
    title: "VẢI THỦY TINH HT800 – VẢI BẠT CHỐNG CHÁY HT800",
    content:
      "Vải HT800 chống cháy được sử dụng như chăn hàn hoặc tấm lót cách nhiệt bảo vệ con người, tài sản và máy móc có giá trị, nhạy cảm với lửa khỏi những tia lửa bắn ra khi hàn xì. Mô hình dệt Satin có công nghệ xử lý nhiệt hiên đại cho ra kết quả là vải dày hơn, nặng hơn và cực kì mạnh mẽ trước các tác động của thiên nhiên và lửa.",
  },
  {
    img: "https://easternsea.com.vn/wp-content/uploads/2019/06/slider_germany-120x120.jpg",
    title: "CÁP THÉP HIỆU NĂNG CAO THƯƠNG HIỆU PYTHON® (ĐỨC)",
    content:
      "Hiện nay có rất nhiều loại cẩu trục với các ứng dụng khác nhau nên không có một cấu trúc cáp tiêu chuẩn phù hợp cho cùng lúc tất cả các loại cẩu trục. Trong phần lớn các trường hợp, các loại cẩu trục có nguồn gốc từ Bắc Mỹ yêu cầu kích cỡ theo hệ đo lường Anh thì loại cáp cấu trúc Class 6×19 hoặc 6×36 là các lựa chọn truyền thống...",
  },
  {
    img: "https://i1.wp.com/easternsea.com.vn/wp-content/uploads/2018/05/vai-thuy-tinh-HT800-150x150.jpg?resize=150%2C150&ssl=1",
    title: "VẢI THỦY TINH HT800 – VẢI BẠT CHỐNG CHÁY HT800",
    content:
      "Vải HT800 chống cháy được sử dụng như chăn hàn hoặc tấm lót cách nhiệt bảo vệ con người, tài sản và máy móc có giá trị, nhạy cảm với lửa khỏi những tia lửa bắn ra khi hàn xì. Mô hình dệt Satin có công nghệ xử lý nhiệt hiên đại cho ra kết quả là vải dày hơn, nặng hơn và cực kì mạnh mẽ trước các tác động của thiên nhiên và lửa.",
  },
  {
    img: "https://easternsea.com.vn/wp-content/uploads/2019/06/slider_germany-120x120.jpg",
    title: "CÁP THÉP HIỆU NĂNG CAO THƯƠNG HIỆU PYTHON® (ĐỨC)",
    content:
      "Hiện nay có rất nhiều loại cẩu trục với các ứng dụng khác nhau nên không có một cấu trúc cáp tiêu chuẩn phù hợp cho cùng lúc tất cả các loại cẩu trục. Trong phần lớn các trường hợp, các loại cẩu trục có nguồn gốc từ Bắc Mỹ yêu cầu kích cỡ theo hệ đo lường Anh thì loại cáp cấu trúc Class 6×19 hoặc 6×36 là các lựa chọn truyền thống...",
  },
  {
    img: "https://i1.wp.com/easternsea.com.vn/wp-content/uploads/2018/05/vai-thuy-tinh-HT800-150x150.jpg?resize=150%2C150&ssl=1",
    title: "VẢI THỦY TINH HT800 – VẢI BẠT CHỐNG CHÁY HT800",
    content:
      "Vải HT800 chống cháy được sử dụng như chăn hàn hoặc tấm lót cách nhiệt bảo vệ con người, tài sản và máy móc có giá trị, nhạy cảm với lửa khỏi những tia lửa bắn ra khi hàn xì. Mô hình dệt Satin có công nghệ xử lý nhiệt hiên đại cho ra kết quả là vải dày hơn, nặng hơn và cực kì mạnh mẽ trước các tác động của thiên nhiên và lửa.",
  },
];

export { products };
