import React, { useEffect } from "react";
import ServiceLayout from "./ServiceLayout";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../Dashboard/common/Navigation/BredCrumb";

const Services = () => {
  const scrollUP = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    scrollUP();
  }, []);
  const datas = useParams();
  return (
    <div className="min-h-[70vh] px-3">
      <div className="-mb-3 mt-7 text-[var(--text-dark-color)] capitalize font-semibold font-poppins text-3xl">
        {datas.category} Websites
      </div>
      <div className="flex my-5 justify-between items-center">
        <Breadcrumb
          category={"services"}
          categoryLink={"services"}
          subsubcategory={datas.category}
        />
      </div>
      <div>
        <ServiceLayout />
      </div>
    </div>
  );
};

export default Services;
