import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { getAllProduct } from "../../assets/static-data/products";
import { HiOutlineTrash } from "react-icons/hi";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { AiOutlineTool, AiOutlinePlus } from "react-icons/ai";
import JoditEditor from "jodit-react";
import { getAllCategory } from "../../api/category";
import { addProduct } from "../../api/product";
import { useLoaderData } from "react-router-dom";

const ProductsAdmin = () => {
  const [products, setProducts] = useState(useLoaderData());
  console.log(products)
  const [update, setUpdate] = useState(null);
  const [add, setAdd] = useState(false);
  return (
    <section className="h-full overflow relative">
      {add && <AddProduct setAdd={setAdd} />}
      {/* {update && <UpdateCategory setUpdate={setUpdate} item={update} />} */}
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
              // onClick={(e) => handleDelete(e)}
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
                    setList(categorys);
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
            <div className="p-2 flex items-center justify-center h-fit col-span-1">
              <p>Danh mục</p>
            </div>
            <div className="p-2 w-full flex items-center justify-center h-fit col-span-2">
              <p>Mô tả</p>
            </div>
            <div className="p-2 w-full flex items-center justify-center h-fit col-span-3">
              <p>Nội dung</p>
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
                      // checked={
                      //   list.find((el) => el.id === item.id) ? true : false
                      // }
                    />
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-2">
                    <img src={item.img} alt="" className="h-32 w-full" />
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-2 text-center">
                    <p>{item.title}</p>
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-1">
                    <p>{item.id_category}</p>
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-2 element">
                    <p>{item.mini_content}</p>
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-3 element">
                    <p dangerouslySetInnerHTML={{ __html: item.main_content }}></p>
                  </div>
                  <div className="p-2 w-full flex items-center justify-center max-h-32 col-span-1">
                    <button
                      onClick={() => setUpdate(item)}
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

  const [img, setImg] = useState(
    "https://www.milwaukeetool.com.vn/wp-content/uploads/2022/08/M18-FPD3_Hero-1-1000x1000.png"
  );
  const [title, setTitle] = useState("KHOAN ĐỘNG LỰC M18 FPD3");
  const [slug, setSlug] = useState("khoan-dong-luc-m18-fpd3");
  const [categoryId, setCategoryId] = useState("milwaukee");
  const [minicontent, setMinicontent] = useState("");
  const [maincontent, setMaincontent] = useState("");

  const [errImg, setErrImg] = useState(false);
  const [errTitle, setErrTitle] = useState(false);
  const [errSlug, setErrSlug] = useState(false);
  const [errContent, setErrContent] = useState(false);

  const editor = useRef(null);

  useEffect(() => {
    const getCategory = async () => {
      let categorys_ = await getAllCategory();
      console.log(categorys_[0]);
      setCategory(categorys_[0]);
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
    if (slug === "") {
      setErrSlug(true);
      toast.error("Đường dẫn không được để trống");
      return null;
    }
    if (minicontent === "") {
      setErrContent(true);
      toast.error("Mô tả không được để trống");
      return null;
    }
    let rs = await addProduct(
      img,
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
      >
        <div className="w-full flex flex-col gap-4">
          {/* img */}
          <div className="">
            <p className="text-lg font-semibold">
              Hình ảnh (nhập đường dẫn url)
            </p>
            <div className="w-full relative  mt-2">
              <input
                value={img}
                onChange={(e) => {
                  if (errImg) setErrImg(false);
                  setImg(e.target.value);
                }}
                type="text"
                className={
                  errImg
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-16"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => setImg("")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errImg && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
            <img
              src={img}
              alt="Hình ảnh sản phẩm"
              className=" mt-4 w-fit h-fit border border-black-primary p-4"
            />
          </div>
          {/* title */}
          <div className="">
            <p className="text-lg font-semibold">Tiêu đề sản phẩm</p>
            <div className="w-full relative  mt-2">
              <input
                value={title}
                onChange={(e) => {
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
                  errSlug
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
            {errSlug && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
          </div>
          {/* slug */}
          <div className="">
            <p className="text-lg font-semibold">Đường dẫn sản phẩm</p>
            <div className="w-full relative  mt-2">
              <input
                value={slug}
                onChange={(e) => {
                  if (errSlug) setErrSlug(false);
                  setSlug(e.target.value);
                }}
                type="text"
                className={
                  errSlug
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-16"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => setSlug("")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errSlug && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
          </div>
          {/* mini content */}
          <div className="">
            <p className="text-lg font-semibold">Mô tả sản phẩm</p>
            <div className="w-full relative  mt-2">
              <textarea
                rows={4}
                value={minicontent}
                onChange={(e) => {
                  if (errContent) setErrContent(false);
                  setMinicontent(e.target.value);
                }}
                type="text"
                className={
                  errContent
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
            {errSlug && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
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
            {errSlug && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
          </div>
          {maincontent && <div>{maincontent}</div>}
          <button
            type="submit"
            className=" border px-6 py-3 mb-4 rounded-md font-semibold text-white-primary bg-black-primary"
          >
            Tạo danh mục
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsAdmin;
