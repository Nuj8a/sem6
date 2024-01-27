"use client";
import React from "react";
import TablePage from "./Table";
import { useNavigate } from "react-router-dom";
import { IoBag } from "react-icons/io5";
import Breadcrumb from "../../../Dashboard/common/Navigation/BredCrumb";
import { Button, Card } from "@nextui-org/react";

const Page = () => {
  const navigate = useNavigate();
  return (
    <div className="px-4 my-5">
      <div className="-mb-3 mt-7 text-black/80 capitalize font-semibold font-poppins text-3xl">
        Checkout Websites
      </div>
      <div className="flex my-5 justify-between items-center">
        <Breadcrumb category={"services"} categoryLink={"services"} />
      </div>
      <div className="grid mt-5 px-2 gap-8 grid-cols-12">
        <div className="col-span-8">
          <TablePage />
        </div>
        <div className="col-span-4 font-poppins h-full  ">
          <Card shadow="sm" className="px-7 py-5 rounded">
            <h3 className="text-xl text-black/80 font-semibold mb-1">
              Order Summary
            </h3>
            <div className="flex flex-col gap-1 mt-4">
              <div className="text-sm flex justify-between text-black/80">
                <div>Subtotal:</div>
                <div>Rs. 1,20,000</div>
              </div>
              <div className="text-sm flex justify-between text-black/80">
                <div>Discount:</div>
                <div>10%</div>
              </div>
              <div className="text-sm flex border-dashed justify-between border-y py-3 border-black/15 mt-3 my-2 text-black/80">
                <div className="uppercase">Total:</div>
                <div className="text-[#ea580c] font-semibold text-base">
                  Rs. 1,00,000
                </div>
              </div>
            </div>
            <Button
              className="w-full mt-4 !rounded-sm"
              color="primary"
              endContent={<IoBag className="scale-110 text-base mb-[2px]" />}
              onClick={() => navigate("/checkout")}
            >
              Proceed to checkout ( 1 )
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
