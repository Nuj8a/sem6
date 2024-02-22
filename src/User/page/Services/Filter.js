import { Chip, Radio, RadioGroup } from "@nextui-org/react";
import React from "react";

const Filter = ({ filterData, setFilterData }) => {
  return (
    <div className="w-full flex  flex-col gap-8 h-full">
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-nowrap text-black font-Orbitron tracking-wider">
            {"Filter with Price"}
          </span>
          <div className="w-full h-[1px] border-t border-dashed border-[var(--border-dark-color)]"></div>
        </div>
        <div className="flex flex-col gap-2 px-2 w-full">
          <RadioGroup className="w-[200px]">
            <Radio
              size="sm"
              value="all"
              width={100}
              className="w-[300px]"
              onClick={() => setFilterData({ ...filterData, price: "all" })}
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">All Products</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" absolute right-0 rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">1000</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              value="above-100K"
              width={100}
              className="w-[300px]"
              onClick={() =>
                setFilterData({ ...filterData, price: "above-100K" })
              }
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">
                  Above - RS.1,00,000
                </div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">20</div>
                </Chip>
              </div>
            </Radio>

            <Radio
              size="sm"
              width={100}
              className="w-[300px]"
              value="100K-80K"
              onClick={() =>
                setFilterData({ ...filterData, price: "100K-80K" })
              }
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">
                  RS.1,00,000 - RS.80,000
                </div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">200</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              width={100}
              className="w-[300px]"
              value="80K-60K"
              onClick={() => setFilterData({ ...filterData, price: "80K-60K" })}
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">
                  RS.80,000 - RS.60,000
                </div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">500</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              width={100}
              className="w-[300px]"
              value="60K-40K"
              onClick={() => setFilterData({ ...filterData, price: "60K-40K" })}
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">
                  RS.60,000 - RS.40,000
                </div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">150</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              width={100}
              className="w-[300px]"
              value="40K-20K"
              onClick={() => setFilterData({ ...filterData, price: "40K-20K" })}
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">
                  RS.40,000 - RS.20,000
                </div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">100</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              width={100}
              className="w-[300px]"
              value="20K-below"
              onClick={() =>
                setFilterData({ ...filterData, price: "20K-below" })
              }
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">
                  RS.20,000 - Below
                </div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">200</div>
                </Chip>
              </div>
            </Radio>
          </RadioGroup>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-nowrap text-black font-Orbitron tracking-wider">
            {"Filter with Gender"}
          </span>
          <div className="w-full h-[1px] border-t border-dashed border-[var(--border-dark-color)]"></div>
        </div>
        <div className="flex flex-col gap-2 px-2 w-full">
          <RadioGroup className="w-[200px]">
            <Radio
              size="sm"
              value="all"
              onClick={() => setFilterData({ ...filterData, gender: "all" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">All Products</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" absolute right-0 rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">1000</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              value="men"
              onClick={() => setFilterData({ ...filterData, gender: "men" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">For men</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">20</div>
                </Chip>
              </div>
            </Radio>

            <Radio
              size="sm"
              value="women"
              onClick={() => setFilterData({ ...filterData, gender: "women" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">For women</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">200</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              value="unisex"
              onClick={() => setFilterData({ ...filterData, gender: "unisex" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">For unisex</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">500</div>
                </Chip>
              </div>
            </Radio>
          </RadioGroup>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="uppercase text-nowrap text-black font-Orbitron tracking-wider">
            {"Filter with Color"}
          </span>
          <div className="w-full h-[1px] border-t border-dashed border-[var(--border-dark-color)]"></div>
        </div>
        <div className="flex flex-col gap-2 px-2 w-full">
          <RadioGroup className="w-[200px]">
            <Radio
              size="sm"
              value="all"
              onClick={() => setFilterData({ ...filterData, color: "all" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">All Products</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" absolute right-0 rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">1000</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              value="white"
              onClick={() => setFilterData({ ...filterData, color: "white" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">White Color</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">20</div>
                </Chip>
              </div>
            </Radio>

            <Radio
              size="sm"
              value="black"
              onClick={() => setFilterData({ ...filterData, color: "black" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">Black Color</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">200</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              value="red"
              onClick={() => setFilterData({ ...filterData, color: "red" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">Red Color</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">500</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              value="green"
              onClick={() => setFilterData({ ...filterData, color: "green" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">Green Color</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">500</div>
                </Chip>
              </div>
            </Radio>
            <Radio
              size="sm"
              value="other"
              onClick={() => setFilterData({ ...filterData, color: "other" })}
              width={100}
              className="w-[300px]"
            >
              <div className="relative flex justify-between items-center w-[320px]">
                <div className="text-black/80 font-poppins">Other Color</div>
                <Chip
                  size="sm"
                  radius="none"
                  className=" rounded-sm scale-75 -mr-1 bg-slate-200"
                >
                  <div className="font-poppins font-semibold">500</div>
                </Chip>
              </div>
            </Radio>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Filter;
