import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./parts/Header";
import Footer from "./parts/Footer";
import SearchBox from "./components/SearchBox";
import ButtonScroll from "./components/ButtonScroll";
import HeaderBurger from "./parts/HeaderBurger";
const Layout = () => {
  return (
    <div className=" bg-white-primary overflow-hidden">
      <Header />
      <HeaderBurger />
      <SearchBox />
      <ButtonScroll />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
