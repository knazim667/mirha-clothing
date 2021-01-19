import React from "react";
import Button from "../button/button";
import "./collectionItem.css";

const CollectionItems = ({ imageUrl, name, price }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button title={"add to cart"} inverted />
    </div>
  );
};

export default CollectionItems;
