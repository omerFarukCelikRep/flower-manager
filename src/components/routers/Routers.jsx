// Routes
import { Route, Routes } from "react-router-dom";
import React from "react";
import NotFound from "../../pages/not-Found/NotFound";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Layout from "../../pages/layout/Layout";
import Flowers from "../../pages/flowers/Flowers";
// import MyFlower from "../../pages/myFlowers/MyFlower";
import Auth from "../../pages/auth/Auth";
import Users from "../../pages/users/Users";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="flowers/*" element={<Flowers />} />
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
