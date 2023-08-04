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
