import { db } from "./connect.js";
import { uid } from "uid";

const checkExists = async (title) => {
  let sql = `SELECT id FROM product WHERE title = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [title]);
  return [rows];
};

const getAllProduct = async () => {
  let sql = "SELECT * FROM product";
  const [rows] = await db.promise().query(sql);
  return [rows];
};

const getProductByCategoryId = async (id_category) => {
  // console.log(id_category)
  let sql = "SELECT * FROM product WHERE id_category = ?";
  const [rows] = await db.promise().query(sql, [id_category]);
  return [rows][0];
};

const getProductBySlug = async (slug) => {
  console.log(slug)
  let sql = "SELECT * FROM product WHERE slug = ?";
  const [rows] = await db.promise().query(sql, [slug]);
  return [rows][0];
};

const addProduct = async (product) => {
  let [check] = await checkExists(product.title);
  console.log(check);
  if (check[0]?.id) {
    return {
      message: "Sản phẩm đã tồn tại",
      code: "500",
    };
  } else {
    let id = uid();
    let sql =
      "INSERT INTO product (`id`,`id_category`,`title`,`slug`,`mini_content`,`main_content`,`img`) VALUES (?,?,?,?,?,?,?)";
    await db
      .promise()
      .query(sql, [
        id,
        product.id_category,
        product.title,
        product.slug,
        product.mini_content,
        product.main_content,
        product.img,
      ]);
    return {
      message: "Thêm sản phẩm thành công",
      code: "200",
    };
  }
};

const updateCategory = async (category) => {
  //console.log(category);
  let [check] = await checkExists(category.id);

  if (!check[0]?.id) {
    return {
      message: "Danh mục không tồn tại",
      code: "500",
    };
  } else {
    let sql =
      "UPDATE category SET title = ? , img = ? , content = ? , slug = ? WHERE id = ?";
    await db
      .promise()
      .query(sql, [
        category.title,
        category.img,
        category.content,
        category.slug,
        category.id,
      ]);
    return {
      message: "Cập nhập danh mục thành công",
      code: "200",
    };
  }
};

const deleteCategory = async ({ listitem, count }) => {
  // console.log(count);
  // console.log(listitem[0].id);
  for (let i = 0; i < count; i++) {
    let [check] = await checkExists(listitem[i].id);
    if (!check[0]?.id) {
      return {
        message: "Có danh mục không tồn tại",
        code: "500",
      };
    }
  }

  for (let i = 0; i < count; i++) {
    //console.log(listitem[i].id);
    let sql = "DELETE FROM category WHERE id = ?";
    await db.promise().query(sql, [listitem[i].id]);
  }
  return {
    message: "Xóa danh mục thành công",
    code: "200",
  };
};

export {
  getAllProduct,
  addProduct,
  updateCategory,
  deleteCategory,
  getProductByCategoryId,
  getProductBySlug
};
