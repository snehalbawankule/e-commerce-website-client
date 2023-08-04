import { defaultProduct } from "../product/initial-state";
import { Wishlist } from "./types";

const defaultWishlist: Wishlist = {
  id: "",
  userEmail: "",
  quantity: 0,
  size: "",
  color: "",
  product: defaultProduct,
};
export { defaultWishlist };
