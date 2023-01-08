import React from "react";
import { Link } from "react-router-dom";

const FlowerCard = ({ flower }) => {
  return (
    <>
      <div className="flower-card">
        <div className="face face1">
          <div className="content">
            <img src={flower.image} alt={flower.name} />
            <h3>{flower.name}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{flower.description}</p>
            <p>{flower.price} <span>TL</span></p>
            <p>{flower.stockCount} <span>Adet</span></p>
            <Link to={`/flowers/${flower.id}`} className="route-link">Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowerCard;
