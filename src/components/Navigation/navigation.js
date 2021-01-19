import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { auth } from "../firebase/firebase.utils";
import { connect } from "react-redux";
import "./navigation.css";
import CartIcon from "../carticon/cartIcon";
import CartDropdown from "../cartDropdown/cartDropdown";

class Navigation extends Component {
  render() {
    const { currentUser, hidden } = this.props;
    return (
      <div className="header">
        <Link to="/" className="logo-container">
          <Logo />
        </Link>
        <div className="nav-items">
          <div className="item">
            <Link to="/shop">Shop</Link>
          </div>
          <div className="item">
            <Link to="/contact">Contact</Link>
          </div>
          {currentUser ? (
            <div className="item" onClick={() => auth.signOut()}>
              logout
            </div>
          ) : (
            <div className="item">
              <Link to="/signIn">login</Link>
            </div>
          )}
          <CartIcon />
        </div>
        {hidden ? null : <CartDropdown />}
      </div>
    );
  }
}
const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});
export default connect(mapStateToProps)(Navigation);
