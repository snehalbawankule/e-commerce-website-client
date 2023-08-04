import { defaultProduct } from "../product/types";

export type Wishlist = {
  id: string;
  userEmail: string;
  quantity: number;
  size: string;
  color: string;
  defaultProduct: any;
};

export type defaultState = {
  wishlist: Wishlist[];
};
export const defaultWishlist: Wishlist = {
  id: "",
  userEmail: "",
  quantity: 0,
  size: "",
  color: "",
  defaultProduct,
};
