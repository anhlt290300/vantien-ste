import express from "express";
import path from "path";
import multer from "multer";
import util from "util";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  getCategoryBySlug,
  updateCategoryChangeImg,
  updateCategoryNotChangeImg,
} from "./db/category.js";
import bodyParser from "body-parser";
import {
  addProduct,
  deleteProduct,
  getAllProduct,
  getProductByCategoryId,
  getProductBySlug,
  updateProductChangeImg,
  updateProductNotChangeImg,
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

const storageCategory = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./public/image");
  },
  filename: (req, file, cb) => {
    return cb(null, `category_${Date.now()}_${file.originalname}`);
  },
});

const storageProduct = multer.diskStorage({
  destination: (req, file, cb) => {
    return cb(null, "./public/image");
  },
  filename: (req, file, cb) => {
    return cb(null, `product_${Date.now()}_${file.originalname}`);
  },
});
const uploadCategory = multer({ storage: storageCategory });
const uploadProduct = multer({ storage: storageProduct });

const app = express();

app.use(express.static("public"));
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

app.get("/tin-tuc-va-su-kien/:id", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});
app.get("/tuyen-dung", (req, res) => {
  res.sendFile(path.resolve("../dist/index.html"));
});

app.get("/tuyen-dung/:id", (req, res) => {
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

app.post(
  "/api/addcategory",
  uploadCategory.single("file"),
  async (req, res) => {
    const title = req.body.title;
    const slug = req.body.slug;
    const content = req.body.content;
    const img = `http://localhost:8000//image//${req.file.filename}`;
    await addCategory(title, slug, img, content)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => res.json(error));
  }
);

app.post(
  "/api/updatecategoryChangeimg",
  uploadCategory.single("file"),
  async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const slug = req.body.slug;
    const content = req.body.content;
    const img = `http://localhost:8000//image//${req.file.filename}`;
    await updateCategoryChangeImg(id, title, slug, img, content)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => res.json(error));
  }
);
app.post("/api/updatecategoryNotchangeimg", async (req, res) => {
  const id = req.body.id;
  // console.log(req.body)
  const title = req.body.title;
  const slug = req.body.slug;
  const content = req.body.content;
  await updateCategoryNotChangeImg(id, title, slug, content)
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

app.post("/api/addproduct", uploadProduct.array("imgs"), async (req, res) => {
  const title = req.body.title;
  const id_category = req.body.id_category;
  const slug = req.body.slug;
  const mini_content = req.body.mini_content;
  const main_content = req.body.main_content;
  let arr = [];
  req.files.forEach((element) => {
    const i = `http://localhost:8000//image//${element.filename}`;
    arr.push(i);
  });
  let img = arr;
  console.log(img);

  await addProduct(title, id_category, slug, mini_content, main_content, img)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => res.json(error));
});

app.post(
  "/api/updateproductChangeimg",
  uploadProduct.array("imgs"),
  async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const id_category = req.body.id_category;
    const slug = req.body.slug;
    const mini_content = req.body.mini_content;
    const main_content = req.body.main_content;
    let arr = [];
    
    for (let i of req.files) {
      const item = `http://localhost:8000//image//${i.filename}`;
      arr.push(item);
    }
    let img = arr;
    await updateProductChangeImg(
      id,
      title,
      id_category,
      slug,
      mini_content,
      main_content,
      img
    )
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((error) => res.json(error));
  }
);

app.post("/api/updateproductNotchangeimg", async (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  const id_category = req.body.id_category;
  const slug = req.body.slug;
  const mini_content = req.body.mini_content;
  const main_content = req.body.main_content;
  //console.log(id)
  await updateProductNotChangeImg(
    id,
    title,
    id_category,
    slug,
    mini_content,
    main_content
  )
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
