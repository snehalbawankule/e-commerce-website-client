import { lazy } from "react";

import { Routes } from "./types";
import ProductList from "../components/products-by-category/product-list";

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

const APP_ROUTES: Routes = [
  {
    path: "/",
    component: HanselsHome,
  },
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/newarrivals",
    component: NewArrivals,
  },
  {
    path: "/beauty",
    component: Products,
  },

  {
    path: "/wishlist",
    component: Wishlist,
  },
  {
    path: "/brand",
    component: Brand,
  },
  {
    path: "/products/:id",
    component: Product,
  },
  {
    path: "/registration",
    component: Registration,
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/women",
    component: Products,
  },
  {
    path: "/men",
    component: Products,
  },
  {
    path: "/kids",
    component: Products,
  },
  {
    path: "/women/western-wear",
    component: ProductList,
  },
];

export default APP_ROUTES;
