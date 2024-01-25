"use client";
import React from "react";
import Content from "./Content";
import Breadcrumb from "../../common/Components/Breadcrumb";

const Page = () => {
  return (
    <div className="mx-2">
      <Breadcrumb />
      <Content />
    </div>
  );
};

export default Page;
