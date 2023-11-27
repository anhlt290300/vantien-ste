import axios from "axios";

const addCategory = async (img, title, slug, content) => {
  const formData = new FormData();
  formData.append("file", img);
  formData.append("title", title);
  formData.append("slug", slug);
  formData.append("content", content);
  return axios.post("/api/addcategory", formData);
};

const getAllCategory = async () => {
  return (await axios.get("/api/getAllcategory")).data;
};

const getCategoryBySlug = async (slug) => {
  return (
    await axios.post("/api/getcategoryBySlug", {
      slug,
    })
  ).data;
};

const updateCategory = async (id, img, title, slug, content, changeImg) => {
  const formData = new FormData();
  formData.append("id", id);
  formData.append("title", title);
  formData.append("slug", slug);
  formData.append("content", content);
  formData.append("file", img);
  console.log(id)
  if (changeImg) {
    return axios.post("/api/updatecategoryChangeimg", formData);
  } else {
    return axios.post("/api/updatecategoryNotchangeimg", {
      id,
      title,
      slug,
      content,
    });
  }
};

const deleteCategory = async (listItem) => {
  console.log(listItem.length);
  return axios.post("/api/deletecategory", {
    listitem: listItem,
    count: listItem.length,
  });
};

export {
  addCategory,
  getAllCategory,
  updateCategory,
  deleteCategory,
  getCategoryBySlug,
};
