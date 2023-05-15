import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (_, { dispatch }) => {
    return fetch(
      "http://localhost:3001/getproducts?page=1&size=12&sort=createdAt&order=DESC"
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addProducts(json));
      });
  }
);
