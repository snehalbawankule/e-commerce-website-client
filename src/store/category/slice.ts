import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./types";
import { defaultCategory } from "./initial-state";

const initialState: defaultState = {
  category: [defaultCategory],
};
const { actions, reducer } = createSlice({
  name: "category",
  initialState,
  reducers: {
    addCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.categories.category;
