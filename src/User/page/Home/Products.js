import React from "react";
import Cards from "../../common/Cards/CardsProduct";

const Products = ({ heading }) => {
  return (
    <div className="min-h-[500px]">
      <div className="flex items-center text-black/80 gap-2 mt-5 mb-8">
        <span className="uppercase text-nowrap font-Orbitron tracking-wider">
          {heading || "Related"}
        </span>
        <div className="w-full h-[1px] border-t border-black/30 border-dashed"></div>
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
