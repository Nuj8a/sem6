import React, { useState, useEffect } from "react";
import ProductContext from "./ProductContext";
import axios from "axios";
import { API_BASE_URL } from "../../redux/config";

const ProductState = (props) => {
  const [orderData, setOrderData] = useState(
    JSON.parse(localStorage.getItem("cartData")) || []
  );
  const [summaryData, setSummaryData] = useState([]);
  const [userAddress, setUserAddress] = useState({});
  const [render, setRender] = useState(false);

  const [alluserAddress, setAllUserAddress] = useState([]);

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

  const fetchOrderAddresses = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/order/orderaddress`,
        {
          headers: {
            "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      setAllUserAddress(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const postOrderAddresses = async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/order/orderaddress`,
        data,
        {
          headers: {
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      if (response.data) {
        console.log("Address added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrderAddresses();
  }, [render]);

  // console.log(userAddress);
  console.log(alluserAddress);
  return (
    <ProductContext.Provider
      value={{
        setOrderData: handleSetOrderData,
        orderData,
        setSummaryData,
        summaryData,
        setUserAddress,
        userAddress,
        postOrderAddresses,
        setRender,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
