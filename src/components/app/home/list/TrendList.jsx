import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrayHelper from "../../../../helpers/ArrayHelper";
import FlowerService from "../../../../services/FlowerService";

const TrendList = () => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    const getAllFlowers = async () => {
      const result = await FlowerService.getAllAsync();
      if (!result.isSuccess) {
        return;
      }

      ArrayHelper.shuffleArray(result.data);

      setFlowers(result.data.slice(0, 10));
    };

    getAllFlowers();
  }, []);

  return (
    <>
      <div className="top-sales box">
        <div className="title">Trend Products</div>
        <ul className="top-sales-details">
          {flowers.map((flower) => (
            <li key={flower.id}>
              <Link to={`/flowers/${flower.id}`}>
                <img src={flower.image} alt={flower.name} />
                <span className="product">{flower.name}</span>
              </Link>
              <span className="price">{`${flower.price} TL`}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TrendList;
