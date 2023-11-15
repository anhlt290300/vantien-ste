import { db } from "./connect.js";
import { uid } from "uid";

const checkExists = async (id) => {
  let sql = `SELECT id FROM category WHERE id = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [id]);
  return [rows];
};

const getAllCategory = async () => {
  let sql = "SELECT * FROM category";
  const [rows] = await db.promise().query(sql);
  return [rows];
};

const getCategoryBySlug = async (slug) => {
  let sql = "SELECT * FROM category WHERE slug = ?";
  const [rows] = await db.promise().query(sql, [slug]);
  console.log(slug)
  return [rows][0];
};

const addCategory = async (category) => {
  console.log(category.img.length);
  let [check] = await checkExists(category.id);

  if (check[0]?.id) {
    return {
      message: "Danh mục đã tồn tại",
      code: "500",
    };
  } else {
    let id = uid();
    let sql =
      "INSERT INTO category (`id`,`title`,`slug`,`content`,`img`) VALUES (?,?,?,?,?)";
    await db
      .promise()
      .query(sql, [
        id,
        category.title,
        category.slug,
        category.content,
        category.img,
      ]);
    return {
      message: "Thêm danh mục thành công",
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
  getAllCategory,
  addCategory,
  updateCategory,
  deleteCategory,
  getCategoryBySlug,
};
