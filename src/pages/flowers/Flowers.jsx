

import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductDetails from "../../components/app/flowers/ProductDetails/ProductDetails";
import FlowerList from "../../components/app/flowers/list/FlowerList";

import "../flowers/flowers.scss";

const Flowers = () => {


  return (
    <>
      <Routes>
        <Route index path="/" element={<FlowerList />} />
        <Route path=":id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};
export default Flowers;
