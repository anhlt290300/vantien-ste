import axios from "axios";

const addCategory = async (img, title, slug, content) => {
  return axios.post("/api/addcategory", {
    img,
    title,
    slug,
    content,
  });
};

const getAllCategory = async () => {
  return (await axios.get("/api/getAllcategory")).data;
};

const updateCategory = async (id, img, title, slug, content) => {
  return axios.post("/api/updatecategory", {
    id,
    img,
    title,
    slug,
    content,
  });
};

const deleteCategory = async (listItem) => {
  console.log(listItem.length );
  return axios.post("/api/deletecategory", {
    listitem: listItem,
    count: listItem.length,
  });
};

export { addCategory, getAllCategory, updateCategory, deleteCategory };
