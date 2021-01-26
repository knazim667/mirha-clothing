import { createSelector } from "reselect";
import memoize from "lodash.memoize";

const selectShop = (state) => state.shopData;

export const shopSelector = createSelector(
  [selectShop],
  (shopData) => shopData.SHOP_DATA
);

export const shopCollectionsForOverview = createSelector(
  [shopSelector],
  (SHOP_DATA) => Object.keys(SHOP_DATA).map((key) => SHOP_DATA[key])
);

export const selectedCollection = memoize((shopUrlParam) =>
  createSelector([shopSelector], (SHOP_DATA) => SHOP_DATA[shopUrlParam])
);
