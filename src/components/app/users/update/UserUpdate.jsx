import React, { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { history } from "../../../../helpers/HistoryHelper";
import UserService from "../../../../services/UserService";
import Loading from "../../../shared/loading/Loading";

const UserUpdate = () => {
  const { id } = useParams();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    dateOfBirth: "",
  });
  const [isValid, setIsValid] = useState({
    firstName: true,
    lastName: true,
    email: true,
    username: true,
    dateOfBirth: true,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUser = async (id) => {
      setLoading(true);
      const result = await UserService.getByIdAsync(id);
      if (!result.isSuccess) {
        history.navigate("/users");
      }
      setUser(result.data);
      setLoading(false);
    };

    getUser(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsValid({ ...user });
    if (!Object.values(user).every((val) => val)) {
      return;
    }

    const result = await UserService.updateAsync(user);
    if (!result.isSuccess) {
      setError(result.message);
      return;
    }

    setUser({
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      email: "",
      username: "",
    });

    history.navigate("/users/" + user.id);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="user-update-container">
          <h2 className="form-title">Update</h2>
          {!error && <p>{error}</p>}
          <form id="update-form" className="form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                className="input"
                value={user.firstName}
                onChange={(event) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    firstName: event.target.value.trim(),
                  }))
                }
              />
              {!isValid.firstName && (
                <span className="validation">First Name is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastName"
                className="input"
                value={user.lastName}
                onChange={(event) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    lastName: event.target.value.trim(),
                  }))
                }
              />
              {!isValid.lastName && (
                <span className="validation">Last Name is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                className="input"
                value={user.email}
                onChange={(event) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    email: event.target.value.trim(),
                  }))
                }
              />
              {!isValid.email && (
                <span className="validation">Email is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                className="input"
                value={user.username}
                onChange={(event) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    username: event.target.value.trim(),
                  }))
                }
              />
              {!isValid.username && (
                <span className="validation">Username is not valid</span>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="dateOfBirth">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                className="input"
                value={user.dateOfBirth}
                onChange={(event) =>
                  setUser((prevUser) => ({
                    ...prevUser,
                    dateOfBirth: event.target.value,
                  }))
                }
              />
              {!isValid.dateOfBirth && (
                <span className="validation">Date of Birth is not valid</span>
              )}
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

export default UserUpdate;
