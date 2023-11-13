import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import LayoutUser from "../LayoutUser";
import LayoutAdmin from "../LayoutAdmin";

import Home from "../pages/Home";

import Page404 from "../pages/Page404";

import Search from "../pages/Search";

import Products from "../pages/Products";
import History from "../pages/History";
import Recruit from "../pages/Recruit";
import Services from "../pages/Services";
import News from "../pages/News";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import HeaderBurger from "../parts/HeaderBurger";
import Categorys from "../pages/Categorys";
import { getCategoryBySlug } from "../assets/static-data/categorys";
import {
  getProductByCategoryslug,
  getProductBySlug,
} from "../assets/static-data/products";

import ProductsAdmin from "../pages/admin/ProductsAdmin";
import NewsAdmin from "../pages/admin/NewsAdmin";
import RecruitAdmin from "../pages/admin/RecruitAdmin";
import CategorysAdmin from "../pages/admin/CategorysAdmin";
import { getAllCategory } from "../api/category";
import { getAllProduct } from "../api/product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<LayoutUser />}
        errorElement={
          <>
            <Header />
            <HeaderBurger />
            <Page404 />
            <Footer />
          </>
        }
      >
        <Route index element={<Home />} />
        <Route
          path="tim-kiem"
          element={<Search />}
          errorElement={<Page404 />}
        />
        <Route
          path="/danh-muc/:category_slug"
          loader={async ({ params }) => {
            let category_slug = params.category_slug;
            let category = getCategoryBySlug(category_slug);
            if (category) {
              if (category_slug !== "tat-ca") {
                let products = getProductByCategoryslug(category_slug);
                return {
                  title: category.title,
                  slug: category.slug,
                  products: products,
                  img: category.img,
                  content: category.content,
                };
              } else {
                let category_ = await getAllCategory()
                return {
                  title: "Tất cả danh mục",
                  categorys: category_[0],
                };
              }
            }
            throw new Response("Can't find category", { status: 400 });
          }}
          element={<Categorys />}
          errorElement={<Page404 />}
        />
        <Route
          path="/danh-muc/:category_slug/:product_slug"
          loader={({ params }) => {
            let category_slug = params.category_slug;
            let product_slug = params.product_slug;
            let category = getCategoryBySlug(category_slug);
            if (category) {
              let product = getProductBySlug(product_slug);

              if (product) {
                return {
                  category_slug: category_slug,
                  category_title: category.title,
                  product: product,
                };
              }
              throw new Response("Can't find product", { status: 400 });
            }
            throw new Response("Can't find category", { status: 400 });
          }}
          element={<Products />}
          errorElement={<Page404 />}
        />
        <Route
          path="/gioi-thieu"
          element={<History />}
          errorElement={<Page404 />}
        />
        <Route
          path="/tuyen-dung"
          element={<Recruit />}
          errorElement={<Page404 />}
        />
        <Route
          path="/dich-vu"
          element={<Services />}
          errorElement={<Page404 />}
        />
        <Route
          path="/tin-tuc-va-su-kien"
          element={<News />}
          errorElement={<Page404 />}
        />
      </Route>
      <Route
        path="quan-tri-vien"
        element={<LayoutAdmin />}
        errorElement={<Page404 />}
      >
        <Route index element={<></>} />
        <Route
          path="san-pham"
          loader={async () => {
            let products = await getAllProduct();
            //console.log(category)
            return products[0];
          }}
          element={<ProductsAdmin />}
          errorElement={<Page404 />}
        />
        <Route
          path="danh-muc"
          loader={async () => {
            let category = await getAllCategory();
            //console.log(category)
            return category[0];
          }}
          element={<CategorysAdmin />}
          errorElement={<Page404 />}
        />
        <Route
          path="tin-tuc-va-su-kien"
          element={<NewsAdmin />}
          errorElement={<Page404 />}
        />
        <Route
          path="tuyen-dung"
          element={<RecruitAdmin />}
          errorElement={<Page404 />}
        />
      </Route>
    </Route>
  )
);

export default router;
