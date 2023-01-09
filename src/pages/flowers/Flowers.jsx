import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "../flowers/flowers.scss";
import FlowerList from "../../components/app/flowers/list/FlowerList";
import FlowerDetails from "../../components/app/flowers/details/FlowerDetails";
import FlowerCreate from "../../components/app/flowers/create/FlowerCreate";

const Flowers = () => {
  return (
    <>
      <p className="create-product">
        <Link to="create">
          <span>Create Product</span>
        </Link>
      </p>
      <Routes>
        <Route index path="/" element={<FlowerList />} />
        <Route path=":id" element={<FlowerDetails />} />
        <Route path="create" element={<FlowerCreate />} />
      </Routes>
    </>
  );
};
export default Flowers;
