import { createAsyncThunk } from "@reduxjs/toolkit";
import { actions } from "./reducer";

export const addProduct = createAsyncThunk(
  "articles/addArticle",
  async (_, { dispatch }) => {
    return fetch(
      "http://localhost:3001/getproducts?page=1&size=20&sort=createdAt&order=DESC"
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch(actions.addProducts(json));
      });
  }
);

// export const addLatestArticle = createAsyncThunk(
//   "articles/addLatestArticle",
//   async (_, { dispatch }) => {
//     return fetch(
//       "http://localhost:3001/get-articles?page=1&size=12&sort=createdAt&order=DESC"
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(actions.addLatestArticle(json));
//       });
//   }
// );

// export const addComment = createAsyncThunk(
//   "comment",
//   async (_, { dispatch }) => {
//     return fetch("http://localhost:3001/postcomments")
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(actions.addComment(json));
//       });
//   }
// );

// export const addLike = createAsyncThunk(
//   "articles/like",
//   async (_, { dispatch }) => {
//     return fetch("http://localhost:3001/getlikes")
//       .then((res) => res.json())
//       .then((json) => {
//         dispatch(actions.addLike(json));
//       });
//   }
// );
