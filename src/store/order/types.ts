import { defaultProduct } from "../product/types";

export type OrderList = {
  id: string;
  userId: string;
  shippingAddress: string;
  totalCost: number;
  item: [
    {
      productId: string;
      quantity: number;
      product: any;
    }
  ];
};

export type defaultState = {
  order: OrderList[];
};
export const defaultOrder: OrderList = {
  id: "",
  userId: "",

  shippingAddress: "",
  totalCost: 0,
  item: [
    {
      productId: "",
      quantity: 0,
      product: defaultProduct,
    },
  ],
};
