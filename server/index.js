import express from "express";
import path from "path";

import {
  addCategory,
  deleteCategory,
  getAllCategory,
  getCategoryBySlug,
  updateCategory,
} from "./db/category.js";
import bodyParser from "body-parser";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductByCategoryId,
  getProductBySlug,
  updateProduct,
} from "./db/product.js";
import {
  addNews,
  deleteNews,
  getAllNews,
  getNewsBySlug,
  updateNews,
} from "./db/news.js";
import {
  addRecruit,
  deleteRecruit,
  getAllRecruit,
  getRecruitBySlug,
  updateRecruit,
} from "./db/recruit.js";

const app = express();

app.use(express.static("../dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.all("*", (req, res) => {
//   res.sendFile(path.resolve("../dist/index.html"));
// });

app.get("/gioi-thieu", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});
app.get("/danh-muc/:id", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});

app.get("/danh-muc/:id1/:id2", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});
app.get("/dich-vu", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});
app.get("/tin-tuc-va-su-kien", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});
app.get("/tuyen-dung", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});

app.get("/quan-tri-vien", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});

app.get("/quan-tri-vien/:id", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});

app.get("/api/getAllcategory", async (req, res) => {
  await getAllCategory()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/api/getcategoryByslug", async (req, res) => {
  await getCategoryBySlug(req.body.slug)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/api/addcategory", async (req, res) => {
  await addCategory(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.post("/api/updatecategory", async (req, res) => {
  await updateCategory(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.post("/api/deletecategory", async (req, res) => {
  //console.log(req.body);
  await deleteCategory(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

// products
app.get("/api/getAllproduct", async (req, res) => {
  await getAllProduct()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/api/getproductBycategoryid", async (req, res) => {
  await getProductByCategoryId(req.body.id_category)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/api/getproductByslug", async (req, res) => {
  await getProductBySlug(req.body.slug)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/api/addproduct", async (req, res) => {
  //console.log(req.body)
  //console.log(req.body)
  await addProduct(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.post("/api/updateproduct", async (req, res) => {
  //console.log(req.body)
  //console.log(req.body)
  await updateProduct(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.post("/api/deleteproduct", async (req, res) => {
  //console.log(req.body);
  await deleteProduct(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

/// news

app.get("/api/getAllnews", async (req, res) => {
  await getAllNews()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/api/getnewsByslug", async (req, res) => {
  await getNewsBySlug(req.body.slug)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/api/addnews", async (req, res) => {
  //console.log(req.body)
  //console.log(req.body)
  await addNews(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.post("/api/updatenews", async (req, res) => {
  //console.log(req.body)
  //console.log(req.body)
  await updateNews(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.post("/api/deletenews", async (req, res) => {
  //console.log(req.body);
  await deleteNews(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

/// recruit

app.get("/api/getAllrecruit", async (req, res) => {
  await getAllRecruit()
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/api/getrecruitByslug", async (req, res) => {
  await getRecruitBySlug(req.body.slug)
    .then((result) => res.json(result))
    .catch((error) => res.json(error));
});

app.post("/api/addrecruit", async (req, res) => {
  //console.log(req.body)
  //console.log(req.body)
  await addRecruit(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.post("/api/updaterecruit", async (req, res) => {
  //console.log(req.body)
  //console.log(req.body)
  await updateRecruit(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.post("/api/deleterecruit", async (req, res) => {
  //console.log(req.body);
  await deleteRecruit(req.body)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.listen(8000, () => {
  console.log("port 8000");
});
