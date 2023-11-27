import axios from "axios";

const addProduct = async (
  fileimg,
  imgs,
  title,
  slug,
  mini_content,
  main_content,
  id_category
) => {
  const formData = new FormData();
  for (const file of fileimg) {
    formData.append("imgs", file);
  }
  formData.append("title", title);
  formData.append("slug", slug);
  formData.append("mini_content", mini_content);
  formData.append("main_content", main_content);
  formData.append("id_category", id_category);
  return axios.post("/api/addproduct", formData);
};

const getAllProduct = async () => {
  return (await axios.get("/api/getAllproduct")).data;
};

const getProductByCategoryId = async (id) => {
  let id_category = id;
  return (
    await axios.post("/api/getproductBycategoryid", {
      id_category,
    })
  ).data;
};

const getProductBySlug = async (slug) => {
  return (
    await axios.post("/api/getproductByslug", {
      slug,
    })
  ).data;
};

const updateProduct = async (
  id,
  img,
  title,
  slug,
  mini_content,
  main_content,
  id_category,
  change
) => {
  // console.log(id);
  if (change) {
    const formData = new FormData();
    for (const file of img) {
      formData.append("imgs", file);
    }
    formData.append("id", id);
    formData.append("title", title);
    formData.append("slug", slug);
    formData.append("mini_content", mini_content);
    formData.append("main_content", main_content);
    formData.append("id_category", id_category);
    return axios.post("/api/updateproductChangeimg", formData);
  } else
    return axios.post("/api/updateproductNotchangeimg", {
      id,
      title,
      slug,
      mini_content,
      main_content,
      id_category,
    });
};

const deleteProduct = async (listItem) => {
  console.log(listItem);
  return axios.post("/api/deleteproduct", {
    listitem: listItem,
    count: listItem.length,
  });
};

export {
  addProduct,
  getAllProduct,
  getProductByCategoryId,
  getProductBySlug,
  updateProduct,
  deleteProduct,
};
