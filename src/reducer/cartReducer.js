import ActionTypes from "../actions/types";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const addItemToCart = (cartItems, item) => {
  const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...item, quantity: 1 }];
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
    default:
      return state;
  }
};

export default cartReducer;
