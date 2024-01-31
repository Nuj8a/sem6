import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import Product from "./Products";
import Reatured from "./Reatured";
import CardCollection from "./CardsCollection";
import Services from "../../common/page/Services";

const Home = () => {
  return (
    <>
      <Carousel />

      <div className="mx-4 mt-[100px]">
        <Category />
        <Services />
        <Product />
        <Reatured />
        <Product />
        <CardCollection />
        <Product />
      </div>
    </>
  );
};

export default Home;
