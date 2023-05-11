import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const addHandPicked = createAsyncThunk(
  "handPickeds/addHandPicked",
  async (_, { dispatch }) => {
    return fetch(
      "http://localhost:3001/getproducts?page=1&size=12&sort=createdAt&order=ASC"
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addHandPickeds(json));
      });
  }
);
