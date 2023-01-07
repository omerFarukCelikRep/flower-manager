import React, { useEffect, useState } from "react";

const ProductDetails = ({ match }) => {
  const [flower, setFlower] = useState(null);

  useEffect(() => {
    // Ürün ID'sini al
    const id = match.params.id;

    // API isteğini oluştur ve ürün detaylarını al
    fetch(`/flowers/${id}`)
      .then((response) => response.json())
      .then((flower) => setFlower(flower));
  }, [match.params.id]);

  if (!flower) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="content">
        <img src={flower.image} alt="" />
        <p>{flower.description}</p>
        <p>
          {flower.price} <span>TL</span>
        </p>
        <p>
          {flower.stockCount} <span>Adet</span>
        </p>
      </div>
    );
  }
};

export default ProductDetails;
