import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./types";
//import axios from "axios";
import { defaultBrand } from "./initial-state";
const initialState: defaultState = {
  brand: [defaultBrand],
};
const { actions, reducer } = createSlice({
  name: "brand",
  initialState,
  reducers: {
    addBrand(state, action) {
      state.brand = action.payload;
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.brands.brand;
