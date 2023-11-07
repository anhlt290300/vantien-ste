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

import Product from "../pages/Product";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />} errorElement={<Page404 />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/:category/:id" element={<Product />} />
      </Route>
    </Route>
  )
);

export default router;
