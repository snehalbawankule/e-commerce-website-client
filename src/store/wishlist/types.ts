import { defaultProduct } from "../product/types";

export type Wishlist = {
  id: string;
  userEmail: string;
  quantity: number;
  size: string;
  color: string;
  defaultProduct: any;
  // products: [
  //   {
  //     id: string;
  //     name: string;
  //     title: string;
  //     image: string;
  //     updatedAt: Date;
  //   }
  // ];
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
  // products: [
  //   {
  //     id: "",
  //     name: "",
  //     title: "",
  //     image: "",
  //     updatedAt: new Date("2023-10-02"),
  //   },
  // ],
};
