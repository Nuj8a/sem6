import React, { useEffect, useState } from "react";
import ServiceLayout from "./ServiceLayout";
import { useParams } from "react-router-dom";
import Breadcrumb from "../../../Dashboard/common/Navigation/BredCrumb";

const Services = ({ data }) => {
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

  const [filterData, setFilterData] = useState({
    price: "all",
    color: "all",
    gender: "all",
  });
  const [afterFilter, setAfterFilter] = useState([]);

  useEffect(() => {
    const filteredData = data.filter((item) => {
      const priceMatch =
        filterData.price === "all" || item.price === filterData.price;
      const colorMatch =
        filterData.color === "all" || item.color === filterData.color;
      const genderMatch =
        filterData.gender === "all" || item.gender === filterData.gender;

      return priceMatch && colorMatch && genderMatch;
    });

    // Update the state with the filtered data
    setAfterFilter(filteredData);
  }, [filterData, data]);

  return (
    <div className="min-h-[70vh]">
      <div className="-mb-3 mt-7 text-black/80 capitalize font-semibold font-poppins text-3xl">
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
        <ServiceLayout
          data={afterFilter}
          filterData={filterData}
          setFilterData={setFilterData}
        />
      </div>
    </div>
  );
};

export default Services;
