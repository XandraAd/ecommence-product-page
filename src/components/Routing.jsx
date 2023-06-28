/* eslint-disable no-unused-vars */
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Collections from "../pages/Collections";
import Men from "../pages/Men";
import Women from "../pages/Women";
import About from "../pages/About";
import Contacts from "../pages/Contacts";
import Checkout from "../pages/Checkout";
//import iconCart from "../images/icon-cart.svg";
//import Cart from '../pages/Cart'

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<Contacts />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
};

export default Routing;
