import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../context/AuthProvider";
import { history } from "../../../../helpers/HistoryHelper";
import BlankPicture from "../../../../img/blank-profile-photo.jpeg";
import FlowerService from "../../../../services/FlowerService";
import ConfirmModal from "../../../shared/confirmModal/ConfirmModal";

const FlowerDetails = () => {
  const { id } = useParams();
  const { auth } = useAuthContext();

  const [flower, setFlower] = useState({});
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);

  useEffect(() => {
    const getFlower = async (id) => {
      const result = await FlowerService.getByIdAsync(id);
      if (!result.isSuccess) {
        history.navigate("/flowers");
      }
      setFlower(result.data);
      setHasPermission(
        auth?.roles?.some((role) => role === "Admin") ||
          auth?.id === result.data.userId
      );
    };

    getFlower(id);
  }, [id, auth]);

  const deleteFlower = async (e) => {
    e.preventDefault();

    const result = await FlowerService.deleteAsync(id);
    if (!result.isSuccess) {
      return;
    }

    setShowConfirmModal(false);
    history.navigate("flowers");
  };

  return (
    <>
      <div className="flower-details-container">
        <aside className="flower-image">
          <img src={flower.image ?? BlankPicture} alt={`${flower.name}`} />
          {hasPermission && (
            <>
              <Link to={`../update/${id}`} className="route-link">
                Update
              </Link>
              <button
                className="route-link danger"
                onClick={() => setShowConfirmModal(true)}
              >
                Delete
              </button>
              <ConfirmModal
                title={"Delete"}
                confirmText={"Are you sure?"}
                showModal={showConfirmModal}
                setShowModal={setShowConfirmModal}
                confirm={deleteFlower}
              />
            </>
          )}
        </aside>
        <main className="details">
          <div className="details-title">{`${flower.name}`}</div>
          <div className="details-content">
            <div className="content-group">
              <label>Description</label>:<span>{flower.description}</span>
            </div>
            <div className="content-group">
              <label>Price</label>:<span>{`${flower.price} TL`}</span>
            </div>
            <div className="content-group">
              <label>Stock Count</label>:
              <span>{`${flower.stockCount} Adet`}</span>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default FlowerDetails;
