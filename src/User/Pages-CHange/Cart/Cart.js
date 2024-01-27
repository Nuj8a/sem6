import React from "react";
import CartContent from "./CartContent";
import Related from "../../Common/Page/Related";
import BreadCrumbs from "../../Common/Navigation/BreadCrumb";

const Cart = () => {
  return (
    <div className="p-3 ">
      <div className="-mb-3 mt-7 text-[var(--text-dark-color)] capitalize font-semibold font-poppins text-3xl">
        Order Now for Special Offer
      </div>
      <div className="flex justify-between items-center">
        <BreadCrumbs category={"Cart"} />
      </div>
      <CartContent />
      <Related />
    </div>
  );
};

export default Cart;
