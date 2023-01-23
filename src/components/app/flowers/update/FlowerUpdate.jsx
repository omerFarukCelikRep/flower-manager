import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { history } from "../../../../helpers/HistoryHelper";
import FlowerService from "../../../../services/FlowerService";
import Loading from "../../../shared/loading/Loading";

const FlowerUpdate = () => {
  const { id } = useParams();

  const [flower, setFlower] = useState({
    name: "",
    description: "",
    price: 0,
    stockCount: 0,
    image: "",
  });
  const [isValid, setIsValid] = useState({
    name: true,
    description: true,
    price: true,
    stockCount: true,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFlower = async (id) => {
      setLoading(true);
      const result = await FlowerService.getByIdAsync(id);
      if (!result.isSuccess) {
        history.navigate("/flowers/" + id);
      }
      setFlower(result.data);
      setLoading(false);
    };

    getFlower(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsValid({ ...flower });
    if (!Object.values(flower).every((val) => val)) {
      return;
    }

    const result = await FlowerService.updateAsync(flower);
    if (!result.isSuccess) {
      setError(result.message);
      return;
    }

    setFlower({
      name: "",
      description: "",
      price: 0,
      stockCount: 0,
      image: "",
    });

    history.navigate("/flowers/" + flower.id);
  };

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

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flower-update-container">
          <h2 className="form-title">Update</h2>
          {!error && <p>{error}</p>}
          <form id="update-form" className="form" onSubmit={handleSubmit}>
            {flower.image ? (
              <div className="thumbnail">
                <img src={flower.image} alt={flower.name} />
              </div>
            ) : (
              ""
            )}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                className="input"
                value={flower.name}
                onChange={(event) =>
                  setFlower((prevFlower) => ({
                    ...prevFlower,
                    name: event.target.value.trim(),
                  }))
                }
              />
              {!isValid.name && (
                <span className="validation">Name is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="description">Last Name:</label>
              <input
                type="text"
                id="description"
                className="input"
                value={flower.description}
                onChange={(event) =>
                  setFlower((prevFlower) => ({
                    ...prevFlower,
                    description: event.target.value.trim(),
                  }))
                }
              />
              {!isValid.description && (
                <span className="validation">Description is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                type="number"
                id="price"
                className="input"
                value={flower.price}
                onChange={(event) =>
                  setFlower((prevFlower) => ({
                    ...prevFlower,
                    price: event.target.value,
                  }))
                }
              />
              {!isValid.price && (
                <span className="validation">Price is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="stockCount">Stock Count:</label>
              <input
                type="number"
                id="stockCount"
                className="input"
                value={flower.stockCount}
                onChange={(event) =>
                  setFlower((prevFlower) => ({
                    ...prevFlower,
                    stockCount: event.target.value,
                  }))
                }
              />
              {!isValid.stockCount && (
                <span className="validation">Stock Count is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="image">Image:</label>
              <input
                type="file"
                id="image"
                className="input"
                onChange={handleFileChange}
              />
            </div>
            <div className="form-group" id="submit">
              <Link to=".." relative="path" className="link">
                Cancel
              </Link>
              <button type="submit" className="link">
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default FlowerUpdate;
