import React from "react";
import { Route, Routes } from "react-router-dom";
import FlowerList from "../../components/app/flowers/list/FlowerList";
import FlowerDetails from "../../components/app/flowers/details/FlowerDetails";
import FlowerCreate from "../../components/app/flowers/create/FlowerCreate";
import RequireAuth from "../../components/routers/RequireAuth";
import MyFlower from "../myFlower/MyFlower";
import "../flowers/flowers.scss";

const Flowers = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<FlowerList />} />
        <Route path=":id" element={<FlowerDetails />} />
        <Route
          path="create"
          element={
            <RequireAuth>
              <FlowerCreate />
            </RequireAuth>
          }
        />
        <Route
          path="myflowers/*"
          element={
            <RequireAuth>
              <MyFlower />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};
export default Flowers;
