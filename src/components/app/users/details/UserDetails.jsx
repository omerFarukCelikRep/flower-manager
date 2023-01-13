import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { history } from "../../../../helpers/HistoryHelper";
import BlankPicture from "../../../../img/blank-profile-photo.jpeg";
import UserService from "../../../../services/UserService";
import Modal, {
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "../../../shared/modal/Modal";

const UserDetails = () => {
  const { id } = useParams();

  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const getUser = async (id) => {
      const result = await UserService.getByIdAsync(id);
      if (!result.isSuccess) {
        history.navigate("/users");
      }
      setUser(result.data);
    };

    getUser(id);
  }, [id]);

  return (
    <>
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
            <ModalHeader>
              <h2>User Roles</h2>
            </ModalHeader>
            <ModalBody>
              <p style={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                itaque harum vero modi, aspernatur, esse veniam, eius velit quia
                ea soluta! Laborum corporis iste dolores tempora minus nobis
                laudantium officiis!
              </p>
            </ModalBody>
            <ModalFooter>
              <button type="button" className="route-link secondary" onClick={() => setShowModal(false)}>Close</button>
              <button type="button" className="route-link primary">Add Role</button>
            </ModalFooter>
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
          </div>
        </main>
      </div>
    </>
  );
};

export default UserDetails;
