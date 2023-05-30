import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultUser } from "./types";
import axios from "axios";

const initialState: defaultState = {
  user: defaultUser,
};
const { actions, reducer } = createSlice({
  name: "user",
  initialState,
  reducers: {
    getCurrentUser(state, action) {
      state.user = action.payload;
    },
    userUpdate(state, action) {
      const { firstname, lastname, email } = action.payload;
      const existingPost = state.user;
      if (existingPost) {
        existingPost.firstname = firstname;
        existingPost.lastname = lastname;
        existingPost.email = email;
        axios
          .post("http://localhost:3001/update-user", {
            id: action.payload.id,
            firstname: action.payload.firstname,
            lastname: action.payload.lastname,
            email: action.payload.email,
          })
          .then(() => {
            alert("User info updated successfully");
          });
      }
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.user.user;
