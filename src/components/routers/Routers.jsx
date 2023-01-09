// Routes
import { Route, Routes } from "react-router-dom";
import React from "react";
import NotFound from "../../pages/not-Found/NotFound";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Layout from "../../pages/layOut/LayOut";
import Flowers from "../../pages/flowers/Flowers";
import Auth from "../../pages/auth/Auth";
import { AddProduct } from "../../pages/AddProduct/AddProduct";
// import ProductDetails from '../../list/ProductDetails/ProductDetails';
// import ProductDetails from "../../flowers/ProductDetails/ProductDetails";
import ProductDetails from "../app/flowers/ProductDetails/ProductDetails";
import Users from "../../pages/users/Users";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/flowers/*" element={<Flowers />} />
          {/* <Route path="/flowers/:id" component={<ProductDetails />} /> */}
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AddProduct" element={<AddProduct />} />
          <Route path="users/*" element={<Users />} />
          <Route path="/" element={<Auth />}>
            <Route path="/register" element={<Auth />} />
            <Route path="/login" element={<Auth />} />
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
