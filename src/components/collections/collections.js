import React from "react";
import "./collections.css";
import CollectionItems from "./collectionItems";

const Collections = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h3 className="title">{title}</h3>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItems item={item} />
          ))}
      </div>
    </div>
  );
};

export default Collections;
