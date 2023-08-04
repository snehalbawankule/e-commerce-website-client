import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./types";
import { defaultProduct } from "./initial-state";

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
