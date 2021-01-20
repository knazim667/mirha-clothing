import { createSelector } from "reselect";

export const addItemToCart = (cartItems, item) => {
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
export const removeItemfromCart = (cartItems, item) => {
  const existingCartItem = cartItems.filter(
    (cartItem) => cartItem.id === item.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== item.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === item.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
export const clearItemFromCh = (cartItems, item) => {
  const updateCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== item.id
  );

  return updateCartItems;
};

const selectCart = (state) => state.cart;
const selectUser = (state) => state.user;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalator, currentItem) => accumalator + currentItem.quantity,
      0
    )
);

export const selectCartItemsTotal = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumalator, currentItem) =>
        accumalator + currentItem.quantity * currentItem.price,
      0
    )
);
