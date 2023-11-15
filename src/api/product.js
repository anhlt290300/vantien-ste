import axios from "axios";

const addProduct = async (
  img,
  title,
  slug,
  mini_content,
  main_content,
  id_category
) => {
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
// const updateCategory = async (id, img, title, slug, content) => {
//   return axios.post("/api/updatecategory", {
//     id,
//     img,
//     title,
//     slug,
//     content,
//   });
// };

// const deleteCategory = async (listItem) => {
//   console.log(listItem.length);
//   return axios.post("/api/deletecategory", {
//     listitem: listItem,
//     count: listItem.length,
//   });
// };

export { addProduct, getAllProduct, getProductByCategoryId, getProductBySlug };
