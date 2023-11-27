import { convertImgs } from "../utils/convertImgs.js";
import { db } from "./connect.js";
import { uid } from "uid";
import fs from "fs";

const checkExistsWithTitle = async (title) => {
  let sql = `SELECT * FROM product WHERE title = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [title]);
  return [rows];
};

const checkExistsWithId = async (id) => {
  let sql = `SELECT * FROM product WHERE id = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [id]);
  return [rows];
};

const getAllProduct = async () => {
  // let img = [
  //   "http://localhost:8000//image//category_1701016007119_milwaukee_thumbnail.jpg",
  //   "http://localhost:8000//image//product_1701032463236_405194853_317975957764422_7221548235489298452_n.jpg",
  // ];
  // await db.promise().query("UPDATE product set img = ?", [JSON.stringify(img)]);

  let sql =
    "SELECT product.title,product.id_category, product.slug,product.id,product.img,product.mini_content,product.main_content,category.slug FROM `product` INNER JOIN `category` ON product.id_category = category.id";
  const [rows] = await db.promise().query(sql);
  return [rows];
};

const getProductByCategoryId = async (id_category) => {
  // console.log(id_category)
  let sql =
    "SELECT product.title,product.slug,product.id,product.img,product.mini_content,product.main_content FROM `product` INNER JOIN `category` ON product.id_category = category.id AND category.id = ?";
  const [rows] = await db.promise().query(sql, [id_category]);
  return [rows][0];
};

const getProductBySlug = async (slug) => {
  // console.log(slug);
  let sql = "SELECT * FROM product WHERE slug = ?";
  const [rows] = await db.promise().query(sql, [slug]);
  return [rows][0];
};

const addProduct = async (
  title,
  id_category,
  slug,
  mini_content,
  main_content,
  img
) => {
  //console.log(product.img.JSON())
  let [check] = await checkExistsWithTitle(title);
  console.log(check);
  if (check[0]?.id) {
    return {
      message: "Sản phẩm đã tồn tại",
      code: "500",
    };
  } else {
    console.log(JSON.stringify(img));
    let id = uid();
    let sql =
      "INSERT INTO product (`id`,`id_category`,`title`,`slug`,`mini_content`,`main_content`,`img`) VALUES (?,?,?,?,?,?,?)";
    await db
      .promise()
      .query(sql, [
        id,
        id_category,
        title,
        slug,
        mini_content,
        main_content,
        JSON.stringify(img),
      ]);
    return {
      message: "Thêm sản phẩm thành công",
      code: "200",
    };
  }
};

const updateProductChangeImg = async (
  id,
  title,
  id_category,
  slug,
  mini_content,
  main_content,
  img
) => {
  //console.log('title');
  let [check] = await checkExistsWithId(id);
  //console.log(check[0]);
  if (!check[0]?.id) {
    return {
      message: "Sản phẩm chưa tồn tại",
      code: "500",
    };
  } else {
    let imgs = convertImgs(check[0].img);
    //console.log(imgs[1])
    for (let item of imgs) {
      let img_ = item.replace(
        "http://localhost:8000//image//",
        "./public/image/"
      );
      console.log(img_);
      fs.unlink(img_, (err) => {
        if (err) throw err;
      });
    }
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

const updateProductNotChangeImg = async (
  id,
  title,
  id_category,
  slug,
  mini_content,
  main_content
) => {
  //console.log(id);
  let [check] = await checkExistsWithId(id);
  //console.log(check);
  if (!check[0]?.id) {
    return {
      message: "Sản phẩm chưa tồn tại",
      code: "500",
    };
  } else {
    let sql =
      "UPDATE product SET title = ? , id_category = ? , slug = ? , mini_content = ? , main_content = ? WHERE id = ?";
    await db
      .promise()
      .query(sql, [title, id_category, slug, mini_content, main_content, id]);
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
    let [check] = await checkExistsWithId(listitem[i].id);
    let imgs = convertImgs(check[0].img);
    //console.log(imgs[1])
    for (let item of imgs) {
      let img_ = item.replace(
        "http://localhost:8000//image//",
        "./public/image/"
      );
      console.log(img_);
      fs.unlink(img_, (err) => {
        if (err) throw err;
      });
    }
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
  updateProductChangeImg,
  updateProductNotChangeImg,
  deleteProduct,
};
