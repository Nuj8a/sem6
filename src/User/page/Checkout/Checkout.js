import React, { useContext } from "react";
import { Button, Card, Checkbox } from "@nextui-org/react";
import Breadcrumb from "../../../Dashboard/common/Navigation/BredCrumb";
import { PiShoppingCartFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import ProductContext from "../../../context/productContext/ProductContext";
import formatRS from "../../../libs/FormatRS";
import UserData from "./UserData";

const Checkout = ({ finalTable }) => {
  const navigate = useNavigate();
  const { summaryData } = useContext(ProductContext);
  console.log(finalTable);

  let subtotal = summaryData.reduce((acc, cur) => acc + cur.price, 0);
  let shipping = 100;

  return (
    <div className="px-5 min-h-[70vh]">
      <div className="-mb-3 mt-7 text-black/80 capitalize font-semibold font-poppins text-3xl">
        Checkout Websites
      </div>
      <div className="flex my-5 justify-between items-center">
        <Breadcrumb category={"services"} categoryLink={"services"} />
      </div>
      <div className="grid gap-8 px-2 grid-cols-12">
        <div className="col-span-8">
          <Card shadow="sm" className="p-7 font-poppins rounded">
            <h3 className="text-xl mb-5 text-black/80 font-semibold">
              Billing Address
            </h3>
            <UserData />
          </Card>
        </div>
        <div className="col-span-4 font-poppins h-full  ">
          <Card shadow="sm" className="px-7 py-5 rounded">
            <h3 className="text-xl text-black/80 font-semibold mb-1">
              CART SUMMARY
            </h3>
            <div className="flex flex-col gap-1 mt-4">
              {summaryData.map((e, index) => (
                <div
                  key={index}
                  className="text-sm flex justify-between text-black/80"
                >
                  <div className="capitalize line-clamp-1">{e.productName}</div>
                  <div>{formatRS(e.price)}</div>
                </div>
              ))}
              <div className="text-sm flex border-dashed justify-between border-t py-3 border-black/15 mt-3 text-black/80">
                <div className="flex flex-col w-full gap-2">
                  <div className="flex justify-between w-full items-center">
                    <div className="uppercase text-black font-poppins">
                      Sub-Total:
                    </div>
                    <div className="text-black font-semibold text-base">
                      {formatRS(subtotal)}
                    </div>
                  </div>
                  <div className="text-sm flex justify-between text-black">
                    <div>Shipping:</div>
                    <div>{formatRS(subtotal === 0 ? 0 : shipping)}</div>
                  </div>
                </div>
              </div>
              <div className="text-sm flex border-dashed justify-between border-y py-3 border-black/15 mt-1 my-2 text-black">
                <div className="uppercase font-semibold">Total:</div>
                <div className="font-semibold text-base">
                  {formatRS(subtotal + (subtotal === 0 ? 0 : shipping))}
                </div>
              </div>
            </div>
            <div className="my-2">
              <h2 className="capitalize font-semibold text-slate-700 tracking-wide mb-2">
                Payment method
              </h2>
              <div className="flex px-2 gap-2 flex-col">
                <Checkbox size="sm">E-Sewa</Checkbox>
                <Checkbox size="sm">Khalti</Checkbox>
              </div>
            </div>
            <Button
              className="w-full mt-4 !rounded-sm"
              color="primary"
              endContent={
                <PiShoppingCartFill className="scale-110 text-base mb-[2px]" />
              }
              onClick={() => navigate("/checkout")}
            >
              Place Order
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
