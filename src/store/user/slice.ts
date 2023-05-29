import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultUser } from "./types";
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
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.user.user;
