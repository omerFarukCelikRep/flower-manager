import React from "react";
import FlowerList from "../../components/app/flowers/list/FlowerList";
import { Link } from "react-router-dom";
import "../flowers/flowers.scss";

const Flowers = () => {
  return (
    <>
      <p className="create-product">
        <Link to="/AddProduct">
          <span>Create Product</span>
        </Link>
      </p>
      <FlowerList />
    </>
  );
};
export default Flowers;
