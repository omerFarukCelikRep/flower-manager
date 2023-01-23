import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../context/AuthProvider";
import { history } from "../../../../helpers/HistoryHelper";
import FlowerService from "../../../../services/FlowerService";

const FlowerCreate = () => {
  const { auth } = useAuthContext();

  const [flower, setFlower] = useState({
    name: "",
    description: "",
    price: "",
    stockCount: "",
    image: "",
  });

  const [isValid, setIsValid] = useState({
    name: true,
    description: true,
    price: true,
    stockCount: true,
    image: true,
  });

  const [error, setError] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      setFlower((prevProduct) => ({
        ...prevProduct,
        image: base64,
      }));
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsValid({ ...flower });
    if (!Object.values(flower).every((val) => val)) {
      return;
    }

    flower.userId = auth.id;
    const result = await FlowerService.addAsync(flower);
    if (!result.isSuccess) {
      setError(result.message);
      return;
    }

    setFlower({
      name: "",
      description: "",
      price: "",
      stockCount: "",
      image: "",
    });

    history.navigate("/flowers");
  };

  return (
    <>
      <section className="flower-create-container">
        <h2 className="form-title">Create</h2>
        {!error && <p>{error}</p>}
        <form id="product-form" className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="flowerName">Flower Name</label>
            <input
              type="text"
              id="flowerName"
              className="input"
              value={flower.name}
              onChange={(event) =>
                setFlower((prevProduct) => ({
                  ...prevProduct,
                  name: event.target.value.trim(),
                }))
              }
            />
            {!isValid.name && (
              <span className="validation">Flower Name is not valid</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              className="input"
              value={flower.description}
              onChange={(event) =>
                setFlower((prevProduct) => ({
                  ...prevProduct,
                  description: event.target.value.trim(),
                }))
              }
            />
            {!isValid.description && (
              <span className="validation">Description is not valid</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              className="input"
              value={flower.price}
              onChange={(event) =>
                setFlower((prevProduct) => ({
                  ...prevProduct,
                  price: event.target.value.trim(),
                }))
              }
            />
            {!isValid.price && (
              <span className="validation">Price is not valid</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="description">StockCount</label>
            <input
              type="number"
              id="description"
              className="input"
              value={flower.stockCount}
              onChange={(event) =>
                setFlower((prevProduct) => ({
                  ...prevProduct,
                  stockCount: event.target.value.trim(),
                }))
              }
            />
            {!isValid.stockCount && (
              <span className="validation">StockCount is not valid</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>

            <input
              type="file"
              id="image"
              className="input"
              onChange={handleFileChange}
            />
            {!isValid.image && (
              <span className="validation">Image is not valid</span>
            )}
          </div>
          <div className="form-group" id="submit">
            <Link to=".." relative="path" className="link">
              Cancel
            </Link>
            <button type="submit" className="link">
              Create
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default FlowerCreate;
