import { lazy } from "react";

import { Routes } from "./types";

const HanselsHome = lazy(() => import("../components/hansels-home"));
const Home = lazy(() => import("../components/home"));
const Category = lazy(() => import("../components/category"));
const Beauty = lazy(() => import("../components/beauty"));
const Electronics = lazy(() => import("../components/electronics"));
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
    component: Beauty,
  },
  {
    path: "/electronics",
    component: Electronics,
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
];

export default APP_ROUTES;
