import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./userReducer";
import cartReducer from "./cartReducer/cartReducer";
import categoryReducer from "./categoryReducer";
import shopReducer from "./shopReducer/shopReducer";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["cart"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  category: categoryReducer,
  shopData: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
