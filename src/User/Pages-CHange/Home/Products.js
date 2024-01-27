import React from "react";
import Cards from "../../Commons/Cards/CardsProduct";

const Products = ({ heading }) => {
  return (
    <div className="min-h-[500px] py-10">
      <div className="flex items-center gap-2 mt-5 mb-8">
        <span className="uppercase text-nowrap font-Orbitron tracking-wider">
          {heading || "Related"}
        </span>
        <div className="w-full h-[1px] border-t border-dashed"></div>
      </div>
      <div className="grid-container">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Products;
