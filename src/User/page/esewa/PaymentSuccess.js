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
  }, [deleteOrder, updateOrderBilling, navigae]);

  return (
    <div className="min-h-[70vh] flex justify-center items-center">
      <div className="bg-gray-100 h-[300px]">
        <div className="bg-white p-6  md:mx-auto">
          <svg
            viewBox="0 0 24 24"
            className="text-green-600 w-16 h-16 mx-auto my-6"
          >
            <path
              fill="currentColor"
              d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
            ></path>
          </svg>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Order Done!
            </h3>
            <p className="text-gray-600 my-2">
              Thank you for completing your secure online order.
            </p>
            <p> Have a great day! </p>

            <div className="py-10 text-center">
              <Button
                startContent={<FaArrowLeft />}
                color="primary"
                radius="full"
                variant="solid"
                onClick={() => navigae("/")}
              >
                Back To Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
