import React from "react";
import Button from "../button/button";
import "./cartDropdown.css";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button title="go to checkout" />
    </div>
  );
};

export default CartDropdown;
