import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultPoster } from "./types";

const initialState: defaultState = {
  poster: [defaultPoster],
};
const { actions, reducer } = createSlice({
  name: "poster",
  initialState,
  reducers: {
    addPoster(state, action) {
      state.poster = action.payload;
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.posters.poster;
