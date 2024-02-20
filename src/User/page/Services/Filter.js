import { Checkbox, Chip } from "@nextui-org/react";
import React from "react";

const Filter = () => {
  return (
    <div className="w-full flex  flex-col gap-8 h-full">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-nowrap text-black font-Orbitron tracking-wider">
            {"Filter with Price"}
          </span>
          <div className="w-full h-[1px] border-t border-dashed border-[var(--border-dark-color)]"></div>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <div className=" flex justify-between items-center w-full">
            <Checkbox defaultSelected size="sm">
              <div className="text-black/80 font-poppins">All Products</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">1000</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">
                Above - RS.1,00,000
              </div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">20</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">
                RS.1,00,000 - RS.80,000
              </div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">200</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">
                RS.80,000 - RS.60,000
              </div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">500</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">
                RS.60,000 - RS.40,000
              </div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">150</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">
                RS.40,000 - RS.20,000
              </div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">100</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">
                RS.20,000 - Below
              </div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">200</div>
            </Chip>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-nowrap text-black font-Orbitron tracking-wider">
            {"Filter with Gender"}
          </span>
          <div className="w-full h-[1px] border-t border-dashed border-[var(--border-dark-color)]"></div>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <div className=" flex justify-between items-center w-full">
            <Checkbox defaultSelected size="sm">
              <div className="text-black/80 font-poppins">All Products</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">1000</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">For Men</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">100</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">For Women</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">200</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">For Unisex</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">150</div>
            </Chip>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-nowrap text-black font-Orbitron tracking-wider">
            {"Filter with Color"}
          </span>
          <div className="w-full h-[1px] border-t border-dashed border-[var(--border-dark-color)]"></div>
        </div>
        <div className="flex flex-col gap-2 px-2">
          <div className=" flex justify-between items-center w-full">
            <Checkbox defaultSelected size="sm">
              <div className="text-black/80 font-poppins">All Products</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">1000</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">Black</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">300</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">White</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">200</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">Red</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">150</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">Gray</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">250</div>
            </Chip>
          </div>
          <div className=" flex justify-between items-center w-full">
            <Checkbox size="sm">
              <div className="text-black/80 font-poppins">Others</div>
            </Checkbox>
            <Chip
              size="sm"
              radius="none"
              className=" rounded-sm scale-75 -mr-1 bg-slate-200"
            >
              <div className="font-poppins font-semibold">100</div>
            </Chip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
