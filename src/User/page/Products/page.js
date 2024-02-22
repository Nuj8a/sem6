"use client";
import React, { useEffect, useState } from "react";
import Services from "../Services/Services";
import GetRelatedProductAll from "../../../libs/GetRelatedProductAll";

const Page = () => {
  const [relatedData, setRelatedData] = useState([]);
  const GetRelatedData = async () => {
    const data = await GetRelatedProductAll();
    setRelatedData(data || []);
  };
  useEffect(() => {
    GetRelatedData();
  }, []);

  return (
    <div className="mx-5">
      <Services data={relatedData} />
    </div>
  );
};

export default Page;
