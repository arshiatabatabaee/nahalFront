import React from "react";
import Layout from "../../Layout/Layout";
import Blog from "./blog/Blog";
import Service from "./OurService/Service";
import Package from "./Package/Package";
import Portal from "./Portal/Portal";
import ProductSlider from "./ProductSlider/ProductSlider";
import SearchBox from "./SearchBox/SearchBox";
import Slider from "./Slider/Slider";
import "./Home.css";
const HomePage = () => {
  return (
    <Layout>
      <Slider />
      <SearchBox />
      <Service />
      <ProductSlider />
      <Portal />
      <div className="package-contaner">
        <Package title="پکیج برنزی " image="#" price="بین 3 تا 7" />
        <Package title="پکیج نقره ای" image="#" price="بین 7 تا 16" />
        <Package title="پکیج طلایی" image="#" price="بین 26 تا 53" />
      </div>
      <Blog />
    </Layout>
  );
};

export default HomePage;
