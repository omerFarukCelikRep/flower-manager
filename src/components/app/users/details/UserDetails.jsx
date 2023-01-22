import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { history } from "../../../../helpers/HistoryHelper";
import BlankPicture from "../../../../img/blank-profile-photo.jpeg";
import UserService from "../../../../services/UserService";
import Loading from "../../../shared/loading/Loading";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../shared/modal/Modal";
import UserRoles from "../roles/UserRoles";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [addedRoles, setAddedRoles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async (id) => {
      setLoading(true);
      const result = await UserService.getByIdAsync(id);
      if (!result.isSuccess) {
        history.navigate("/users");
      }
      setUser(result.data);
      setAddedRoles([...result.data.roles]);
      setLoading(false);
    };

    getUser(id);
  }, [id, showModal]);

  const handleChecboxChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setAddedRoles((prevRoles) => [...new Set([...prevRoles, value])]);
    } else {
      setAddedRoles(addedRoles.filter((role) => role !== value));
    }
  };

  const addToRole = async (e) => {
    e.preventDefault();

    const result = await UserService.addToRoleAsync(id, addedRoles);
    if (!result.isSuccess) {
      return;
    }

    setShowModal(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="user-details-container">
          <aside className="profile-image">
            <img
              src={!user.image && BlankPicture}
              alt={`${user.firstName}-${user.lastName}`}
            />
            <button
              type="button"
              className="route-link"
              onClick={() => setShowModal(true)}
            >
              Roles
            </button>
            <Link to={`../update/${id}`} className="route-link">
              Update
            </Link>
            <Link to={`../delete/${id}`} className="route-link danger">
              Delete
            </Link>
            <Modal
              show={showModal}
              setShowModal={setShowModal}
              /*hideCloseButton*/
            >
              <form onSubmit={addToRole}>
                <ModalHeader>
                  <h2>User Roles</h2>
                </ModalHeader>
                <ModalBody>
                  <UserRoles
                    userRoles={user.roles}
                    handleChecboxChange={handleChecboxChange}
                  />
                </ModalBody>
                <ModalFooter>
                  <button
                    type="button"
                    className="route-link secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button type="submit" className="route-link primary">
                    Add Role
                  </button>
                </ModalFooter>
              </form>
            </Modal>
          </aside>
          <main className="details">
            <div className="details-title">{`${user.firstName} ${user.lastName}`}</div>
            <div className="details-content">
              <div className="content-group">
                <label>Username</label>:<span>{user.username}</span>
              </div>
              <div className="content-group">
                <label>Email</label>:<span>{user.email}</span>
              </div>
              <div className="content-group">
                <label>Date Of Birth</label>:<span>{user.dateOfBirth}</span>
              </div>
              <div className="content-group">
                <label>Roles</label>:<span>{user.roles?.join(", ")}</span>
              </div>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default UserDetails;
