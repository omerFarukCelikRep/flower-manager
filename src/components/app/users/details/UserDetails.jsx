import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { history } from "../../../../helpers/HistoryHelper";
import BlankPicture from "../../../../img/blank-profile-photo.jpeg";
import UserService from "../../../../services/UserService";

const UserDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [user, setUser] = useState({});

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
