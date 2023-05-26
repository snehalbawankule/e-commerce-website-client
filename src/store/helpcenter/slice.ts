import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultHelpCenter } from "./types";
//import axios from "axios";

const initialState: defaultState = {
  helpCenter: [defaultHelpCenter],
};
const { actions, reducer } = createSlice({
  name: "helpcenter",
  initialState,
  reducers: {
    addHelpCenter(state, action) {
      state.helpCenter = action.payload;
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.helpCenters.helpCenter;
