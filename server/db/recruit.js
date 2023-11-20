import { db } from "./connect.js";
import { uid } from "uid";

const checkExistsWithTitle = async (title) => {
  //console.log('aaa');
  let sql = `SELECT id FROM recruit WHERE title = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [title]);
  return [rows];
};

const checkExistsWithId = async (id) => {
  let sql = `SELECT id FROM recruit WHERE id = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [id]);
  return [rows];
};

const getAllRecruit = async () => {
  let sql = "SELECT * FROM recruit";
  const [rows] = await db.promise().query(sql);
  return [rows];
};

const getRecruitBySlug = async (slug) => {
  // console.log(slug);
  let sql = "SELECT * FROM recruit WHERE slug = ?";
  const [rows] = await db.promise().query(sql, [slug]);
  return [rows][0];
};

const addRecruit = async (recruit) => {
  let [check] = await checkExistsWithTitle(recruit.title);
  if (check[0]?.id) {
    return {
      message: "Tin tức đã tồn tại",
      code: "500",
    };
  } else {
    //console.log("recruit");
    let id = uid();
    let sql =
      "INSERT INTO recruit (`id`,`slug`,`main_content`,`title`,`img`,`date`,`mini_content`) VALUES (?,?,?,?,?,?,?)";
    await db
      .promise()
      .query(sql, [
        id,
        recruit.slug,
        recruit.main_content,
        recruit.title,
        recruit.img,
        recruit.date,
        recruit.mini_content,
      ]);
    return {
      message: "Thêm tin tức thành công",
      code: "200",
    };
  }
};

const updateRecruit = async ({
  id,
  title,
  slug,
  mini_content,
  main_content,
  img,
}) => {
  console.log(id);
  let [check] = await checkExistsWithId(id);
  console.log(check);
  if (!check[0]?.id) {
    return {
      message: "tin chưa tồn tại",
      code: "500",
    };
  } else {
    let sql =
      "UPDATE recruit SET title = ? , slug = ? , mini_content = ? , main_content = ?, img = ? WHERE id = ?";
    await db
      .promise()
      .query(sql, [
        title,
        slug,
        mini_content,
        main_content,
        JSON.stringify(img),
        id,
      ]);
    return {
      message: "Cập nhập tin thành công",
      code: "200",
    };
  }
};

const deleteRecruit = async ({ listitem, count }) => {
  // console.log(count);
  // console.log(listitem[0].id);
  for (let i = 0; i < count; i++) {
    let [check] = await checkExistsWithId(listitem[i].id);
    if (!check[0]?.id) {
      return {
        message: "Có tin không tồn tại",
        code: "500",
      };
    }
  }

  for (let i = 0; i < count; i++) {
    //console.log(listitem[i].id);
    let sql = "DELETE FROM recruit WHERE id = ?";
    await db.promise().query(sql, [listitem[i].id]);
  }
  return {
    message: "Xóa tin thành công",
    code: "200",
  };
};

export {
  getAllRecruit,
  addRecruit,
  getRecruitBySlug,
  updateRecruit,
  deleteRecruit,
};
