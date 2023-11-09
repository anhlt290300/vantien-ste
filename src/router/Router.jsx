import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  redirect,
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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />} errorElement={<Page404 />}>
        <Route index element={<Home />} />
        <Route path="/tim-kiem" element={<Search />} />
        <Route path="/:category/:id" element={<Products />} />
        <Route path="/gioi-thieu" element={<>abc</>} />
        <Route path="/tuyen-dung" element={<Recruit />} />
        <Route path="/dich-vu" element={<Services />} />
        <Route path="/tin-tuc-va-su-kien" element={<News />} />
        <Route path="/san-pham/san-pham-noi-bat" element={<Products/>}/>
      </Route>
    </Route>
  )
);

export default router;
