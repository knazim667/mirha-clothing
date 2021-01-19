import ActionTypes from "./types";

export const setCurrentUser = (user) => ({
  type: ActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const toggleCartHidden = () => ({
  type: ActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item,
});
