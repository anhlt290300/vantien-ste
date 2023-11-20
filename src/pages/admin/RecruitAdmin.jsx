import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";

import { HiOutlineTrash } from "react-icons/hi";
import { IoRemove, IoReturnUpBackOutline } from "react-icons/io5";
import { AiOutlineTool, AiOutlinePlus } from "react-icons/ai";
import JoditEditor from "jodit-react";
import {
  addRecruit,
  deleteRecruit,
  getAllRecruit,
  updateRecruit,
} from "../../api/recruit";
import { useLoaderData } from "react-router-dom";
import { convertSlug } from "../../utils/convertSlug";
import { convertImgs } from "../../utils/convertImgs";

const RecruitAdmin = () => {
  const [recruit, setRecruit] = useState(useLoaderData());
  const [list, setList] = useState([]);
  const [update, setUpdate] = useState(null);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    const getData = async () => {
      let item = await getAllRecruit();
      setRecruit(item[0]);
    };
    if (!add || update === null) {
      getData();
    }
  }, [add, update]);

  const handleDelete = async (e) => {
    e.preventDefault();
    if (recruit.length === 0) {
      toast.error("Bạn chưa có tin tuyển dụng nào");
    } else {
      if (list.length === 0) {
        toast.error("Bạn chưa chọn danh mục nào");
      } else {
        //console.log(list)
        let rs = await deleteRecruit(list);
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
      {add && <AddRecruit setAdd={setAdd} />}
      {update && <UpdateRecruit setUpdate={setUpdate} item={update} />}
      <div className="w-full px-4 py-4 h-full  flex flex-col">
        <div className="text-3xl flex items-center justify-between">
          <h3>Tin tuyển dụng ({recruit.length})</h3>
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
                    setList(recruit);
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
              <p>Ngày đăng</p>
            </div>
            <div className="p-2 w-full flex items-center justify-center h-fit col-span-4">
              <p>Mô tả</p>
            </div>
            <div className="p-2 w-full flex items-center justify-center h-fit col-span-1">
              <p>Hành động</p>
            </div>
          </div>
          <div className="h-full overflow-y-scroll w-full p-2">
            {recruit.map((item, index) => {
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
                    <p
                      dangerouslySetInnerHTML={{ __html: item.main_content }}
                    ></p>
                  </div>
                  <div className="p-2 w-full flex items-center justify-center max-h-32 col-span-1">
                    <button
                      onClick={() => {
                        setUpdate(item);
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

const AddRecruit = ({ setAdd }) => {
  const date = new Date();
  const [img, setImg] = useState([
    {
      index: 1,
      src: "",
    },
  ]);
  const [title, setTitle] = useState("");

  const [minicontent, setMinicontent] = useState("");
  const [maincontent, setMaincontent] = useState("");

  const [errImg, setErrImg] = useState(false);
  const [errTitle, setErrTitle] = useState(false);

  const [errMiniContent, setErrMiniContent] = useState(false);
  const [errMainContent, setErrMainContent] = useState(false);

  const editor = useRef(null);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!img.find((el) => el.src !== "")) {
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
      toast.error("Mô tả tin tức không được để trống");
      return null;
    }
    if (maincontent === "") {
      setErrMainContent(true);
      toast.error("Nội dung tin tức không được để trống");
      return null;
    }
    let slug = convertSlug(title);
    let date_ = `${date.getDate()}-${
      date.getMonth() + 1
    }-${date.getFullYear()}`;
    let imgs = img.map((el) => el.src);
    let rs = await addRecruit(
      title,
      slug,
      minicontent,
      maincontent,
      imgs,
      date_
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
        Tạo mới tin tuyển dụng
        <p
          onClick={() => setAdd(false)}
          className=" absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center gap-2 cursor-pointer hover:text-red-primary"
        >
          Quay lại
          <IoReturnUpBackOutline />
        </p>
      </h3>
      <form
        action="/quan-tri-vien/tuyen-dung"
        onSubmit={(e) => handleAdd(e)}
        className="w-[calc(100%)] h-full overflow-y-scroll no-scrollbar"
      >
        <div className="w-full flex flex-col gap-4">
          {/* img */}
          <div className="">
            <p className="text-lg font-semibold flex items-center">
              Hình ảnh (nhập đường dẫn url){" "}
              <span
                onClick={() => {
                  if (img.length < 12) {
                    setImg([
                      ...img,
                      {
                        index: img[img.length - 1].index + 1,
                        src: "",
                      },
                    ]);
                  } else toast.error("Tối đa 12 ảnh");
                }}
                className=" cursor-pointer ml-4 flex py-2 px-5 bg-black-primary text-white-primary"
              >
                <AiOutlinePlus />
              </span>
            </p>
            <div className="w-full first:mt-2 ">
              {img.map((item, index) => {
                return (
                  <div key={index} className="w-full relative mt-4">
                    <input
                      value={item.src}
                      onChange={(e) => {
                        if (errImg) setErrImg(false);
                        let arr = img.map((el) => {
                          if (item.index === el.index) el.src = e.target.value;
                          return el;
                        });
                        setImg(arr);
                      }}
                      placeholder={`Nhập link ảnh ...`}
                      type="text"
                      className={
                        errImg
                          ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-20"
                          : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-20"
                      }
                    />
                    <HiOutlineTrash
                      size={20}
                      onClick={() => {
                        let arr = img.map((el) => {
                          if (item.index === el.index) el.src = "";
                          return el;
                        });
                        setImg(arr);
                      }}
                      className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
                    />
                    <IoRemove
                      size={20}
                      onClick={() => {
                        let arr = img.filter((el) => el.index !== item.index);
                        setImg(arr);
                      }}
                      className={
                        index === 0
                          ? "hidden absolute right-10 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
                          : " absolute right-10 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
                      }
                    />
                  </div>
                );
              })}
            </div>
            {errImg && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
            <div className={`grid grid-cols-12 gap-2 h-16 my-4`}>
              {img.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      className="max-w-full h-16 col-span-1 block"
                      src={item.src}
                      alt={`Ảnh thứ ${index + 1}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* title */}
          <div className="">
            <p className="text-lg font-semibold">Tiêu đề tin tuyển dụng</p>
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

          {/* slug */}
          <div className="">
            <p className="text-lg font-semibold">Đường dẫn tin tuyển dụng</p>
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
            <p className="text-lg font-semibold">Mô tả tin tuyển dụng</p>
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
            <p className="text-lg font-semibold">Nội dung tin tuyển dụng</p>
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
            Tạo tin tuyển dụng
          </button>
        </div>
      </form>
    </div>
  );
};

const UpdateRecruit = ({ setUpdate, item }) => {
  //console.log(item.id);

  const [img, setImg] = useState([...convertImgs(item.img)]);
  const [title, setTitle] = useState(item.title);

  const [minicontent, setMinicontent] = useState(item.mini_content);
  const [maincontent, setMaincontent] = useState(item.main_content);

  const [errImg, setErrImg] = useState(false);
  const [errTitle, setErrTitle] = useState(false);

  const [errMiniContent, setErrMiniContent] = useState(false);
  const [errMainContent, setErrMainContent] = useState(false);

  const editor = useRef(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    if (img.filter((el) => el !== "").length !== img.length) {
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
      toast.error("Mô tả tin tuyển dụng không được để trống");
      return null;
    }
    if (maincontent === "") {
      setErrMainContent(true);
      toast.error("Nội dung tin tuyển dụng không được để trống");
      return null;
    }
    let slug = convertSlug(title);
    let id = item.id;

    let rs = await updateRecruit(
      id,
      img,
      title,
      slug,
      minicontent,
      maincontent
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
        Cập nhập tin tuyển dụng
        <p
          onClick={() => setUpdate(false)}
          className=" absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center gap-2 cursor-pointer hover:text-red-primary"
        >
          Quay lại
          <IoReturnUpBackOutline />
        </p>
      </h3>
      <form
        action="/quan-tri-vien/tuyen-dung"
        onSubmit={(e) => handleUpdate(e)}
        className="w-[calc(100%)] h-full overflow-y-scroll no-scrollbar"
      >
        <div className="w-full flex flex-col gap-4">
          {/* img */}
          <div className="">
            <p className="text-lg font-semibold flex items-center">
              Hình ảnh (nhập đường dẫn url){" "}
              <span
                onClick={() => {
                  if (img.length < 12) {
                    setImg([...img, ""]);
                  } else toast.error("Tối đa 12 ảnh");
                }}
                className=" cursor-pointer ml-4 flex py-2 px-5 bg-black-primary text-white-primary"
              >
                <AiOutlinePlus />
              </span>
            </p>
            <div className="w-full first:mt-2 ">
              {img.map((item, index) => {
                return (
                  <div key={index} className="w-full relative mt-4">
                    <input
                      value={item}
                      onChange={(e) => {
                        if (errImg) setErrImg(false);
                        let arr = img.map((el, index2) => {
                          if (index === index2) el = e.target.value;
                          return el;
                        });
                        setImg(arr);
                      }}
                      placeholder={`Nhập link ảnh ...`}
                      type="text"
                      className={
                        errImg && item === ""
                          ? "w-full border border-red-primary rounded-md outline-red-primary p-2 pr-20"
                          : "w-full border border-black-primary rounded-md outline-blue-600 p-2 pr-20"
                      }
                    />
                    <HiOutlineTrash
                      size={20}
                      onClick={() => {
                        let arr = img.map((el, index2) => {
                          if (index === index2) el = "";
                          return el;
                        });
                        setImg(arr);
                      }}
                      className=" absolute right-4 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
                    />
                    <IoRemove
                      size={20}
                      onClick={() => {
                        let arr = img.filter((el, index2) => index !== index2);
                        setImg(arr);
                        setErrImg(false);
                      }}
                      className={
                        index === 0
                          ? "hidden absolute right-10 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
                          : " absolute right-10 top-1/2 -translate-y-1/2 h-full hover:text-red-primary cursor-pointer"
                      }
                    />
                  </div>
                );
              })}
            </div>
            {errImg && (
              <p className=" text-red-primary font-semibold">
                ! Không để trống
              </p>
            )}
            <div className={`grid grid-cols-12 gap-2 h-16 my-4`}>
              {img.map((item, index) => {
                return (
                  <div key={index}>
                    <img
                      className="max-w-full h-16 col-span-1 block"
                      src={item}
                      alt={`Ảnh thứ ${index + 1}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>
          {/* title */}
          <div className="">
            <p className="text-lg font-semibold">Tiêu đề tin tuyển dụng</p>
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

          {/* slug */}
          <div className="">
            <p className="text-lg font-semibold">Đường dẫn tin tuyển dụng</p>
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
            <p className="text-lg font-semibold">Mô tả tin tuyển dụng</p>
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
            <p className="text-lg font-semibold">Nội dung tin tuyển dụng</p>
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
              <h1 className="py-5 font-semibold">{title}</h1>
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
            Cập nhập tin tuyển dụng
          </button>
        </div>
      </form>
    </div>
  );
};

export default RecruitAdmin;
