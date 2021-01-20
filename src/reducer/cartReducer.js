import ActionTypes from "../actions/types";
import {
  addItemToCart,
  clearItemFromCh,
  removeItemfromCart,
} from "../redux/cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case ActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case ActionTypes.CLEAR_ITEM_FROM_CHECKOUT:
      return {
        ...state,
        cartItems: clearItemFromCh(state.cartItems, action.payload),
      };
    case ActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemfromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cartReducer;
