import React, { useEffect, useContext } from "react";
import ProductContext from "../../../context/productContext/ProductContext";
import { Button } from "@nextui-org/react";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const PaymentSuccess = () => {
  const { updateOrderBilling, deleteOrder } = useContext(ProductContext);
  const navigae = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("oid");
    const amount = urlParams.get("amt");
    if (orderId) {
      updateOrderBilling(orderId, amount, "EPAYTEST")
        .then((res) => {
          console.log(res);
          if (res.resData?.billing) {
            console.log("Order Success");
            navigae("/success");
          } else {
            deleteOrder(orderId).then((respo) => {
              console.log(respo);
              navigae("/esewa_payment_failed");
            });
          }
        })
        .catch((error) => {
          console.error("Error updating billing:", error);
        });
    }
  }, [deleteOrder, updateOrderBilling]);

  return <div></div>;
};

export default PaymentSuccess;
