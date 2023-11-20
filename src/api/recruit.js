import axios from "axios";

const addRecruit = async (
  title,
  slug,
  minicontent,
  maincontent,
  img,
  date_
) => {
  //console.log("title" + title);

  let mini_content = minicontent;
  let main_content = maincontent;
  let date = date_;
  return axios.post("/api/addrecruit", {
    img,
    title,
    slug,
    mini_content,
    main_content,
    date,
  });
};

const getAllRecruit = async () => {
  return (await axios.get("/api/getAllrecruit")).data;
};

const getRecruitBySlug = async (slug) => {
  return (
    await axios.post("/api/getrecruitByslug", {
      slug,
    })
  ).data;
};

const updateRecruit = async (
  id,
  img,
  title,
  slug,
  main_content,
  mini_content,
  date_
) => {
  // console.log(id_category);
  // console.log(img);

  let date = date_;
  return axios.post("/api/updaterecruit", {
    id,
    img,
    title,
    slug,
    main_content,
    mini_content,
    date,
  });
};

const deleteRecruit = async (listItem) => {
  //console.log(listItem);
  return axios.post("/api/deleterecruit", {
    listitem: listItem,
    count: listItem.length,
  });
};

export {
  addRecruit,
  getAllRecruit,
  getRecruitBySlug,
  updateRecruit,
  deleteRecruit,
};
