import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultWishlist } from "./types";
import axios from "axios";
const initialState: defaultState = {
  wishlist: [defaultWishlist],
};
const { actions, reducer } = createSlice({
  name: "wishlists",
  initialState,
  reducers: {
    getWishlist(state, action) {
      state.wishlist = action.payload;
    },
    addWishlist(state, action) {
      state.wishlist.push(action.payload);
      axios.post("http://localhost:3001/postwishlist", {
        userId: action.payload.userId,
        productId: action.payload.productId,
        quantity: action.payload.quantity,
        size: action.payload.size,
        color: action.payload.color,
      });
    },

    removeWishlist(state, action) {
      axios.delete(`http://localhost:3001/removewishlist?id=${action.payload}`);
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.wishlists.wishlist;
