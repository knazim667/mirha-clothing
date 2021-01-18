import React from "react";
import "./button.css";

const Button = ({ title, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? "btn-primary" : ""} btn`}
      {...otherProps}
    >
      {title}
    </button>
  );
};

export default Button;
