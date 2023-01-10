import React from "react";
import { Route, Routes } from "react-router-dom";
import "../flowers/flowers.scss";
import FlowerList from "../../components/app/flowers/list/FlowerList";
import FlowerDetails from "../../components/app/flowers/details/FlowerDetails";
import FlowerCreate from "../../components/app/flowers/create/FlowerCreate";

const Flowers = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<FlowerList />} />
        <Route path=":id" element={<FlowerDetails />} />
        <Route path="create" element={<FlowerCreate />} />
      </Routes>
    </>
  );
};
export default Flowers;
