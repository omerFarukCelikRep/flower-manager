import React from "react";
import { Link } from "react-router-dom";

const FlowerCard = ({ flower }) => {
  return (
    <>
      <div class="flower-card">
        <div class="face face1">
          <div class="content">
            <img src={flower.image} alt={flower.name} />
            <h3>{flower.name}</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>{flower.description}</p>
            <p>{flower.price} <span>TL</span></p>
            <p>{flower.stockCount} <span>Adet</span></p>
            <Link to={`/flowers/${flower.id}`}>Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowerCard;
