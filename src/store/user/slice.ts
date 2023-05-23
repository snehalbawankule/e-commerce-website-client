import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultWishlist } from "./types";
import axios from "axios";
const initialState: defaultState = {
  wishlist: [defaultWishlist],
};
const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    getCurrentUserProfile(state, action) {
      state.wishlist = action.payload;
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.user.profile;
