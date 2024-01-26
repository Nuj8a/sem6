import React from "react";
import Carousel from "./Carousel";
import Category from "./Category";
import Product from "../../Pages/Home/Products";
import Reatured from "./Reatured";
import CardCollection from "./CardsCollection";
import Services from "../../Commons/page/Services";

const Home = () => {
  return (
    <div className="mx-2">
      <Carousel />
      <Category />
      <Services />
      <hr />
      <Product />
      <hr />
      <Reatured />
      <hr />
      <Product />
      <hr />
      <CardCollection />
      <hr />
      <Product />
    </div>
  );
};

export default Home;
