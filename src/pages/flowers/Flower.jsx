import React, { useState} from "react";
import FlowerList from "../../components/app/flowers/list/FlowerList";
import { Link } from "react-router-dom";
import "../flowers/flowers.scss";

const Flower = () => {
  const [searching, setSearching] = useState("");
  const [isFlowerLoading, setIsFlowerLoading] = useState(false);

  return (
    <>
      <p className="create-product">
        <Link to="/AddProduct">
          <span>Create Product</span>
        </Link>
      </p>
      <input
        className="search-bar"
        type="search"
        placeholder="Flower Name..."
        onChange={(event) => setSearching(event.target.value)}
        value={searching}
      />
      {isFlowerLoading ? (
        <p>Loading...</p>
      ) : (
      <FlowerList  searching={searching}/>
      )}
    </>
  );
};
export default Flower;
