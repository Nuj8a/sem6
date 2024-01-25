"use client";
import React from "react";
import Breadcrumb from "../../common/Components/Breadcrumb";
import ShopDetails from "./ShopDetails";
import Product from "../(home)/Product";

const Page = () => {
  return (
    <div className="px-2">
      <Breadcrumb />
      <ShopDetails />
      <hr />
      <Product />
    </div>
  );
};

export default Page;
