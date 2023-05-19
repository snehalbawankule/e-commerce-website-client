import { lazy } from "react";

import { Routes } from "./types";
import ProductList from "../components/products-by-category/product-list";
import Products1 from "../components/products-by-sub-category";
const HanselsHome = lazy(() => import("../components/hansels-home"));
const Home = lazy(() => import("../components/home"));
const Category = lazy(() => import("../components/category"));
const Products = lazy(() => import("../components/products"));
const Wishlist = lazy(() => import("../components/wishlist"));
const Brand = lazy(() => import("../components/brands"));
const Product = lazy(() => import("../components/product"));
const Registration = lazy(() => import("../components/registration"));
const Login = lazy(() => import("../components/login"));
const NewArrivals = lazy(() => import("../components/new-arrivals"));

export const Product123 = ["/women", "/men", "/beauty"];
export const ProductByCategory = [
  "/women/western wear",
  "/women/ethnic wear",
  "/women/footwear",
  "/women/bags wallets & clutches",
  "/men/topwear",
  "/men/bottomwear",
  "/men/footwear",
  "/beauty/makeup",
  "/beauty/skincare",
  "/beauty/haircare",
  "/beauty/tools and accessories",
];

const ProductBySubCategory = [
  "/women/western wear/tops, tshirt & shirts",
  "/women/western wear/dresses & jumpsuits",
  "/women/western wear/jeans & jeggings",
  "/women/ethnic wear/lehenga cholis",
  "/women/ethnic wear/kurtas",
  "/women/ethnic wear/sarees",
  "/women/ethnic wear/kurta suit sets",
  "/women/ethnic wear/dress material",
  "/women/footwear/all",
  "/women/footwear/heels",
  "/women/footwear/sport shoes",
  "/women/footwear/flats",
  "/women/bags wallets & clutches",
  "/men/topwear",
  "/men/bottomwear",
  "/men/footwear",
  "/beauty/makeup/face makeup",
  "/beauty/makeup/lips makeup",
  "/beauty/makeup/eye makeup",
  "/beauty/makeup/makeup tools",
  "/beauty/skincare",
  "/beauty/haircare",
  "/beauty/tools and accessories",
];

const APP_ROUTES: Routes = [
  {
    path: ["/"],
    component: HanselsHome,
  },
  {
    path: ["/home"],
    component: Home,
  },
  {
    path: ["/category"],
    component: Category,
  },
  {
    path: ["/newarrivals"],
    component: NewArrivals,
  },
  {
    path: ["/beauty"],
    component: Products,
  },

  {
    path: ["/wishlist"],
    component: Wishlist,
  },
  {
    path: ["/brand"],
    component: Brand,
  },
  {
    path: ["/products/:id"],
    component: Product,
  },
  {
    path: ["/registration"],
    component: Registration,
  },
  {
    path: ["/login"],
    component: Login,
  },
  {
    path: ["/women"],
    component: Products,
  },
  {
    path: ["/men"],
    component: Products,
  },
  {
    path: ["/kids"],
    component: Products,
  },
  {
    path: ProductByCategory,
    component: ProductList,
  },
  {
    path: ProductBySubCategory,
    component: Products1,
  },
];

export default APP_ROUTES;
