import React from "react";
import { connect } from "react-redux";
import Collections from "./collections";
import { shopCollectionsForOverview } from "../../reducer/shopReducer/shopSelector";

import "./collectionsOverview.css";

const CollectionsOverview = ({ shopData }) => {
  return (
    <div className="collections-overview">
      {shopData.map((item) => (
        <Collections key={item.id} title={item.title} items={item.items} />
      ))}
    </div>
  );
};
const mapStateToProps = (state) => ({
  shopData: shopCollectionsForOverview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
