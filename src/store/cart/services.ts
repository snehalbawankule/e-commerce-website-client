import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";
import { useAppSelector } from "../../hooks/hooks";

export const getCart = createAsyncThunk(
  "cart/getCart",
  async (_, { dispatch }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    return fetch(
      `http://localhost:3001/get-current-user-cart?page=1&size=12&sort=createdAt&order=DESC&userId=${currentUser.id}`
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.getCarts(json));
      });
  }
);
// export const getOrder = createAsyncThunk(
//   "cart/getOrder",
//   async (_, { dispatch }) => {
//     const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
//     return fetch(
//       `http://localhost:3001/get-order-by-id?userId=${currentUser.id}`
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         console.log(json);
//         dispatch(actions.getOrders(json));
//       });
//   }
// );
