import React from "react";
import "./cartIcon.css";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../actions/actions";
import { ReactComponent as ShoppingCart } from "../../assets/images/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(CartIcon);
