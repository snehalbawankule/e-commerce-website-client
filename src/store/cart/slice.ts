import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultCart } from "./types";
import axios from "axios";
const initialState: defaultState = {
  cart: [defaultCart],
};
const { actions, reducer } = createSlice({
  name: "carts",
  initialState,
  reducers: {
    getCarts(state, action) {
      state.cart = action.payload;
    },
    addCart(state, action) {
      state.cart.push(action.payload);
      axios.post("http://localhost:3001/post-cart", {
        productId: action.payload.productId,
        userEmail: action.payload.userEmail,
        quantity: action.payload.quantity,
        size: action.payload.size,
        color: action.payload.color,
      });
    },
    removeCart(state, action) {
      axios.delete(`http://localhost:3001/remove-cart?id=${action.payload}`);
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.carts.cart;
