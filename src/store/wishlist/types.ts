export type Wishlist = {
  id: string;
  userName: string;
  quantity: number;
  size: string;
  color: string;
};

export type defaultState = {
  wishlist: Wishlist[];
};
export const defaultWishlist: Wishlist = {
  id: "",
  userName: "",
  quantity: 0,
  size: "",
  color: "",
};
