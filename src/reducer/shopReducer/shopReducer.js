import SHOP_DATA from "../../shopData";

const INITIAL_STATE = {
  SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.types) {
    default:
      return state;
  }
};
export default shopReducer;
