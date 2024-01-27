"use client";
import React from "react";
import TablePage from "./Table";
import { useNavigate } from "react-router-dom";
import { IoBag } from "react-icons/io5";
import Breadcrumb from "../../../Dashboard/common/Navigation/BredCrumb";

const Page = () => {
  const navigate = useNavigate();
  return (
    <div className="px-2 my-10">
      <div className="-mb-3 mt-7 text-[var(--text-dark-color)] capitalize font-semibold font-poppins text-3xl">
        Checkout Websites
      </div>
      <div className="flex my-5 justify-between items-center">
        <Breadcrumb category={"services"} categoryLink={"services"} />
      </div>
      <div className="grid mt-5 gap-8 grid-cols-12">
        <div className="col-span-8">
          <TablePage />
        </div>
        <div className=" col-span-4 font-poppins h-full  ">
          <div className="px-7 py-5 rounded border border-black/15">
            <h3 className="text-xl text-[var(--text-dark-color)] font-semibold mb-1">
              Order Summary
            </h3>
            <div className="flex flex-col gap-1 mt-4">
              <div className="text-sm flex justify-between text-[var(--text-light-color)]">
                <div>Subtotal:</div>
                <div>Rs. 1,20,000</div>
              </div>
              <div className="text-sm flex justify-between text-[var(--text-light-color)]">
                <div>Discount:</div>
                <div>10%</div>
              </div>
              <div className="text-sm flex border-dashed justify-between border-y py-3 border-black/15 mt-3 my-2 text-[var(--text-light-color)]">
                <div className="uppercase">Total:</div>
                <div className="text-[var(--primary-color)] font-semibold text-base">
                  Rs. 1,00,000
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate("/checkout")}
              className="border w-full py-3 hover:bg-[var(--primary-color)] duration-200 font-semibold font-poppins hover:text-[var(--background-color)] border-[var(--primary-color)] text-[var(--primary-color)] mt-4 rounded-sm capitalize text-sm flex items-center justify-center mb-3 gap-[7px] tracking-wide"
            >
              <IoBag className="scale-110 text-base mb-[2px]" />
              Proceed to checkout ( 1 )
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
