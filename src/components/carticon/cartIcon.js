import React from "react";
import "./cartIcon.css";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../actions/actions";
import { selectCartItemsCount } from "../../redux/cart.utils";
import { ReactComponent as ShoppingCart } from "../../assets/images/shopping-bag.svg";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
