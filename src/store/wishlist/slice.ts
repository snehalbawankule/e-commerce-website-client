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
      const lastId = state.wishlist.slice(-1)[0].id;
      const number = lastId + 1;
      let payload = { ...action.payload };
      payload.id = number;
      console.log(payload);
      state.wishlist.push(payload);
      axios.post("http://localhost:3001/postwishlist", {
        userEmail: action.payload.userEmail,
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
