import { defaultProduct } from "../product/initial-state";
import { OrderList } from "./types";

const defaultOrder: OrderList = {
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
export { defaultOrder };
