import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Category from "./components/category/category";
import Sports from "./components/sports";
import Navbar from "./components/navbar";
import HanselsHome from "./components/hansels-home/hansels-home";
import Beauty from "./components/beauty/beauty";
import Grocery from "./components/grocery/grocery";
import Electronics from "./components/electronics/electronics";
import Fashion from "./components/fashion/fashion";
import Login from "./components/login";
import Registration from "./components/registration";
import NewArrivals from "./components/new-arrivals/new-arrivals";
import Product from "./components/product/product";
import Brand from "./components/brands";
import Wishlist from "./components/wishlist";
import HandPicked from "./components/handpicked/handpicked-list";
import Appbar from "./components/appbar";
// import SideNav from "./components/sidenav";
// import { Posts } from "./hooks/local-storage";
function App() {
  return (
    <>
      <Appbar />
      <Navbar />
      {/* <SideNav /> */}

      <Routes>
        <Route path="/" element={<HanselsHome />}></Route>
        <Route path="/newarrivals" element={<NewArrivals />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/beauty" element={<Beauty />}></Route>
        <Route path="/grocery" element={<Grocery />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/fashion" element={<Fashion />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
        <Route path="/brand" element={<Brand />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/handpicked" element={<HandPicked />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
      </Routes>
    </>
  );
}

export default App;
