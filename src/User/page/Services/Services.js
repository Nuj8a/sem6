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
      const priceFilter = () => {
        switch (filterData.price) {
          case "above-100K":
            return item.price > 100000;
          case "100K-80K":
            return item.price >= 80000 && item.price < 100000;
          case "80K-60K":
            return item.price >= 60000 && item.price < 80000;
          case "60K-40K":
            return item.price >= 40000 && item.price < 60000;
          case "40K-20K":
            return item.price >= 20000 && item.price < 40000;
          case "20K-below":
            return item.price < 20000;
          default:
            return true;
        }
      };

      const genderFilter = () => {
        switch (filterData.gender) {
          case "men":
            return Number(item.gendertype) === 1;
          case "women":
            return Number(item.gendertype) === 2;
          case "unisex":
            return Number(item.gendertype) === 3;
          default:
            return true;
        }
      };
      const colorFilter = () => {
        switch (filterData.color) {
          case "white":
            return item.productcolor.includes("white");
          case "black":
            return item.productcolor.includes("black");
          case "red":
            return item.productcolor.includes("red");
          case "green":
            return item.productcolor.includes("green");
          case "other":
            return (
              !item.productcolor.includes("white") &&
              !item.productcolor.includes("black") &&
              !item.productcolor.includes("red") &&
              !item.productcolor.includes("green")
            );
          default:
            return true;
        }
      };

      return priceFilter() && genderFilter() && colorFilter();
    });

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
