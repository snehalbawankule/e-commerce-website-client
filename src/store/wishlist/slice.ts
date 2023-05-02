import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultWishlist } from "./types";
//import axios from "axios";

const initialState: defaultState = {
  wishlist: [defaultWishlist],
};
const { actions, reducer } = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    addWishlists(state, action) {
      state.wishlist = action.payload;
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.wishlists.wishlist;
