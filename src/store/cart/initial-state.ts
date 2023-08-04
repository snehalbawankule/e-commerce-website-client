import { defaultProduct } from "../product/initial-state";
import { Cartlist } from "./types";

const defaultCart: Cartlist = {
  id: "",
  userId: "",
  quantity: 0,
  size: "",
  color: "",
  productId: "",
  product: defaultProduct,
};

export { defaultCart };
