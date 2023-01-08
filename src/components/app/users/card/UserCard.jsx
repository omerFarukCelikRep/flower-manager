import React from "react";
import { Link } from "react-router-dom";
import BlankPicture from "../../../../img/blank-profile-photo.jpeg";

const UserCard = ({ user }) => {
  return (
    <>
      <div className="flower-card">
        <div className="face face1">
          <div className="content">
            <img src={!user.image && BlankPicture} alt={`${user.firstName}-${user.lastName}`} />
            <h3>{`${user.firstName}-${user.lastName}`}</h3>
          </div>
        </div>
        <div className="face face2">
          <div className="content">
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.dateOfBirth}</p>
            <Link to={`/users/${user.id}`}>User Details</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserCard;
