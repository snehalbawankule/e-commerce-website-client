import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const addHelpCenter = createAsyncThunk(
  "helpcenter/addHelpcenter",
  async (_, { dispatch }) => {
    return fetch(
      "  http://localhost:3001/get-helpcenter?page=1&size=12&sort=createdAt&order=ASC"
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addHelpCenter(json));
      });
  }
);
