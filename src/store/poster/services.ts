import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const addPoster = createAsyncThunk(
  "posters/addPoster",
  async (_, { dispatch }) => {
    return fetch(
      "http://localhost:3001/getposter?page=1&size=12&sort=createdAt&order=DESC"
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addPoster(json));
      });
  }
);
