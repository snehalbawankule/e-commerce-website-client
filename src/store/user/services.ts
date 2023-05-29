import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const getCurrentUser = createAsyncThunk(
  "user/user",
  async (_, { dispatch }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    return fetch(`http://localhost:3001/get-user-address?id=${currentUser.id}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.getCurrentUser(json));
      });
  }
);
