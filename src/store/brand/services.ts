import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const addBrand = createAsyncThunk(
  "brands/addBrand",
  async (_, { dispatch }) => {
    return fetch(
      "http://localhost:3001/getbrand?page=1&size=12&sort=createdAt&order=ASC"
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addBrand(json));
      });
  }
);
