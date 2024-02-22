import React, { useState } from "react";
import Filter from "./Filter";
import Products from "./Products";
import Services from "../../common/page/Services";
import Related from "../../common/page/Related";

const ServiceLayout = ({ data, filterData, setFilterData }) => {
  const [page, setPage] = useState(1);

  // =================== for filter (start)================
  const [searchSrt, setSearchStr] = useState("");
  const [genderDrop, setGenderDrop] = useState(-1);

  const afterSearch =
    searchSrt.length > 2
      ? data.filter((e) =>
          e.title.toLowerCase().includes(searchSrt.toLowerCase())
        )
      : data;

  const lastSearch =
    Number(genderDrop) !== 0 && Number(genderDrop) !== -1
      ? afterSearch.filter((e) => Number(e.gendertype) === Number(genderDrop))
      : afterSearch;

  // =================== for filter (end)================

  const itemsPerPage = 15;
  const maxPage = Math.ceil(lastSearch.length / itemsPerPage);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const slicedData = lastSearch.slice(startIndex, endIndex);

  return (
    <div className="grid gap-7 px-2 grid-cols-11">
      <div className="w-full flex flex-col col-span-3 ">
        <div className="border shadow border-black/5 rounded p-3 py-5">
          <Filter filterData={filterData} setFilterData={setFilterData} />
        </div>
      </div>
      <div className="w-full col-span-8">
        <Products
          data={slicedData}
          setPage={setPage}
          page={page}
          maxPage={maxPage}
          searchSrt={searchSrt}
          setSearchStr={setSearchStr}
          genderDrop={genderDrop}
          setGenderDrop={setGenderDrop}
        />
      </div>
      <div className="col-span-11">
        <div>
          <Services />
        </div>
        <div>
          <Related data={[]} />
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
