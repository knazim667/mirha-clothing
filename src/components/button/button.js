import React from "react";
import "./button.css";

const Button = ({ title, isGoogleSignIn, inverted, ...otherProps }) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "btn-primary" : ""
      } btn`}
      {...otherProps}
    >
      {title}
    </button>
  );
};

export default Button;
