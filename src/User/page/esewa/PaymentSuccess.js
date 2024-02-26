import React, { useEffect, useContext } from "react";
import ProductContext from "../../../context/productContext/ProductContext";

const PaymentSuccess = () => {
  const { updateOrderBilling, deleteOrder } = useContext(ProductContext);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get("oid");
    const amount = urlParams.get("amt");

    // Call the updateOrderBilling function with the correct parameters
    updateOrderBilling(orderId, amount, "EPAYTEST")
      .then((res) => {
        console.log(res);
        if (res.resData?.billing) {
          console.log("Order Success");
        } else {
          deleteOrder(orderId).then((respo) => {
            console.log(respo);
          });
        }
      })
      .catch((error) => {
        console.error("Error updating billing:", error);
      });
  }, [deleteOrder, updateOrderBilling]);

  // const updateBil = async (orderId, TAmt, scd) => {
  //   const resdata = await updateOrderBilling(orderId, TAmt, scd);
  //   return resdata;
  // };

  return (
    <div>
      <div>PaymentSuccess</div>
    </div>
  );
};

export default PaymentSuccess;
