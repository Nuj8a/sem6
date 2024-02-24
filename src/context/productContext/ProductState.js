import React, { useState, useEffect } from "react";
import ProductContext from "./ProductContext";

const ProductState = (props) => {
  const [orderData, setOrderData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );

  const combineObjects = (arr) => {
    const combined = {};
    arr.forEach((obj) => {
      const key = obj.productId + obj.userId + obj.pColor;
      if (combined[key]) {
        combined[key].quantity += obj.quantity;
      } else {
        combined[key] = { ...obj };
      }
    });
    return Object.values(combined);
  };

  useEffect(() => {
    localStorage.setItem("cartData", JSON.stringify(orderData));
  }, [orderData]);

  const handleSetOrderData = (data) => {
    const combinedData = combineObjects(data);
    setOrderData(combinedData);
  };

  const [summaryData, setSummaryData] = useState([]);

  return (
    <ProductContext.Provider
      value={{
        setOrderData: handleSetOrderData,
        orderData,
        setSummaryData,
        summaryData,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
