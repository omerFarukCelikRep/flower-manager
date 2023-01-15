import React from "react";
import { Route, Routes } from "react-router-dom";
import FlowerList from "../../components/app/flowers/list/FlowerList";
import FlowerDetails from "../../components/app/flowers/details/FlowerDetails";
import FlowerCreate from "../../components/app/flowers/create/FlowerCreate";
import RequireAuth from "../../components/routers/RequireAuth";
import MyFlower from "../myFlower/MyFlower";
import { useAuthContext } from "../../context/AuthProvider";
import "../flowers/flowers.scss";

const Flowers = () => {
  const { auth } = useAuthContext();
  return (
    
    <>
      <Routes>
      <Route 
          path="/" 
          element={
            auth ? <MyFlower /> : <FlowerList />
          }
        />
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
