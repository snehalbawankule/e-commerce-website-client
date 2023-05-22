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
  cart: Cartlist[];
};
export const defaultCart: Cartlist = {
  id: "",
  userEmail: "",
  quantity: 0,
  size: "",
  color: "",
  defaultProduct,
};
