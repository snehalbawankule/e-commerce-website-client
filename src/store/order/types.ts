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
