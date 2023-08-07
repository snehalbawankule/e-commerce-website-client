import { createSelector } from "reselect";

import { RootState } from "./store";
const globalState = (state: RootState) => state;

//Global Selector
const getProducts = createSelector(
  globalState,
  (global) => global.products.product
);
const getPosters = createSelector(
  globalState,
  (global) => global.posters.poster
);
const getBrands = createSelector(globalState, (global) => global.brands.brand);
const getCarts = createSelector(globalState, (global) => global.carts.cart);
const getCategories = createSelector(
  globalState,
  (global) => global.categories.category
);
const getHandPickeds = createSelector(
  globalState,
  (global) => global.handPickeds.handPicked
);
const getOrders = createSelector(globalState, (global) => global.order.order);
const getUser = createSelector(globalState, (global) => global.user.user);
const getWishlist = createSelector(
  globalState,
  (global) => global.wishlists.wishlist
);
const getHelpCenter = createSelector(
  globalState,
  (global) => global.helpCenter.helpCenter
);

export {
  getProducts,
  getBrands,
  getCarts,
  getCategories,
  getWishlist,
  getHandPickeds,
  getOrders,
  getPosters,
  getUser,
  getHelpCenter,
};
