import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Account from "../pages/Account";
import ShoppingCart from "../pages/ShoppingCart";
import SignUp from "../pages/SignUp";
import ProductDetails from "../pages/ProductDetails";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/account" element={<Account />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
