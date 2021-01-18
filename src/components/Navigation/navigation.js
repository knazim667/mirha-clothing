import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./navigation.css";

const Navigation = () => {
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
        <div className="item">
          <Link to="/signIn">login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
