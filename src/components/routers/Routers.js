import React from "react";
import { HomePage } from "../../pages/home-page/HomePage";
import { AboutPage } from "../../pages/about-page/AboutPage";
import { ProductsPage } from "../../pages/products-page/ProductsPage";
import { ContactPage } from "../../pages/contact-page/ContactPage";
import  NotFound  from "../../pages/not-Found/NotFound";

// Routes

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export const Routers = () => {
  return (
    <>
      {/* <Router> */}
        {/* <Switch> */}
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/About" element={<AboutPage />}></Route>
          <Route path="/Products" element={<ProductsPage />}></Route>
          <Route path="/Contact" element={<ContactPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>

    </>
  );
};
export default Routers;