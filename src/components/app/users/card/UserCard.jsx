import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import BlankPicture from "../../../../img/blank-profile-photo.jpeg";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="user-card">
        <div className="profile-image">
          <img
            src={!user.image && BlankPicture}
            alt={`${user.firstName}-${user.lastName}`}
          />
        </div>
        <div className="user-card-content">
          <h3>{`${user.firstName} ${user.lastName}`}</h3>
          <p>{user.email}</p>
          <div className="social">
            <Link to={`/users/${user.id}`}>
              <i>
                <FontAwesomeIcon icon={faFacebook} />
              </i>
            </Link>
            <Link to={`/users/${user.id}`}>
              <i>
                <FontAwesomeIcon icon={faTwitter} />
              </i>
            </Link>
            <Link to={`/users/${user.id}`}>
              <i>
                <FontAwesomeIcon icon={faYoutube} />
              </i>
            </Link>
          </div>
        </div>
        <div className="card-footer">
          <Link to={`/users/${user.id}`} className="route-link">
            User Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserCard;
