import { defaultProduct } from "../product/types";

export type Cartlist = {
  id: string;
  userId: string;
  quantity: number;
  size: string;
  color: string;
  productId: string;
  product: any;
};

export type defaultState = {
  cart: Cartlist[];
};
export const defaultCart: Cartlist = {
  id: "",
  userId: "",
  quantity: 0,
  size: "",
  color: "",
  productId: "",
  product: defaultProduct,
};
