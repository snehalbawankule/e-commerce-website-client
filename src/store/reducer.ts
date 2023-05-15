import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./category/slice";
import productReducer from "./product/slice";
import brandReducer from "./brand/slice";
import wishlistReducer from "./wishlist/slice";
import posterReducer from "./poster/slice";
import handPickedReducer from "./handpicked/slice";
const reducers = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  brands: brandReducer,
  posters: posterReducer,
  wishlists: wishlistReducer,
  handPickeds: handPickedReducer,
});

export default reducers;