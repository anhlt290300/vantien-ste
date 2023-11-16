import axios from "axios";

const addProduct = async (
  imgs,
  title,
  slug,
  mini_content,
  main_content,
  id_category
) => {
  let img = imgs;
  return axios.post("/api/addproduct", {
    img,
    title,
    slug,
    mini_content,
    main_content,
    id_category,
  });
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
  id_category
) => {
  // console.log(id_category);
  // console.log(img);
  return axios.post("/api/updateproduct", {
    id,
    img,
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
