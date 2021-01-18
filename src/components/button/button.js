import React from "react";
import "./button.css";

const Button = ({ title, btnClass, type }) => {
  return (
    <button className={`btn ${btnClass}`} type={`${type ? type : "button"}`}>
      {title}
    </button>
  );
};

export default Button;
