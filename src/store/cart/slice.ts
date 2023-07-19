import { createSlice, current } from "@reduxjs/toolkit";
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

    updateCarts(state, action) {
      const { productId, quantity } = action.payload;
      const existingCart = [...state.cart]; // Create a new array with the existing cart items

      const itemIndex = existingCart.findIndex(
        (item) => item.productId === productId
      );
      if (itemIndex !== -1) {
        // If the item is found in the cart
        existingCart[itemIndex] = { ...existingCart[itemIndex], quantity }; // Create a new object with the updated quantity
        axios.post("http://localhost:3001/update-cart", {
          productId,
          quantity,
        });
      }

      // Return the updated state with the modified cart
      return { ...state, cart: existingCart };
    },
    addCart(state, action) {
      state.cart.push(action.payload);
      axios.post("http://localhost:3001/post-cart", {
        userId: action.payload.userId,
        productId: action.payload.productId,
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
