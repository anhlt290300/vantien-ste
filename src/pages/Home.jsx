import React from "react";
import Helmet from "../components/Helmet";
import Slider from "../components/Slider";
import AboutUs from "../components/AboutUs";
import HighlightProducts from "../components/HighlightProducts";
import MyPartner from "../components/MyPartner";
import MyCustomer from "../components/MyCustomer";
import WhyChoseUs from "../components/WhyChoseUs";
const Home = () => {
  return (
    <section>
      <Helmet title="Trang chủ">
        <Slider />
        <AboutUs />
        <HighlightProducts />
        <MyPartner />
        <MyCustomer />
        {/* <WhyChoseUs/> */}
      </Helmet>
    </section>
  );
};

export default Home;
