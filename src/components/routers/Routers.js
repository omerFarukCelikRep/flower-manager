import React from "react";
import { HomePage } from "../../pages/home-page/HomePage";
import { AboutPage } from "../../pages/about-page/AboutPage";
import { ProductsPage } from "../../pages/products-page/ProductsPage";
import { ContactPage } from "../../pages/contact-page/ContactPage";
import NotFound from "../../pages/not-Found/NotFound";
import Register from "../../pages/register/Register";

// Routes
import { Route, Routes } from "react-router-dom";

const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index path="/" element={<HomePage />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
          <Route path="/Products" element={<ProductsPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default Routers;
