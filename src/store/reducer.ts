import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./category/slice";
import productReducer from "./product/slice";
import brandReducer from "./brand/slice";

const reducers = combineReducers({
  products: productReducer,
  categories: categoryReducer,
  brands: brandReducer,
});

export default reducers;
