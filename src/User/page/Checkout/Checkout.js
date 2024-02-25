import React, { useContext, useState } from "react";
import ProductContext from "../../../context/productContext/ProductContext";
import UserData from "./UserData";

const Checkout = () => {
  const { summaryData, postOrderAddresses, setRender, setOrderDataFinal } =
    useContext(ProductContext);

  let subtotal = summaryData.reduce((acc, cur) => acc + cur.price, 0);
  let shipping = 100;

  const [deliveryData, setDeliveryData] = useState({
    fName: "",
    email: "",
    mobileNumber: "",
    province: "",
    city: "",
    area: "",
    address: "",
    landmark: "",
  });
  const [errors, setErrors] = useState({});

  const inputvalueChange = (e) => {
    setDeliveryData({ ...deliveryData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const placeOrderBtnclk = () => {
    if (validateForm()) {
      postOrderAddresses(deliveryData);
      setOrderDataFinal({});
      setRender((p) => !p);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    for (const key in deliveryData) {
      if (!deliveryData[key]) {
        newErrors[key] = "This field is required";
        isValid = false;
      }
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(deliveryData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    const mobilePattern = /^(97|98)/;
    if (!mobilePattern.test(deliveryData.mobileNumber)) {
      newErrors.mobileNumber = "Mobile number must start with 97 or 98";
      isValid = false;
    } else if (deliveryData.mobileNumber?.length !== 10) {
      newErrors.mobileNumber = "Mobile number must be 10 digits";
      isValid = false;
    }

    if (deliveryData.city?.length < 3) {
      newErrors.city = "City must be at least 3 characters";
      isValid = false;
    }
    if (deliveryData.area?.length < 3) {
      newErrors.area = "Area must be at least 3 characters";
      isValid = false;
    }
    if (deliveryData.address?.length < 3) {
      newErrors.address = "Full Address must be at least 3 characters";
      isValid = false;
    }
    if (deliveryData.landmark?.length < 3) {
      newErrors.landmark = "Landmark must be at least 3 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  return (
    <>
      <UserData
        deliveryData={deliveryData}
        inputvalueChange={inputvalueChange}
        errors={errors}
        summaryData={summaryData}
        subtotal={subtotal}
        shipping={shipping}
        placeOrderBtnclk={placeOrderBtnclk}
        setDeliveryData={setDeliveryData}
      />
    </>
  );
};

export default Checkout;
