import React from "react";
import "./input.css";

const Input = ({ label, onChange, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={onChange} />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Input;
