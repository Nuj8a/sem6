import React from "react";
import CardsProduct from "../../Common/Cards/CardsProduct";
import { Pagination } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Products = ({ heading }) => {
  return (
    <div className="px-2">
      <div className="flex items-center px-2 justify-between gap-2 font-poppins border-b pb-2 border-[var(--border-light-color)] text-[var(--text-light-color)]">
        <div className="text-base capitalize">50 Items found</div>
        <div className="flex gap-2">
          <div className="w-[200px] flex items-center h-[35px] border  border-[var(--border-dark-color)] relative">
            <input
              type="text"
              name="search"
              id="search"
              className="outline-none absolute inset-0 pr-7 text-sm px-3 bg-transparent h-full w-full"
              placeholder="Search..."
            />
            <IoSearchSharp className="absolute right-1 text-xl text-[var(--text-light-color)] hover:text-[var(--text-dark-color)] cursor-pointer" />
          </div>
          <div className="w-[150px] group relative pb-1 text-xs  rounded-sm">
            <div className="h-[35px] flex justify-between px-3 cursor-pointer border  border-[var(--border-dark-color)] items-center w-full">
              Latest Items <IoIosArrowDown />
            </div>
            <div className="absolute z-50 top-[37px] bg-[var(--background-color)] border border-[var(--border-light-color)] rounded-sm hidden group-hover:block w-full right-0">
              <ul>
                <li className="p-2 px-3 cursor-pointer hover:bg-[#222]">
                  Apple
                </li>
                <li className="p-2 px-3 cursor-pointer hover:bg-[#222]">
                  Ball
                </li>
                <li className="p-2 px-3 cursor-pointer hover:bg-[#222]">Cat</li>
                <li className="p-2 px-3 cursor-pointer hover:bg-[#222]">Dog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid-container px-1">
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
        <CardsProduct />
      </div>
      <div className="mt-10 float-right" id="pagination">
        <Pagination isCompact showControls total={10} initialPage={1} />
      </div>
    </div>
  );
};

export default Products;
