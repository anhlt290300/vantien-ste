import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";

import Layout from "../Layout";

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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={<Layout />}
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
      </Route>
      <Route
        path="/gioi-thieu"
        element={<Layout />}
        errorElement={
          <>
            <Header />
            <HeaderBurger />
            <Page404 />
            <Footer />
          </>
        }
      >
        <Route index element={<History />} />
      </Route>
    </Route>
  )
);

export default router;
{
  /* <Route
  path="/"
  element={<Layout />}
  errorElement={
    <>
      <Header />
      <HeaderBurger />
      <Page404 />
      <Footer />
    </>
  }
>
  <Route index element={<History />} />
  <Route path="/tim-kiem" element={<Search />} errorElement={<Page404 />} />
  <Route
    path="/:category/:id"
    element={<Products />}
    errorElement={<Page404 />}
  />
  <Route path="/gioi-thieu" element={<History />} errorElement={<Page404 />} />
  <Route path="/tuyen-dung" element={<Recruit />} errorElement={<Page404 />} />
  <Route path="/dich-vu" element={<Services />} errorElement={<Page404 />} />
  <Route
    path="/tin-tuc-va-su-kien"
    element={<News />}
    errorElement={<Page404 />}
  />
  <Route
    path="/san-pham/san-pham-noi-bat"
    element={<Products />}
    errorElement={<Page404 />}
  />
</Route>; */
}
