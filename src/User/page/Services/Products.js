import React from "react";
import CardsProduct from "../../common/Cards/CardsProduct";
import { Pagination } from "@nextui-org/react";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";

const Products = ({ heading, data }) => {
  console.log(data);
  return (
    <div>
      <div className="flex items-center justify-between gap-2 font-poppins border-b pb-2 border-black/15 text-black/80">
        <div className="text-sm capitalize">50 Items found</div>
        <div className="flex gap-2">
          <div className="w-[250px] flex items-center h-[35px] border  border-black/20 rounded-sm relative">
            <input
              type="text"
              name="search"
              id="search"
              className="outline-none absolute inset-0 pr-7 text-sm px-3 bg-transparent h-full w-full"
              placeholder="Search..."
            />
            <IoSearchSharp className="absolute right-1 text-xl text-black/80 hover:text-[var(--text-dark-color)] cursor-pointer" />
          </div>
          <div className="w-[150px] group relative pb-1 text-xs  rounded-sm">
            <div className="h-[35px] flex justify-between px-3 cursor-pointer border  border-black/20 rounded-sm items-center w-full">
              Latest Items <IoIosArrowDown />
            </div>
            <div className="absolute z-50 top-[37px] bg-slate-50 border border-black/15 rounded-sm hidden group-hover:block w-full right-0">
              <ul>
                <li className="p-2 px-3 cursor-pointer hover:bg-blue-200">
                  Apple
                </li>
                <li className="p-2 px-3 cursor-pointer hover:bg-blue-200">
                  Ball
                </li>
                <li className="p-2 px-3 cursor-pointer hover:bg-blue-200">
                  Cat
                </li>
                <li className="p-2 px-3 cursor-pointer hover:bg-blue-200">
                  Dog
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid-container px-1">
        {data.map((e) => {
          return <CardsProduct key={e._id} data={e} />;
        })}
      </div>
      <div className="mt-10 float-right" id="pagination">
        <Pagination isCompact showControls total={10} initialPage={1} />
      </div>
    </div>
  );
};

export default Products;
