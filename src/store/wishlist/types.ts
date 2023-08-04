export type Wishlist = {
  id: string;
  userEmail: string;
  quantity: number;
  size: string;
  color: string;
  product: any;
};

export type defaultState = {
  wishlist: Wishlist[];
};
