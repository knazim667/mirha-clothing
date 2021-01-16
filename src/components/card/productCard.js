import React from "react";
import "./productCard.css";

const ProductCard = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="content">
        <h2 className="title">{title}</h2>
        <span className="subtitle">shop</span>
      </div>
    </div>
  );
};

export default ProductCard;
