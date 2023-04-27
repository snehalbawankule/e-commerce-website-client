import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultBrand } from "./types";
//import axios from "axios";

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
