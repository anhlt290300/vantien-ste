import { db } from "./connect.js";
import { uid } from "uid";

const checkExistsWithTitle = async (title) => {
  let sql = `SELECT id FROM product WHERE title = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [title]);
  return [rows];
};

const checkExistsWithId = async (id) => {
  let sql = `SELECT id FROM product WHERE id = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [id]);
  return [rows];
};

const getAllProduct = async () => {
  let sql =
    "SELECT product.title,product.id_category, product.slug,product.id,product.img,product.mini_content,product.main_content,category.slug FROM `product` INNER JOIN `category` ON product.id_category = category.id";
  const [rows] = await db.promise().query(sql);
  return [rows];
};

const getProductByCategoryId = async (id_category) => {
  // console.log(id_category)
  let sql =
    "SELECT product.title,product.slug,product.id,product.img,product.mini_content,product.main_content,category.title FROM `product` INNER JOIN `category` ON product.id_category = category.id AND category.id = ?";
  const [rows] = await db.promise().query(sql, [id_category]);
  return [rows][0];
};

const getProductBySlug = async (slug) => {
  // console.log(slug);
  let sql = "SELECT * FROM product WHERE slug = ?";
  const [rows] = await db.promise().query(sql, [slug]);
  return [rows][0];
};

const addProduct = async (product) => {
  //console.log(product.img.JSON())
  let [check] = await checkExistsWithTitle(product.title);
  console.log(check);
  if (check[0]?.id) {
    return {
      message: "Sản phẩm đã tồn tại",
      code: "500",
    };
  } else {
    //console.log(JSON.stringify(product.img));
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
        JSON.stringify(product.img),
      ]);
    return {
      message: "Thêm sản phẩm thành công",
      code: "200",
    };
  }
};

const updateProduct = async ({
  id,
  title,
  id_category,
  slug,
  mini_content,
  main_content,
  img,
}) => {
  console.log(id)
  let [check] = await checkExistsWithId(id);
  console.log(check);
  if (!check[0]?.id) {
    return {
      message: "Sản phẩm chưa tồn tại",
      code: "500",
    };
  } else {
    let sql =
      "UPDATE product SET title = ? , id_category = ? , slug = ? , mini_content = ? , main_content = ?, img = ? WHERE id = ?";
    await db
      .promise()
      .query(sql, [
        title,
        id_category,
        slug,
        mini_content,
        main_content,
        JSON.stringify(img),
        id,
      ]);
    return {
      message: "Cập nhập sản phẩm thành công",
      code: "200",
    };
  }
};

const deleteProduct = async ({ listitem, count }) => {
  // console.log(count);
  // console.log(listitem[0].id);
  for (let i = 0; i < count; i++) {
    let [check] = await checkExistsWithId(listitem[i].id);
    if (!check[0]?.id) {
      return {
        message: "Có sản phẩm không tồn tại",
        code: "500",
      };
    }
  }

  for (let i = 0; i < count; i++) {
    //console.log(listitem[i].id);
    let sql = "DELETE FROM product WHERE id = ?";
    await db.promise().query(sql, [listitem[i].id]);
  }
  return {
    message: "Xóa sản phẩm thành công",
    code: "200",
  };
};

export {
  getAllProduct,
  addProduct,
  getProductByCategoryId,
  getProductBySlug,
  updateProduct,
  deleteProduct
};
