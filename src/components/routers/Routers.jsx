// Routes
import { Route, Routes } from "react-router-dom";
import React from "react";
import NotFound from "../../pages/not-Found/NotFound";
import Register from "../../pages/register/Register";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Products from "../../pages/products/Products";
import Contact from "../../pages/contact/Contact";
import LayOut  from "../../pages/layOut/LayOut";
import Login from "../../pages/login/Login";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
