import { db } from "./connect.js";
import { uid } from "uid";

const checkExistsWithTitle = async (title) => {
  let sql = `SELECT id FROM news WHERE title = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [title]);
  return [rows];
};

const checkExistsWithId = async (id) => {
  let sql = `SELECT id FROM news WHERE id = ? LIMIT 1`;
  const [rows] = await db.promise().query(sql, [id]);
  return [rows];
};

const getAllNews = async () => {
  let sql = "SELECT * FROM news";
  const [rows] = await db.promise().query(sql);
  return [rows];
};

const getNewsBySlug = async (slug) => {
  // console.log(slug);
  let sql = "SELECT * FROM news WHERE slug = ?";
  const [rows] = await db.promise().query(sql, [slug]);
  return [rows][0];
};

const addNews = async (news) => {
  //console.log(news)
  let [check] = await checkExistsWithTitle(news.title);
  console.log("aaa" + news.slug);
  if (check[0]?.id) {
    return {
      message: "Tin tuc đã tồn tại",
      code: "500",
    };
  } else {
    //console.log(JSON.stringify(product.img));
    let id = uid();
    let sql =
      "INSERT INTO news (`id`,`slug`,`main_content`,`title`,`img`,`date`,`mini_content`) VALUES (?,?,?,?,?,?,?)";
    await db
      .promise()
      .query(sql, [
        id,
        news.slug,
        news.main_content,
        news.title,
        news.img,
        news.date,
        news.mini_content,
      ]);
    return {
      message: "Thêm tin tuc thành công",
      code: "200",
    };
  }
};

const updateNews = async ({
  id,
  title,
  slug,
  main_content,
  mini_content,
  img,
  date,
}) => {
  console.log(id);
  let [check] = await checkExistsWithId(id);
  console.log(check);
  if (!check[0]?.id) {
    return {
      message: "tin tuc chưa tồn tại",
      code: "500",
    };
  } else {
    let sql =
      "UPDATE news SET title = ? , slug = ? , main_content = ?, mini_content = ? ,img = ? , date = ? WHERE id = ?";
    await db
      .promise()
      .query(sql, [title, slug, main_content, mini_content, img, date, id]);
    return {
      message: "Cập nhập tin tuc thành công",
      code: "200",
    };
  }
};

const deleteNews = async ({ listitem, count }) => {
  // console.log(count);
  // console.log(listitem[0].id);
  for (let i = 0; i < count; i++) {
    let [check] = await checkExistsWithId(listitem[i].id);
    if (!check[0]?.id) {
      return {
        message: "Có tin tuc không tồn tại",
        code: "500",
      };
    }
  }

  for (let i = 0; i < count; i++) {
    //console.log(listitem[i].id);
    let sql = "DELETE FROM news WHERE id = ?";
    await db.promise().query(sql, [listitem[i].id]);
  }
  return {
    message: "Xóa tin tuc thành công",
    code: "200",
  };
};

export { getAllNews, addNews, getNewsBySlug, updateNews, deleteNews };
