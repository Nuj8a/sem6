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
