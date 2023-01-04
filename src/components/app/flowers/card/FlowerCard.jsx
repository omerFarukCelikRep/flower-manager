import React from "react";
import { Link } from "react-router-dom";

const FlowerCard = ({ flower }) => {
  return (
    <>
      <div class="card">
        <div class="face face1">
          <div class="content">
            <img src={flower.image} alt={flower.name} />
            <h3>Design</h3>
          </div>
        </div>
        <div class="face face2">
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum
              cumque minus iste veritatis provident at.
            </p>
            <Link to={`/flowers/${flower.id}`}>Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowerCard;
