import axios from "axios";

const addNews = async (title, slug, minicontent, maincontent, img, date_) => {
  //console.log("title" + title);
  let mini_content = minicontent;
  let main_content = maincontent;
  let date = date_;
  return axios.post("/api/addnews", {
    img,
    title,
    slug,
    mini_content,
    main_content,
    date,
  });
};

const getAllNews = async () => {
  return (await axios.get("/api/getAllnews")).data;
};

const getNewsBySlug = async (slug) => {
  return (
    await axios.post("/api/getnewsByslug", {
      slug,
    })
  ).data;
};

const updateNews = async (
  id,
  img,
  title,
  slug,
  maincontent,
  minicontent,
  date_
) => {
  // console.log(id_category);
  // console.log(img);
  let mini_content = minicontent;
  let main_content = maincontent;
  let date = date_;
  return axios.post("/api/updatenews", {
    id,
    img,
    title,
    slug,
    mini_content,
    main_content,
    date,
  });
};

const deleteNews = async (listItem) => {
  //console.log(listItem);
  return axios.post("/api/deletenews", {
    listitem: listItem,
    count: listItem.length,
  });
};

export { addNews, getAllNews, getNewsBySlug, updateNews, deleteNews };
