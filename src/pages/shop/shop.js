import React from "react";
import { Route } from "react-router-dom";
import Collection from "../../components/collections/collection";
import collectionsOverview from "../../components/collections/collectionsOverview";

const Shop = ({ match }) => {
  return (
    <div className="collections">
      <Route exact path={`${match.path}`} component={collectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  );
};

export default Shop;
