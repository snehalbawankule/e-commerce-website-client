import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./slice";

export const getCurrentUserProfile = createAsyncThunk(
  "user/profile",
  async (_, { dispatch }) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser") || "{}");
    return fetch(`http://localhost:3001/check-user?email=${currentUser.email}`)
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.getCurrentUserProfile(json));
      });
  }
);
