import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./types";
import { defaultOrder } from "./initial-state";
import axios from "axios";

const initialState: defaultState = {
  order: [defaultOrder],
};

const { actions, reducer } = createSlice({
  name: "orders",
  initialState,
  reducers: {
    getOrders(state, action) {
      state.order = action.payload;
    },

    addOrder(state, action) {
      state.order.push(action.payload);
      axios.post("http://localhost:3001/post-order", {
        userId: action.payload.userId,
        shippingAddress: action.payload.shippingAddress,
        totalCost: action.payload.totalCost,
        items: action.payload.items,
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
