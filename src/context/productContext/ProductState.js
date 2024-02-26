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
  const [checkoutPop, setCheckoutPop] = useState([]);

  const [alluserAddress, setAllUserAddress] = useState([]);
  const [userOrderData, setUserOrderData] = useState([]);

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
  const fetchOrderData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/api/order/product/orders/eachuser`,
        {
          headers: {
            "auth-token": `${JSON.parse(localStorage.getItem("token"))}`,
          },
        }
      );
      setUserOrderData(response.data);
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
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
  const postOrderData = async (data) => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/api/order/product/order`,
        data,
        {
          headers: {
            "auth-token": JSON.parse(localStorage.getItem("token")),
          },
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchOrderAddresses();
    fetchOrderData();
  }, [render]);
  const [finalPostData, setFinalPostData] = useState({});
  const [isOrderNow, setIsOrderNow] = useState(false);
  const [orderNowData, setOrderNowData] = useState([]);

  const finalOrder = async (data) => {
    if (isOrderNow) {
      let finaldata = { ...data, products: orderNowData };
      setFinalPostData(finaldata);
      const resData = await postOrderData(finaldata);
      console.log(resData);
    } else {
      if (data.products[0]) {
        setFinalPostData(data);
        const resData = await postOrderData(data);
        localStorage.removeItem("cartData");
        setOrderData([]);
        console.log(resData);
      }
    }
    setRender((p) => !p);
    // setSummaryData([]);
  };

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
        alluserAddress,
        finalOrder,
        finalPostData,
        userOrderData,
        setIsOrderNow,
        isOrderNow,
        setOrderNowData,
        setCheckoutPop,
        checkoutPop,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
