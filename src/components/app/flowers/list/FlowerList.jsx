import React, { useEffect, useState } from "react";
import ProductService from "../../../../services/ProductService";
import FlowerCard from "../card/FlowerCard";

const FlowerList = ({ searching }) => {
  const [flowers, setFlowers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getAllFlowers = async () => {
      const result = await ProductService.getAllAsync();
      !result.isSuccess && setError(result.message);
      setFlowers(result.data);
    };

    getAllFlowers();
  }, []);

  if (searching) {
    return (
      <div className="flower-list-container">
        {flowers.map((flower) =>
          flower.name
            .toLowerCase()
            .trim()
            .startsWith(searching.toLowerCase().trim()) ? (
            <FlowerCard flower={flower} key={flower.id} />
          ) : null
        )}
      </div>
    );
  } else {
  return (
    <>
      <div className="flower-list-container">
        {error && <p>{error}</p>}
        {flowers.map((flower) => (
          <FlowerCard flower={flower} key={flower.id} />
        ))}
      </div>
    </>
  );
        }
};

export default FlowerList;
