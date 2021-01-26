import React from "react";
import "./collections.css";
import { withRouter } from "react-router-dom";
import CollectionItems from "./collectionItems";

const Collections = ({ title, items, history, match, linkUrl }) => {
  return (
    <div className="collection-preview">
      <h3
        className="title"
        onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}
      >
        {title}
      </h3>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItems key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(Collections);
