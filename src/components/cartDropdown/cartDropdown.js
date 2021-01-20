import React from "react";
import Button from "../button/button";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart.utils";
import { toggleCartHidden } from "../../actions/actions";
import "./cartDropdown.css";
import CartItem from "./cartItems";
import { withRouter } from "react-router-dom";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart list is empty</span>
        )}
      </div>
      <Button
        title="go to checkout"
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
