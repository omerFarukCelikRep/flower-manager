import React from "react";
import { Route, Routes } from "react-router-dom";
import MyFlowerList from "../../components/app/flowers/list/MyFlowerList";
import FlowerDetails from "../../components/app/flowers/details/FlowerDetails";
import FlowerCreate from "../../components/app/flowers/create/FlowerCreate";
import RequireAuth from "../../components/routers/RequireAuth";
import "../flowers/flowers.scss";

const Flowers = () => {
  return (
    <>
      <Routes>
        <Route index path="/" element={<MyFlowerList />} />
        <Route path=":id" element={<FlowerDetails />} />
        <Route
          path="create"
          element={
            <RequireAuth>
              <FlowerCreate />
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};
export default Flowers;
