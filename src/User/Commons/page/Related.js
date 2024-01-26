import React from "react";
import CardsProduct from "../Cards/CardsProduct";

const Related = ({ heading }) => {
  return (
    <div className="min-h-[500px] py-10">
      <div className="flex items-center gap-2 mt-0 mb-8">
        <span className="uppercase text-nowrap text-[var(--text-light-color)] font-Orbitron tracking-wider">
          {heading || "Related"}
        </span>
        <div className="w-full h-[1px] border-t border-dashed border-[var(--border-dark-color)]"></div>
      </div>
      <div className="grid-container">
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
      </div>
    </div>
  );
};

export default Related;
