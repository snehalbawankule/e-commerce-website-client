import { defaultProduct } from "../product/types";

export type Cartlist = {
  id: string;
  userEmail: string;
  quantity: number;
  size: string;
  color: string;
  defaultProduct: any;
};

export type defaultState = {
  wishlist: Cartlist[];
};
export const defaultWishlist: Cartlist = {
  id: "",
  userEmail: "",
  quantity: 0,
  size: "",
  color: "",
  defaultProduct,
};
