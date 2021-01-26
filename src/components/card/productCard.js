import React from "react";
import { withRouter } from "react-router-dom";
import "./productCard.css";

const ProductCard = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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

export default withRouter(ProductCard);
