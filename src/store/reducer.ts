import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./category/slice";
import productReducer from "./product/slice";
import brandReducer from "./brand/slice";
import wishlistReducer from "./wishlist/slice";
import posterReducer from "./poster/slice";
import handPickedReducer from "./handpicked/slice";
import cartReducer from "./cart/slice";
import userReducer from "./user/slice";
const reducers = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  brands: brandReducer,
  posters: posterReducer,
  wishlists: wishlistReducer,
  handPickeds: handPickedReducer,
  carts: cartReducer,
  users: userReducer,
});

export default reducers;
