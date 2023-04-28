import { createSlice } from "@reduxjs/toolkit";
import { defaultState, defaultHandPicked } from "./types";
//import axios from "axios";

const initialState: defaultState = {
  handPicked: [defaultHandPicked],
};
const { actions, reducer } = createSlice({
  name: "handpicked",
  initialState,
  reducers: {
    addHandPickeds(state, action) {
      state.handPicked = action.payload;
    },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.handPickeds.handPicked;
