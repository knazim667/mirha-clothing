import React from "react";
import ProductCard from "../card/productCard";
import { connect } from "react-redux";
import { selectCategoryItems } from "../../redux/cart.utils";
import "./categories.css";

const Categories = ({ sections }) => {
  return (
    <div className="categories">
      {sections.map(({ id, ...otherProps }) => (
        <ProductCard key={id} {...otherProps} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  sections: selectCategoryItems(state),
});
export default connect(mapStateToProps)(Categories);
