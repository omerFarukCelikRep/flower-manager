import React, { useEffect, useState } from "react";
import ProductService from "../../../../services/ProductService";
import FlowerCard from "../card/FlowerCard";

const FlowerList = () => {
  const [flowers, setFlowers] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    const getAllFlowers = async () => {
      const result = await ProductService.getAllAsync();
      !result.isSuccess && setError(result.message);
      setFlowers(result.data);
    };

    getAllFlowers();
  }, [flowers]);
  return (
    <>
      {error && <p>{error}</p>}
      {flowers.map((flower) => (
        <FlowerCard flower={flower} />
      ))}
    </>
  );
};

export default FlowerList;
