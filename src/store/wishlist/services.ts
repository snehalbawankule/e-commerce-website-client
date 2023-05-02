import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const addWishlist = createAsyncThunk(
  "wishlist/addWishlist",
  async (_, { dispatch }) => {
    return fetch(
      "http://localhost:3001/getwishlist?page=1&size=12&sort=createdAt&order=DESC"
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addWishlists(json));
      });
  }
);
