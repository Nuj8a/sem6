"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import TablePage from "./Table";
import { useNavigate } from "react-router-dom";
import { IoBag } from "react-icons/io5";
import Breadcrumb from "../../../Dashboard/common/Navigation/BredCrumb";
import { Button, Card } from "@nextui-org/react";
import ProductContext from "../../../context/productContext/ProductContext";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../../redux/slices/authSlice";
import { getproducts } from "../../../redux/slices/productSlice";
import formatRS from "../../../libs/FormatRS";

const Page = () => {
  const navigate = useNavigate();
  const { orderData } = useContext(ProductContext);
  const dispatch = useDispatch();
  const userRef = useRef(false);
  const { allUserData } = useSelector((state) => state.authReducer);
  const { productData } = useSelector((state) => state.productReducer);

  const [finalTable, setFinalTable] = useState([]);

  useEffect(() => {
    const joinedData = orderData.map((order, index) => {
      const users = allUserData.find((user) => user._id === order.userId);
      const product = productData.find((prod) => prod._id === order.productId);
      return {
        ...order,
        user: users,
        product: product,
        sn: index + 1,
      };
    });
    setFinalTable(joinedData);
  }, [allUserData, productData, orderData]);

  useEffect(() => {
    if (userRef.current === false) {
      dispatch(getUsers());
      dispatch(getproducts());
    }
    return () => {
      userRef.current = true;
    };
  }, [dispatch]);

  const getActualVal = (price, quantity, discount) => {
    let totalprice = price * quantity;
    return totalprice - (totalprice * discount) / 100;
  };

  let subtotal = 0;
  let shipping = 100;

  return (
    <div className="px-5 my-5">
      <div className="-mb-3 mt-7 text-black/80 capitalize font-semibold font-poppins text-3xl">
        Checkout Websites
      </div>
      <div className="flex my-5 justify-between items-center">
        <Breadcrumb category={"services"} categoryLink={"services"} />
      </div>
      <div className="grid mt-5 px-2 gap-8 grid-cols-12">
        <div className="col-span-8">
          <TablePage cartData={finalTable} />
        </div>
        <div className="col-span-4 font-poppins h-full  ">
          <Card shadow="sm" className="px-7 py-5 rounded">
            <h3 className="text-xl text-black/80 font-semibold mb-1">
              Order Summary
            </h3>
            <div className="flex flex-col gap-1 mt-4">
              {finalTable.map((e, index) => {
                let afterDiscount = getActualVal(
                  e?.product?.price,
                  e?.quantity,
                  e?.product?.discount
                );
                subtotal += afterDiscount;
                return (
                  <div key={index} className="border-b pb-1 mb-1">
                    <div className="text-sm flex justify-between text-black/80">
                      <div className="flex gap-1">
                        <div className="line-clamp-1 md:w-[100px] xl:w-[160px] capitalize">
                          {e?.product?.title}:
                        </div>
                        <div className="text-xs font-poppins font-semibold text-gray-500">
                          (Qty {e?.quantity})
                        </div>
                      </div>
                      <div>{formatRS(e?.product?.price * e?.quantity)}</div>
                    </div>
                    <div className="text-sm flex justify-between text-black/80">
                      <div>Discount:</div>
                      <div>-{e?.product?.discount}%</div>
                    </div>
                  </div>
                );
              })}
              <div className="text-sm flex flex-col gap-1 border-dashed pt-1 justify-between text-black/80">
                <div className="w-ful flex justify-between items-center">
                  <div className="font-semibold text-gray-600">Subtotal:</div>
                  <div className="font-semibold text-gray-600">
                    {formatRS(subtotal)}
                  </div>
                </div>
                <div className="w-ful flex justify-between items-center">
                  <div>Shipping:</div>
                  <div>+ {formatRS(shipping)}</div>
                </div>
              </div>
              <div className="text-sm flex border-dashed justify-between border-y py-3 border-black/15 mt-3 my-2 text-black/80">
                <div className="uppercase font-semibold">Total:</div>
                <div className="text-[#ea580c] font-semibold text-base">
                  {formatRS(subtotal + shipping)}
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
