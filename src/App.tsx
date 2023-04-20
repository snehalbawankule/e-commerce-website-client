import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Category from "./components/category";
import Sports from "./components/sports";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchbar";
import HanselsHome from "./components/hansels-home/hansels-home";
import Beauty from "./components/beauty/beauty";
import Grocery from "./components/grocery/grocery";
import Electronics from "./components/electronics/electronics";
import Fashion from "./components/fashion/fashion";
function App() {
  return (
    <>
      <SearchBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HanselsHome />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/beauty" element={<Beauty />}></Route>
        <Route path="/grocery" element={<Grocery />}></Route>
        <Route path="/electronics" element={<Electronics />}></Route>
        <Route path="/fashion" element={<Fashion />}></Route>
        <Route path="/category" element={<Category />}></Route>
        <Route path="/sports" element={<Sports />}></Route>
      </Routes>
    </>
  );
}

export default App;
