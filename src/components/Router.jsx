import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Account from "../pages/Account";
import ShoppingCart from "../pages/ShoppingCart";
import SignUp from "../pages/SignUp";
import ProductDetails from "../pages/ProductDetails";
import NewProduct from "../pages/NewProduct";
import Checkout from "../pages/Checkout";
import Categories from "../pages/Categories";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/categories/:sellerID" element={<Categories />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/newproduct" element={<NewProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
