import React from "react";
import "./checkout.css";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartItemsTotal,
} from "../../reducer/cartReducer/cartSelecter";
import CheckoutItem from "../../components/checkout/checkoutItem";

const Checkout = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div>
        <span className="total">Total amount ${total}</span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartItemsTotal(state),
});
export default connect(mapStateToProps)(Checkout);
