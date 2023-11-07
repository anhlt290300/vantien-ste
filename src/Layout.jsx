import React from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import SearchBox from "./components/SearchBox";
import ButtonScroll from "./components/ButtonScroll";
const Layout = () => {
  return (
    <div className=" bg-white-primary overflow-hidden">
      <Header />
      <SearchBox />
      <ButtonScroll />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
