import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultProduct } from "./types";

const initialState: defaultState = {
  product: [defaultProduct],
};
const { actions, reducer } = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.product = action.payload;
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.products.product;
