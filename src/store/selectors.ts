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
// const getSession = createSelector(globalState, (global) => global.helpCenter);
// const getExpiry = createSelector(getSession, (session) => session);
// const getQRCodeUrl = createSelector(getSession, (session) => session.qrCode.url);
// const getCurrentUser = createSelector(getSession, (session) => session.currentUser);
// const isScopelyIdLoginSuccess = createSelector(getSession, (session) => session.isScopelyIDLogin);
// const getGoToPath = createSelector(globalState, (global) => global?.path?.from || '/');
// const getPlayerInfo = createSelector(getScopelyUser, (user) => user.playerInfo);
// const isUserHasScopelyId = createSelector(getPlayerInfo, (playerInfo) => playerInfo?.hasScopelyId);
// const isPlayerInfoEmpty = createSelector(getPlayerInfo, (playerInfo) => playerInfo === null);
// const getLanguages = createSelector(globalState, (global) => global.languages);
// const getLocalizedContents = createSelector(
//   [globalState, getSelectedLocale],
//   (global, locale) => global.contents[locale] || {},
// );
// const getOwlieMessages = createSelector(
//   [getInfoPopup, getSelectedLocale],
//   (infoPopup, locale) => infoPopup.messages[locale] || {},
// );
// const getNavItems = createSelector(
//   [globalState, getSelectedLocale],
//   (global, locale) => global.navigation[locale] || [],
// );
// const isNavItemsEmpty = createSelector(getNavItems, (navItems) => navItems.length === 0);

// //Home Page Selector
// const getFeaturedBlog = createSelector(globalState, (global) =>
//   global.blogs.find((o) => o.featured),
// );
// const getNotFeaturedBlogs = createSelector(globalState, (global) =>
//   global.blogs.filter((o) => !o.featured),
// );

// const getSortedBlogs = createSelector([getFeaturedBlog, getNotFeaturedBlogs], (b, b1) => {
//   return b ? [b, ...b1] : b1 || [];
// });

// const getBlogs = createSelector(globalState, (global) => {
//   return (
//     global.blogs.filter((o) => o.articleType !== 'events' && o.articleType !== 'game Guides') || []
//   );
// });

// const getEvents = createSelector(globalState, (global) => {
//   return global.blogs.filter((o) => o.articleType === 'events') || [];
// });

// const getGameGuides = createSelector(globalState, (global) => {
//   return global.blogs.filter((o) => o.articleType === 'game Guides') || [];
// });

// const getBlogSlug = createSelector(globalState, (global) => global.selectedBlog);
// const getBlogDetails = createSelector([getBlogs, getBlogSlug], (blogs, slug) =>
//   blogs.find((o) => o.slug === slug),
// );
// const getSelectedBlogIndex = createSelector([getBlogs, getBlogSlug], (blogs, slug) =>
//   blogs.findIndex((o) => o.slug === slug),
// );

// const getEventDetails = createSelector([getEvents, getBlogSlug], (events, slug) =>
//   events.find((o) => o.slug === slug),
// );
// const getSelectedEventIndex = createSelector([getEvents, getBlogSlug], (events, slug) =>
//   events.findIndex((o) => o.slug === slug),
// );

// const getGameGuideDetails = createSelector([getGameGuides, getBlogSlug], (gameGuides, slug) =>
//   gameGuides.find((o) => o.slug === slug),
// );
// const getSelectedGameGuideIndex = createSelector([getGameGuides, getBlogSlug], (gameGuides, slug) =>
//   gameGuides.findIndex((o) => o.slug === slug),
// );

// const getCMSLanguages = createSelector(globalState, (global) => global.cmsLanguages);
// const getCMSSiteID = createSelector([getCMSLanguages, getSelectedLocale], (cmsLanguages, locale) =>
//   cmsLanguages.find((o) => o.langCode === locale),
// );

// //Layout Selector
// const getLayout = createSelector(globalState, (state) => state.layout);

// const getHeaderImage = createSelector(getLayout, (layout: any) => {
//   return layout.find((o: any) => o.headerImage)?.headerImage[0].url || '';
// });

// const getSocialLinks = createSelector(getLayout, (layout: any) => {
//   const socialLinks = layout.find((o: any) => o.socialLinks).socialLinks || [];
//   return socialLinks?.map((o: any) => {
//     return {
//       icon: o.linkImage[0].url || '',
//       link: o.linkUrl || '',
//       title: o.linkImage[0].title || '',
//       target: '_blank',
//       height: '30px',
//       width: '30px',
//     };
//   });
// });

// const getFooterLinksTop = createSelector(
//   getLayout,
//   (layout: any) => layout.find((o: any) => o.footerLinksTop)?.footerLinksTop || [],
// );

// const getFooterLinksBottom = createSelector(
//   getLayout,
//   (layout: any) => layout.find((o: any) => o.footerLinksBottom)?.footerLinksBottom || [],
// );

// const getCopyrights = createSelector(
//   getLayout,
//   (layout: any) => layout.find((o: any) => o.copyright)?.copyright,
// );

// const getAlertMessage = createSelector(globalState, (global) => global.alertMessage);

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
