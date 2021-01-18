import React from "react";
import "./input.css";

const Input = ({ label, onChange, ...otherProps }) => {
  return (
    <div className="group">
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      ) : null}
      <input className="form-input" onChange={onChange} {...otherProps} />
    </div>
  );
};

export default Input;
