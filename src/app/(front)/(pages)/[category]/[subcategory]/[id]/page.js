"use client";
import React from "react";
import Breadcrumb from "@/app/(front)/common/Components/Breadcrumb";
import EachPage from "./EachPage";
import Product from "../../../(home)/Product";

const Page = () => {
  return (
    <div className="px-2">
      <Breadcrumb />
      <EachPage />
      <hr />
      <Product />
    </div>
  );
};

export default Page;
