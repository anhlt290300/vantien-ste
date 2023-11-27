import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { HiOutlineTrash } from "react-icons/hi";
import { IoRemove, IoReturnUpBackOutline } from "react-icons/io5";
import { AiOutlineTool, AiOutlinePlus } from "react-icons/ai";
import JoditEditor from "jodit-react";
import { getAllCategory } from "../../api/category";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  updateProduct,
} from "../../api/product";
import { useLoaderData } from "react-router-dom";
import { convertSlug } from "../../utils/convertSlug";
import { convertImgs } from "../../utils/convertImgs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";

const ProductsAdmin = () => {
  const [products, setProducts] = useState(useLoaderData());
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(null);
  const [categorySlug, setCategorySlug] = useState(null);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let item = await getAllProduct();
      setProducts(item[0]);
    };
    if (!add || update === null) {
      getData();
    }
  }, [add, update]);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (products.length === 0) {
      toast.error("Bạn chưa có sản phẩm nào");
    } else {
      if (list.length === 0) {
        toast.error("Bạn chưa chọn danh mục nào");
      } else {
        //console.log(list)
        let rs = await deleteProduct(list);
        if (rs.data.code === 500) {
          //console.log("500");
          toast.error(rs.data.message);
        } else {
          //console.log("200");
          toast.success(rs.data.message);
          window.location.reload();
        }
      }
    }
  };

  return (
    <section className="h-full overflow relative">
      {add && <AddProduct setAdd={setAdd} />}
      {update && categorySlug && (
        <UpdateProduct
          setUpdate={setUpdate}
          item={update}
          categorySlug={categorySlug}
        />
      )}
      <div className="w-full px-4 py-4 h-full  flex flex-col">
        <div className="text-3xl flex items-center justify-between">
          <h3>Sản phẩm ({products.length})</h3>
          <div className="flex items-center justify-center">
            <button
              onClick={() => setAdd((add) => !add)}
              className="p-4 mx-2 rounded-md bg-blue-600 hover:bg-blue-800 flex items-center justify-center text-white-primary"
            >
              <AiOutlinePlus size={30} />
            </button>
            <button
              onClick={(e) => handleDelete(e)}
              className="p-4 mx-2 rounded-md bg-red-600 hover:bg-red-800 flex items-center justify-center text-white-primary"
            >
              <HiOutlineTrash size={30} />
            </button>
          </div>
        </div>
        <div className="mt-6 w-full h-[85%] border-2 border-black-primary flex flex-col">
          <div className="w-full grid grid-cols-12  p-2 h-16">
            <div className="p-2 flex items-center justify-center h-full">
              <input
                type="checkbox"
                className=" scale-150 cursor-pointer"
                onChange={(e) => {
                  //console.log(e.target.value  )
                  if (e.target.checked) {
                    setList(products);
                  } else {
                    setList([]);
                  }
                }}
              />
            </div>
            <div className="p-2 flex items-center justify-center h-fit col-span-2">
              <p>Hình ảnh</p>
            </div>
            <div className="p-2 flex items-center justify-center h-fit col-span-2">
              <p>Tiêu đề</p>
            </div>
            <div className="p-2 flex items-center justify-center h-fit col-span-2">
              <p>Danh mục</p>
            </div>
            <div className="p-2 w-full flex items-center justify-center h-fit col-span-4">
              <p>Mô tả</p>
            </div>
            <div className="p-2 w-full flex items-center justify-center h-fit col-span-1">
              <p>Hành động</p>
            </div>
          </div>
          <div className="h-full overflow-y-scroll w-full p-2">
            {products.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full h-fit p-2 grid grid-cols-12 gap-4 max-h-32 my-8 first:mt-0 last:mb-4"
                >
                  <div className="p-2 flex items-center justify-center max-h-32">
                    <input
                      type="checkbox"
                      className=" scale-150 cursor-pointer"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setList([...list, item]);
                        } else {
                          let arr = list.filter((el) => {
                            return el.id !== item.id;
                          });
                          setList(arr);
                        }
                      }}
                      checked={
                        list.find((el) => el.id === item.id) ? true : false
                      }
                    />
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-2">
                    <img
                      src={convertImgs(item.img)[0]}
                      alt=""
                      className="h-32 w-full"
                    />
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-2 text-center">
                    <p>{item.title}</p>
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-2">
                    <p>{item.slug}</p>
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-4 element">
                    <p>{item.mini_content}</p>
                  </div>
                  {/* <div className="p-2 flex items-center justify-center max-h-32 col-span-3 element">
                    <p
                      dangerouslySetInnerHTML={{ __html: item.main_content }}
                    ></p>
                  </div> */}
                  <div className="p-2 w-full flex items-center justify-center max-h-32 col-span-1">
                    <button
                      onClick={() => {
                        setUpdate(item);
                        setCategorySlug(item.slug);
                      }}
                      className="p-4 mx-2 rounded-md bg-blue-600 hover:bg-blue-800 flex items-center justify-center text-white-primary"
                    >
                      <AiOutlineTool size={30} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const AddProduct = ({ setAdd }) => {
  // const module = {
  //   toolbar: toolbarOptions,
  // };
  const [category, setCategory] = useState([]);

  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState("");
  const [title, setTitle] = useState("");

  const [categoryId, setCategoryId] = useState("");
  const [minicontent, setMinicontent] = useState("");
  const [maincontent, setMaincontent] = useState("");

  const [errImg, setErrImg] = useState(false);
  const [errTitle, setErrTitle] = useState(false);

  const [errMiniContent, setErrMiniContent] = useState(false);
  const [errMainContent, setErrMainContent] = useState(false);

  const editor = useRef(null);
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const imgRef = useRef(null);

  useEffect(() => {
    const getCategory = async () => {
      let categorys_ = await getAllCategory();
      //console.log(categorys_[0]);
      setCategory(categorys_[0]);
      setCategoryId(categorys_[0][0].id);
    };
    getCategory();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (img === "") {
      setErrImg(true);
      toast.error("Hình ảnh không được để trống");
      return null;
    }
    if (title === "") {
      setErrTitle(true);
      toast.error("Tiêu đề không được để trống");
      return null;
    }

    if (minicontent === "") {
      setErrMiniContent(true);
      toast.error("Mô tả sản phẩm không được để trống");
      return null;
    }
    if (maincontent === "") {
      setErrMainContent(true);
      toast.error("Nội dung sản phẩm không được để trống");
      return null;
    }
    let slug = convertSlug(title);
    let fileimg = img;
    let rs = await addProduct(
      fileimg,
      imgs,
      title,
      slug,
      minicontent,
      maincontent,
      categoryId
    );
    if (rs.data.code === 500) {
      toast.error(rs.data.message);
    } else {
      toast.success(rs.data.message);
    }
  };

  return (
    <div className=" absolute w-full h-full bg-white top-0 left-0 z-50 p-4 flex flex-col gap-4">
      <h3 className="text-xl font-semibold p-2 py-4 bg-gray-primary relative">
        Tạo mới sản phẩm
        <p
          onClick={() => setAdd(false)}
          className=" absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center gap-2 cursor-pointer hover:text-red-primary"
        >
          Quay lại
          <IoReturnUpBackOutline />
        </p>
      </h3>
      <form
        action="/quan-tri-vien/san-pham"
        onSubmit={(e) => handleAdd(e)}
        className="w-[calc(100%)] h-full overflow-y-scroll no-scrollbar"
        encType="multipart/form-data"
      >
        <div className="w-full flex flex-col gap-4">
          {/* img */}
          <div className="">
            <p className="text-lg font-semibold flex items-center">Hình ảnh </p>
            <div className="w-full relative">
              <input
                ref={imgRef}
                onChange={(e) => {
                  if (errImg) setErrImg(false);
                  let arr = [];
                  Array.prototype.forEach.call(e.target.files, (file) => {
                    arr.push(file);
                  });
                  setImgs(arr);
                  setImg(e.target.files);
                }}
                accept="image/*"
                type="file"
                multiple={true}
                className={
                  errImg
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-20"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-20"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => {
                  setImg("");
                  imgRef.current.value = "";
                }}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errImg && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
            {imgs !== "" && (
              <div className={`grid grid-cols-12 gap-2 h-16 my-4`}>
                {imgs.map((item, index) => {
                  return (
                    <div key={index}>
                      <img
                        className="max-w-full h-16 col-span-1 block"
                        src={URL.createObjectURL(item)}
                        alt={`Ảnh thứ ${index + 1}`}
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          {/* title */}
          <div className="">
            <p className="text-lg font-semibold">Tiêu đề sản phẩm</p>
            <div className="w-full relative  mt-2">
              <input
                value={title}
                onChange={(e) => {
                  //console.log(convertSlug(title));
                  if (errTitle) setErrTitle(false);
                  setTitle(e.target.value);
                }}
                type="text"
                className={
                  errTitle
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-16"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => setTitle("")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errTitle && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
          </div>
          {/* category */}
          <div className="">
            <p className="text-lg font-semibold">Danh mục sản phẩm</p>
            <div className="w-full relative  mt-2">
              <select
                onChange={(e) => {
                  setCategoryId(e.target.value);
                }}
                type="text"
                className={
                  errImg
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-16"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
                }
              >
                {category.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.slug}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/* slug */}
          <div className="">
            <p className="text-lg font-semibold">Đường dẫn sản phẩm</p>
            <div className="w-full relative  mt-2">
              <input
                value={convertSlug(title)}
                type="text"
                className="w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
              />
            </div>
          </div>
          {/* mini content */}
          <div className="">
            <p className="text-lg font-semibold">Mô tả sản phẩm</p>
            <div className="w-full relative  mt-2">
              <textarea
                rows={4}
                value={minicontent}
                onChange={(e) => {
                  if (errMiniContent) setErrMiniContent(false);
                  setMinicontent(e.target.value);
                }}
                type="text"
                className={
                  errMiniContent
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-16"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => setMinicontent("")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
          </div>
          {/* main content */}
          <div className="">
            <p className="text-lg font-semibold">Nội dung sản phẩm</p>
            <div className="w-full relative  mt-2">
              <div className="w-full min-h-64 mb-4">
                <JoditEditor
                  ref={editor}
                  value={maincontent}
                  //config={config}
                  tabIndex={1} // tabIndex of textarea
                  //onBlur={(newContent) => setMaincontent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => setMaincontent(newContent)}
                />
              </div>
            </div>
          </div>
          {maincontent && (
            <div className="w-full p-4 content text-black-second">
              <div className="w-full mx-auto">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#404040",
                    "--swiper-pagination-color": "#404040",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {imgs.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="w-full h-full">
                          {" "}
                          <img
                            src={URL.createObjectURL(item)}
                            className="aspect-square h-full mx-auto"
                            alt="img"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {imgs.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div>
                          {" "}
                          <img
                            src={URL.createObjectURL(item)}
                            className="aspect-square h-full mx-auto"
                            alt="img"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h1 className="py-5 font-semibold text-3xl">{title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: maincontent }}
                className="w-full"
              ></div>
            </div>
          )}
          <button
            type="submit"
            className=" border px-6 py-3 mb-4 rounded-md font-semibold text-white-primary  bg-black-primary"
          >
            Tạo sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};

const UpdateProduct = ({ setUpdate, item, categorySlug }) => {
  const imgRef = useRef(null);
  const [category, setCategory] = useState([]);
  //console.log(item.id);
  const [isChange, setIsChange] = useState(false);
  const [img, setImg] = useState(item.img);
  const [imgs, setImgs] = useState(convertImgs(item.img));
  const [title, setTitle] = useState(item.title);
  const [categoryId, setCategoryId] = useState(item.id_category);
  const [minicontent, setMinicontent] = useState(item.mini_content);
  const [maincontent, setMaincontent] = useState(item.main_content);

  const [errImg, setErrImg] = useState(false);
  const [errTitle, setErrTitle] = useState(false);

  const [errMiniContent, setErrMiniContent] = useState(false);
  const [errMainContent, setErrMainContent] = useState(false);

  const editor = useRef(null);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const getCategory = async () => {
      let categorys_ = await getAllCategory();
      setCategory(categorys_[0]);
      setCategoryId(categorys_[0][0].id);
    };
    getCategory();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (isChange && img === "") {
      setErrImg(true);
      toast.error("Hình ảnh không được để trống");
      return null;
    }
    if (title === "") {
      setErrTitle(true);
      toast.error("Tiêu đề không được để trống");
      return null;
    }

    if (minicontent === "") {
      setErrMiniContent(true);
      toast.error("Mô tả sản phẩm không được để trống");
      return null;
    }
    if (maincontent === "") {
      setErrMainContent(true);
      toast.error("Nội dung sản phẩm không được để trống");
      return null;
    }
    let slug = convertSlug(title);
    let id = item.id;
    let change = isChange;
    let mini_content = minicontent;
    let main_content = maincontent;
    let rs = await updateProduct(
      id,
      img,
      title,
      slug,
      mini_content,
      main_content,
      categoryId,
      change
    );

    if (rs.data.code === 500) {
      toast.error(rs.data.message);
    } else {
      toast.success(rs.data.message);
    }
  };

  return (
    <div className=" absolute w-full h-full bg-white top-0 left-0 z-50 p-4 flex flex-col gap-4">
      <h3 className="text-xl font-semibold p-2 py-4 bg-gray-primary relative">
        Cập nhập sản phẩm
        <p
          onClick={() => setUpdate(false)}
          className=" absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center gap-2 cursor-pointer hover:text-red-primary"
        >
          Quay lại
          <IoReturnUpBackOutline />
        </p>
      </h3>
      <form
        action="/quan-tri-vien/san-pham"
        onSubmit={(e) => handleUpdate(e)}
        className="w-[calc(100%)] h-full overflow-y-scroll no-scrollbar"
      >
        <div className="w-full flex flex-col gap-4">
          {/* img */}
          <div className="">
            <p className="text-lg font-semibold flex items-center">Hình ảnh </p>
            <div className="w-full relative">
              <input
                ref={imgRef}
                onChange={(e) => {
                  if (errImg) setErrImg(false);
                  let arr = [];
                  Array.prototype.forEach.call(e.target.files, (file) => {
                    arr.push(file);
                  });
                  //console.log(arr);
                  setImgs(arr);
                  setImg(e.target.files);
                  setIsChange(true);
                }}
                accept="image/*"
                type="file"
                multiple={true}
                className={
                  errImg
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-20"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-20"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => {
                  setImg("");
                  setImgs([]);
                  imgRef.current.value = "";
                }}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errImg && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
            <div className={`grid grid-cols-12 gap-2 h-16 my-4`}>
              {imgs.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      className="max-w-full h-16 col-span-1 block aspect-square"
                      src={isChange ? URL.createObjectURL(item) : item}
                      alt={`Ảnh thứ ${index + 1}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* title */}
          <div className="">
            <p className="text-lg font-semibold">Tiêu đề sản phẩm</p>
            <div className="w-full relative  mt-2">
              <input
                value={title}
                onChange={(e) => {
                  //console.log(convertSlug(title));
                  if (errTitle) setErrTitle(false);
                  setTitle(e.target.value);
                }}
                type="text"
                className={
                  errTitle
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-16"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => setTitle("")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errTitle && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
          </div>
          {/* category */}
          <div className="">
            <p className="text-lg font-semibold">Danh mục sản phẩm</p>
            <div className="w-full relative  mt-2">
              <select
                onChange={(e) => {
                  setCategoryId(e.target.value);
                }}
                type="text"
                className="w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
              >
                <option value="" selected disabled hidden>
                  {categorySlug}
                </option>
                {category.map((item, index) => {
                  return (
                    <option key={index} value={item.id}>
                      {item.slug}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          {/* slug */}
          <div className="">
            <p className="text-lg font-semibold">Đường dẫn sản phẩm</p>
            <div className="w-full relative  mt-2">
              <input
                value={convertSlug(title)}
                type="text"
                className="w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
              />
            </div>
          </div>
          {/* mini content */}
          <div className="">
            <p className="text-lg font-semibold">Mô tả sản phẩm</p>
            <div className="w-full relative  mt-2">
              <textarea
                rows={4}
                value={minicontent}
                onChange={(e) => {
                  if (errMiniContent) setErrMiniContent(false);
                  setMinicontent(e.target.value);
                }}
                type="text"
                className={
                  errMiniContent
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-16"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => setMinicontent("")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
          </div>
          {/* main content */}
          <div className="">
            <p className="text-lg font-semibold">Nội dung sản phẩm</p>
            <div className="w-full relative  mt-2">
              <div className="w-full min-h-64 mb-4">
                <JoditEditor
                  ref={editor}
                  value={maincontent}
                  //config={config}
                  tabIndex={1} // tabIndex of textarea
                  //onBlur={(newContent) => setMaincontent(newContent)} // preferred to use only this option to update the content for performance reasons
                  onChange={(newContent) => setMaincontent(newContent)}
                />
              </div>
            </div>
          </div>
          {maincontent && (
            <div className="w-full p-4 content text-black-second">
              <div className="w-full mx-auto">
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#404040",
                    "--swiper-pagination-color": "#404040",
                  }}
                  spaceBetween={10}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {imgs.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div className="w-full h-full">
                          {" "}
                          <img
                            src={isChange ? URL.createObjectURL(item) : item}
                            className="aspect-square h-full mx-auto"
                            alt="img"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {imgs.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <div>
                          {" "}
                          <img
                            src={isChange ? URL.createObjectURL(item) : item}
                            className="aspect-square h-full mx-auto"
                            alt="img"
                          />
                        </div>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <h1 className="py-5 font-semibold text-3xl">{title}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: maincontent }}
                className="w-full"
              ></div>
            </div>
          )}
          <button
            type="submit"
            className=" border px-6 py-3 mb-4 rounded-md font-semibold text-white-primary  bg-black-primary"
          >
            Cập nhập sản phẩm
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsAdmin;
