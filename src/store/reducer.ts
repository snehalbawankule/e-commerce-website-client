import { createSlice, current } from "@reduxjs/toolkit";
import { defaultState, defaultProduct } from "./types";
//import axios from "axios";

const initialState: defaultState = {
  product: [defaultProduct],
};
const { actions, reducer } = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProducts(state, action) {
      state.product = action.payload;
    },

    // addLatestArticle(state, action) {
    //   state.product = action.payload;
    // },

    //   addNewArticle(state, action) {
    //     const lastId = state.article.slice(-1)[0].id;
    //     const number = lastId + 1;
    //     let payload = { ...action.payload };
    //     payload.id = number;
    //     console.log(payload);
    //     state.article.push(payload);
    //     axios.post("http://localhost:3001/post-article", {
    //       title: action.payload.title,
    //       description: action.payload.description,
    //       content: action.payload.content,
    //       url: action.payload.url,
    //     });
    //   },

    //   addLike(state, action) {
    //     const { id } = action.payload;

    //     const existingPost = state.article.find((item: any) => item.id === id);
    //     if (existingPost) {
    //       if (existingPost.likes) {
    //         existingPost.likes.push(action.payload);
    //         axios.post("http://localhost:3001/postlikes", {
    //           id: id,
    //           userEmail: action.payload.userEmail,
    //         });
    //       }
    //     }
    //   },

    //   unLike(state, action) {
    //     const { id } = action.payload;

    //     var existingPost = current(
    //       state.article.find((item: any) => item.id === id)
    //     );
    //     if (!existingPost) {
    //       return state;
    //     }
    //     if (existingPost) {
    //       if (existingPost.likes) {
    //         const likes = existingPost.likes;
    //         const filteredArray = likes.filter(
    //           (obj: any) => obj.userEmail !== action.payload.userEmail
    //         );
    //         console.log("Before", existingPost.likes);
    //         const existingPost1 = Object.assign({}, existingPost, {
    //           likes: filteredArray,
    //         });
    //         console.log("After", existingPost1);
    //         existingPost = existingPost1;
    //         console.log(existingPost);
    //         axios.post("http://localhost:3001/unlike", {
    //           id: id,
    //           userEmail: action.payload.userEmail,
    //         });
    //       }
    //     }
    //   },

    //   postUpdate(state, action) {
    //     const { id, title, description, content } = action.payload;
    //     const existingPost = state.article.find((item: any) => item.id === id);
    //     if (existingPost) {
    //       existingPost.title = title;
    //       existingPost.description = description;
    //       //existingPost.content = content;
    //       axios.post("http://localhost:3001/update-article", {
    //         id: id,
    //         title: action.payload.title,
    //         description: action.payload.description,
    //         content: action.payload.content,
    //         url: action.payload.url,
    //       });
    //     }
    //   },

    //   addComment(state, action) {
    //     const { id } = action.payload;
    //     const existingPost = state.article.find((item: any) => item.id === id);
    //     if (existingPost) {
    //       if (existingPost.comments) {
    //         existingPost.comments.push(action.payload);
    //         axios.post("http://localhost:3001/postcomments", {
    //           id: id,
    //           commentId: action.payload.commentId,
    //           userName: action.payload.userName,
    //           userProfile: action.payload.userProfile,
    //           rating: action.payload.rating,
    //           comment: action.payload.comment,
    //           isReply: action.payload.isReply,
    //           replyTo: action.payload.replyTo,
    //         });
    //       }
    //     }
    //   },
  },
});

export { actions };
export default reducer;
export const selectAllPosts = (state: any) => state.articles.article;
