import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const getWishlist = createAsyncThunk(
  "wishlist/getWishlist",
  async (_, { dispatch }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    return fetch(
      `http://localhost:3001/getCurrent?page=1&size=12&sort=createdAt&order=DESC&userEmail=${currentUser.email}`
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.getWishlists(json));
      });
  }
);
