import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./types";
import { defaultHandPicked } from "./initial-state";
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
