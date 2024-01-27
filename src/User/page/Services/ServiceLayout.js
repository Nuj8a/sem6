import React from "react";
import Filter from "./Filter";
import Products from "./Products";
import Services from "../../common/page/Services";
import Related from "../../common/page/Related";

const ServiceLayout = () => {
  return (
    <div className="grid gap-7 px-2 grid-cols-11">
      <div className="w-full flex flex-col col-span-3 ">
        <div className="border shadow border-black/5 rounded p-3 py-5">
          <Filter />
        </div>
      </div>
      <div className="w-full col-span-8">
        <Products />
      </div>
      <div className="col-span-11">
        <div>
          <Services />
        </div>
        <div>
          <Related />
        </div>
      </div>
    </div>
  );
};

export default ServiceLayout;
