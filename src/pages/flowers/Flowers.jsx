

import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../../components/app/flowers/ProductDetails/ProductDetails";
import Flower from "./Flower";
import "../flowers/flowers.scss";

const Flowers = () => {



  return (
    <>
   
      <Routes>
        <Route index path="/" element={<Flower />} />
        <Route path=":id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};
export default Flowers;
