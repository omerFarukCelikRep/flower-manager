// Routes
import { Route, Routes } from "react-router-dom";
import React from "react";
import NotFound from "../../pages/not-Found/NotFound";
import Register from "../../pages/register/Register";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Products from "../../pages/products/Products";
import Contact from "../../pages/contact/Contact";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Products" element={<Products />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
