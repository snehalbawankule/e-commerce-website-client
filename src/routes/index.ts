import { lazy } from "react";
import { Routes } from "./types";
import ProductList from "../components/products-by-sub-category/product-by-sub-category";
import Products1 from "../components/product-by-sub-sub-category";
const HanselsHome = lazy(() => import("../components/hansels-home"));
const Cart = lazy(() => import("../components/cart"));
const OrderPlaced = lazy(() => import("../components/checkout/order-placed"));
const Category = lazy(() => import("../components/category"));
const Products = lazy(() => import("../components/product-by-category"));
const Wishlist = lazy(() => import("../components/wishlist"));
const Brand = lazy(() => import("../components/brands"));
const Product = lazy(() => import("../components/product"));
const Orders = lazy(() => import("../components/orders"));
const Account = lazy(() => import("../components/account"));
const Registration = lazy(() => import("../components/registration"));
const Login = lazy(() => import("../components/login"));
const NewArrivals = lazy(() => import("../components/new-arrivals"));
const ContactUs = lazy(() => import("../components/contact-us"));
const Checkout = lazy(() => import("../components/checkout"));
const Faqs = lazy(() => import("../components/helpcenter"));
const FaqsCard = lazy(() => import("../components/faqs-card"));
const ProfileInfo = lazy(() => import("../components/profile/profile-info"));
const ManageAddress = lazy(() => import("../components/user-address"));
export const Product123 = ["/women", "/men", "/kids", "/beauty", "/home"];
export const ProductByCategory = [
  "/women/western wear",
  "/women/ethnic wear",
  "/women/footwear",
  "/women/bags wallets & clutches",
  "/men/topwear",
  "/men/bottomwear",
  "/men/footwear",
  "men/ethnic wear",
  "men/accessories",
  "/beauty/makeup",
  "/beauty/skincare",
  "/beauty/haircare",
  "/beauty/tools and accessories",
  "/home/home decor",
  "/home/home storage",
  "/kids/kids clothing",
  "/kids/accessories",
  "/kids/baby products",
  "/kids/kids shoes",
  "/kids/toys & games",
];
export const HelpCenter = [
  "/faqs/order",
  "/faqs/login & account",
  "/faqs/payment",
  "/faqs/cancellation & returns",
  "/faqs/shipping",
  "/faqs/privacy & security",
];

const ProductBySubCategory = [
  "/women/western wear/tops, tshirt & shirts",
  "/women/western wear/dresses & jumpsuits",
  "/women/western wear/jeans and jeggings",
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
  "/men/topwear/t-shirts",
  "/men/topwear/shirts",
  "/men/topwear/sweater",
  "/men/topwear/jacket",
  "/men/topwear/sweatshirts",
  "/men/topwear/coats & blazers",
  "/men/bottomwear/track pants",
  "/men/bottomwear/shorts & 3/4ths",
  "/men/bottomwear/trousers & pants",
  "/men/bottomwear/jeans & joggers",
  "/men/footwear",
  "/beauty/makeup/face makeup",
  "/beauty/makeup/lips makeup",
  "/beauty/makeup/eye makeup",
  "/beauty/makeup/makeup tools",
  "/beauty/skincare/sunscreen",
  "/beauty/skincare/cleansers",
  "/beauty/skincare/moisturizers",
  "/beauty/skincare/masks",
  "/beauty/skincare/serums",
  "/beauty/haircare/shampoos",
  "/beauty/haircare/conditioners",
  "/beauty/haircare/hair tools",
  "/beauty/haircare/hair treatment",
  "/beauty/haircare/styling products",
  "/kids/kids clothing/girls clothing",
  "/kids/kids clothing/boys clothing",
  "/kids/accessories/books",
];

const APP_ROUTES: Routes = [
  {
    path: ["/"],
    component: HanselsHome,
  },
  {
    path: ["/account"],
    component: Account,
  },
  {
    path: ["/orders"],
    component: Orders,
  },
  {
    path: ["/contact-us"],
    component: ContactUs,
  },
  {
    path: ["/order placed"],
    component: OrderPlaced,
  },
  {
    path: ["/Faqs"],
    component: Faqs,
  },
  {
    path: HelpCenter,
    component: FaqsCard,
  },
  {
    path: ["/cart"],
    component: Cart,
  },
  {
    path: ["/profile"],
    component: ProfileInfo,
  },
  {
    path: ["checkout"],
    component: Checkout,
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
    path: Product123,
    component: Products,
  },

  {
    path: ["/profile/profile information"],
    component: ProfileInfo,
  },
  {
    path: ["/profile/manage address"],
    component: ManageAddress,
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
