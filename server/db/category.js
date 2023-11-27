import { db } from "./connect.js";
import { uid } from "uid";
import fs from "fs";

const checkExistsByTitle = async (title) => {
  let sql = `SELECT * FROM category WHERE title = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [title]);
  return [rows];
};

const checkExistsById = async (id) => {
  let sql = `SELECT * FROM category WHERE id = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [id]);
  return [rows];
};

const getAllCategory = async () => {
  //console.log("aaa");
  //db.connect();
  let sql = "SELECT * FROM category";
  const [rows] = await db.promise().query(sql);
  //console.log(await db.promise().query(sql))
  //db.end()
  return [rows];
};

const getCategoryBySlug = async (slug) => {
  let sql = "SELECT * FROM category WHERE slug = ?";
  const [rows] = await db.promise().query(sql, [slug]);
  console.log(slug);
  return [rows][0];
};

const addCategory = async (title, slug, img, content) => {
  let [check] = await checkExistsByTitle(title);

  if (check[0]?.id) {
    return {
      message: "Danh mục đã tồn tại",
      code: "500",
    };
  } else {
    let id = uid();
    let sql =
      "INSERT INTO category (`id`,`title`,`slug`,`content`,`img`) VALUES (?,?,?,?,?)";
    await db.promise().query(sql, [id, title, slug, content, img]);
    return {
      message: "Thêm danh mục thành công",
      code: "200",
    };
  }
};

const updateCategoryChangeImg = async (id, title, slug, img, content) => {
  //console.log(category);
  let [check] = await checkExistsById(id);
  console.log(check)
  if (!check[0]?.id) {
    return {
      message: "Danh mục không tồn tại",
      code: "500",
    };
  } else {
    let img_ = check[0].img.replace(
      "http://localhost:8000//image//",
      "./public/image/"
    );
    fs.unlink(img_, (err) => {
      if (err) throw err;
    });

    let sql =
      "UPDATE category SET title = ? , img = ? , content = ? , slug = ? WHERE id = ?";
    await db.promise().query(sql, [title, img, content, slug, id]);
    return {
      message: "Cập nhập danh mục thành công",
      code: "200",
    };
  }
};

const updateCategoryNotChangeImg = async (id, title, slug, content) => {
  //console.log(category);
  let [check] = await checkExistsById(id);

  if (!check[0]?.id) {
    return {
      message: "Danh mục không tồn tại",
      code: "500",
    };
  } else {
    
    let sql =
      "UPDATE category SET title = ? , content = ? , slug = ? WHERE id = ?";
    await db.promise().query(sql, [title, content, slug, id]);
    return {
      message: "Cập nhập danh mục thành công",
      code: "200",
    };
  }
};

const deleteCategory = async ({ listitem, count }) => {
  // console.log(count);

  for (let i = 0; i < count; i++) {
    let [check] = await checkExistsById(listitem[i].id);
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
    let img = listitem[i].img.replace(
      "http://localhost:8000//image//",
      "./public/image/"
    );
    fs.unlink(img, (err) => {
      if (err) throw err;
    });
  }
  return {
    message: "Xóa danh mục thành công",
    code: "200",
  };
};

export {
  getAllCategory,
  addCategory,
  updateCategoryChangeImg,
  updateCategoryNotChangeImg,
  deleteCategory,
  getCategoryBySlug,
};
