import React from "react";
import { connect } from "react-redux";
import { selectedCollection } from "../../reducer/shopReducer/shopSelector";
import CollectionItems from "./collectionItems";
import "./collection.css";

const Collection = ({ collection }) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItems key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectedCollection(ownProps.match.params.collectionId)(state),
});
export default connect(mapStateToProps)(Collection);
