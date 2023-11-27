import React, { useEffect, useRef, useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { AiOutlineTool, AiOutlinePlus } from "react-icons/ai";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../../api/category";
import { useLoaderData } from "react-router-dom";

const CategorysAdmin = () => {
  let [categorys, setCategorys] = useState(useLoaderData());
  const [update, setUpdate] = useState(null);
  const [add, setAdd] = useState(false);
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let item = await getAllCategory();
      setCategorys(item[0]);
    };
    if (!add || update === null) {
      getData();
    }
  }, [add, update]);

  // useEffect(() => console.log(list), [list]);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (categorys.length === 0) {
      toast.error("Bạn chưa có danh mục nào");
    } else {
      if (list.length === 0) {
        toast.error("Bạn chưa chọn danh mục nào");
      } else {
        let rs = await deleteCategory(list);
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
      {add && <AddCategory setAdd={setAdd} />}
      {update && <UpdateCategory setUpdate={setUpdate} item={update} />}
      <div className="w-full px-4 py-4 h-full  flex flex-col">
        <div className="text-3xl flex items-center justify-between">
          <h3>Danh mục ({categorys.length})</h3>
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
                    setList(categorys);
                  } else {
                    setList([]);
                  }
                }}
              />
            </div>
            <div className="p-2 flex items-center justify-center h-fit col-span-3">
              <p>Hình ảnh</p>
            </div>
            <div className="p-2 flex items-center justify-center h-fit col-span-2">
              <p>Tiêu đề</p>
            </div>
            <div className="p-2 flex items-center justify-center h-fit col-span-4">
              <p>Mô tả</p>
            </div>
            <div className="p-2 w-full flex items-center justify-center h-fit col-span-2">
              <p>Hành động</p>
            </div>
          </div>
          <div className="h-full overflow-y-scroll w-full p-2">
            {categorys.map((item, index) => {
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
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-3">
                    <img src={item.img} alt="" className="h-32 w-full" />
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-2 text-center">
                    <p>{item.title}</p>
                  </div>
                  <div className="p-2 flex items-center justify-center max-h-32 col-span-4 element">
                    <p>{item.content}</p>
                  </div>
                  <div className="p-2 w-full flex items-center justify-center max-h-32 col-span-2">
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

const AddCategory = ({ setAdd }) => {
  const imgRef = useRef();
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const [errImg, setErrImg] = useState(false);
  const [errTitle, setErrTitle] = useState(false);
  const [errSlug, setErrSlug] = useState(false);
  const [errContent, setErrContent] = useState(false);
  const [img, setImg] = useState("");
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
    if (content === "") {
      setErrContent(true);
      toast.error("Mô tả không được để trống");
      return null;
    }
    let rs = await addCategory(img, title, slug, content);
    if (rs.data.code === 500) {
      toast.error(rs.data.message);
    } else {
      toast.success(rs.data.message);
    }
  };

  return (
    <div className=" absolute w-full h-full bg-white top-0 left-0 z-50 p-4 flex flex-col gap-4">
      <h3 className="text-xl font-semibold p-2 py-4 bg-gray-primary relative">
        Tạo mới danh mục
        <p
          onClick={() => setAdd(false)}
          className=" absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center gap-2 cursor-pointer hover:text-red-primary"
        >
          Quay lại
          <IoReturnUpBackOutline />
        </p>
      </h3>
      <form
        action="/quan-tri-vien/danh-muc"
        onSubmit={(e) => handleAdd(e)}
        className="w-[calc(100%)] h-full overflow-y-scroll no-scrollbar"
      >
        <div className="w-full flex flex-col gap-4">
          {/* img */}
          <div className="">
            <p className="text-lg font-semibold">Hình ảnh</p>
            <div className="w-full relative  mt-2">
              <input
                ref={imgRef}
                onChange={(e) => {
                  if (errImg) setErrImg(false);
                  setImg(e.target.files[0]);
                  //console.log(e.target.files[0])
                }}
                type="file"
                accept="image/*"
                className={
                  errImg
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-16"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => (imgRef.current.value = "")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errImg && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
            <img
              src={img !== "" ? URL.createObjectURL(img) : null}
              alt="Hình ảnh danh mục"
              className=" mt-4 w-fit h-fit border border-black-primary p-4"
            />
          </div>
          {/* title */}
          <div className="">
            <p className="text-lg font-semibold">Tiêu đề danh mục</p>
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
          {/* slug */}
          <div className="">
            <p className="text-lg font-semibold">Đường dẫn danh mục</p>
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
          {/* content */}
          <div className="">
            <p className="text-lg font-semibold">Mô tả danh mục</p>
            <div className="w-full relative  mt-2">
              <textarea
                rows={4}
                value={content}
                onChange={(e) => {
                  if (errContent) setErrContent(false);
                  setContent(e.target.value);
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
                onClick={() => setContent("")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errSlug && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
          </div>
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

const UpdateCategory = ({ item, setUpdate }) => {
  const img_ = item.img;
  const [img, setImg] = useState(item?.img);
  const [title, setTitle] = useState(item.title);
  const [slug, setSlug] = useState(item.slug);
  const [content, setContent] = useState(item.content);
  const [errImg, setErrImg] = useState(false);
  const [errTitle, setErrTitle] = useState(false);
  const [errSlug, setErrSlug] = useState(false);
  const [errContent, setErrContent] = useState(false);
  const imgRef = useRef(null);
  const handleUpdate = async (e) => {
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
    if (content === "") {
      setErrContent(true);
      toast.error("Mô tả không được để trống");
      return null;
    }

    if (img !== img_) {
      let changeImg = true;
      let rs = await updateCategory(
        item.id,
        img,
        title,
        slug,
        content,
        changeImg
      );
      if (rs.data.code === 500) {
        //console.log("500");
        toast.error(rs.data.message);
      } else {
        //console.log("200");
        toast.success(rs.data.message);
      }
    } else {
      let changeImg = false;
      let rs = await updateCategory(
        item.id,
        img,
        title,
        slug,
        content,
        changeImg
      );
      if (rs.data.code === 500) {
        //console.log("500");
        toast.error(rs.data.message);
      } else {
        //console.log("200");
        toast.success(rs.data.message);
      }
    }
  };

  return (
    <div className=" absolute w-full h-full bg-white top-0 left-0 z-50 p-4 flex flex-col gap-4">
      <h3 className="text-xl font-semibold p-2 py-4 bg-gray-primary relative">
        Chỉnh sửa danh mục
        <p
          onClick={() => setUpdate(null)}
          className=" absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center gap-2 cursor-pointer hover:text-red-primary"
        >
          Quay lại
          <IoReturnUpBackOutline />
        </p>
      </h3>
      <form
        action="/quan-tri-vien/danh-muc"
        onSubmit={(e) => handleUpdate(e)}
        className="w-[calc(100%)] h-full overflow-y-scroll no-scrollbar"
      >
        <div className="w-full flex flex-col gap-4">
          {/* img */}
          <div className="">
            <p className="text-lg font-semibold">
              Hình ảnh (chọn ảnh mới để cập nhập hoặc giữ nguyên)
            </p>
            <div className="w-full relative  mt-2">
              <input
                ref={imgRef}
                onChange={(e) => {
                  if (errImg) setErrImg(false);
                  setImg(e.target.files[0]);
                  //console.log(e.target.files[0])
                }}
                type="file"
                accept="image/*"
                className={
                  errImg
                    ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-16"
                    : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-16"
                }
              />
              <HiOutlineTrash
                size={20}
                onClick={() => (imgRef.current.value = "")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errImg && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
            <img
              src={img !== img_ ? URL.createObjectURL(img) : img}
              alt="Hình ảnh danh mục"
              className=" mt-4 w-fit h-fit border border-black-primary p-4"
            />
          </div>
          {/* title */}
          <div className="">
            <p className="text-lg font-semibold">Tiêu đề danh mục</p>
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
          {/* slug */}
          <div className="">
            <p className="text-lg font-semibold">Đường dẫn danh mục</p>
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
          {/* content */}
          <div className="">
            <p className="text-lg font-semibold">Mô tả danh mục</p>
            <div className="w-full relative  mt-2">
              <textarea
                rows={4}
                value={content}
                onChange={(e) => {
                  if (errContent) setErrContent(false);
                  setContent(e.target.value);
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
                onClick={() => setContent("")}
                className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
              />
            </div>
            {errSlug && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
          </div>
          <button
            type="submit"
            className=" border px-6 py-3 mb-4 rounded-md font-semibold text-white-primary bg-black-primary"
          >
            Lưu thay đổi
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategorysAdmin;
