import { createSlice } from "@reduxjs/toolkit";
import { defaultState } from "./types";
import axios from "axios";
import { defaultUser } from "./initial-state";

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
    addNewAddress(state, action) {
      const existingPost = state.user;
      existingPost.user_addresses.push(action.payload);

      axios
        .post("http://localhost:3001/post-user-address", {
          userId: action.payload.userId,
          name: action.payload.name,
          mobile: action.payload.mobile,
          address_line1: action.payload.address_line1,
          address_line2: action.payload.address_line2,
          city: action.payload.city,
          postal_code: action.payload.postal_code,
          state: action.payload.state,
          country: action.payload.country,
          alternative_mobile: action.payload.alternative_mobile,
          address_type: action.payload.address_type,
        })
        .then(() => {
          alert("User info updated successfully");
        });
    },
    updateAddress(state, action) {
      const existingPost = state.user.user_addresses.find(
        (item: any) => item.id === action.payload.id
      );

      if (existingPost) {
        existingPost.name = action.payload.name;
        existingPost.mobile = action.payload.mobile;
        existingPost.address_line1 = action.payload.address_line1;
        existingPost.address_line2 = action.payload.address_line2;
        existingPost.city = action.payload.city;
        existingPost.postal_code = action.payload.postal_code;
        existingPost.state = action.payload.state;
        existingPost.country = action.payload.country;
        existingPost.alternative_mobile = action.payload.alternative_mobile;
        existingPost.address_type = action.payload.address_type;
        axios
          .post("http://localhost:3001/update-user-address", {
            id: action.payload.id,
            userId: action.payload.userId,
            name: action.payload.name,
            mobile: action.payload.mobile,
            address_line1: action.payload.address_line1,
            address_line2: action.payload.address_line2,
            city: action.payload.city,
            postal_code: action.payload.postal_code,
            state: action.payload.state,
            country: action.payload.country,
            alternative_mobile: action.payload.alternative_mobile,
            address_type: action.payload.address_type,
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
