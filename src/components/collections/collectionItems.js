import React from "react";
import Button from "../button/button";
import { connect } from "react-redux";
import { addItem } from "../../actions/actions";
import "./collectionItem.css";

const CollectionItems = ({ imageUrl, name, price, addItem, item }) => {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button title={"add to cart"} inverted onClick={() => addItem(item)} />
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionItems);
