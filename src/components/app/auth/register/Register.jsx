import React, { useState } from "react";
import AuthService from "../../../../services/AuthService";

const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    dateOfBirth: "",
    password: "",
    confirmedPassword: "",
  });

  const [isValid, setIsValid] = useState({
    firstName: true,
    lastName: true,
    email: true,
    username: true,
    dateOfBirth: true,
    password: true,
    confirmedPassword: true,
  });

  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsValid({ ...registerUser });
    if (!Object.values(registerUser).every((val) => val)) {
      return;
    }

    const result = await AuthService.register({ ...registerUser });
    if (result?.isSuccess) {
      setRegisterUser({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        dateOfBirth: "",
        password: "",
        confirmedPassword: "",
      });
      return;
    }

    setError(result.message);
  };
  return (
    <>
      <div className="form-container register-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Register</h2>
          {error && <p className="text-danger">{error}</p>}
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              className="input"
              value={registerUser.firstName}
              onChange={(event) =>
                setRegisterUser((prevUser) => ({
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
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="input"
              value={registerUser.lastName}
              onChange={(event) =>
                setRegisterUser((prevUser) => ({
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
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input"
              value={registerUser.email}
              onChange={(event) =>
                setRegisterUser((prevUser) => ({
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
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="input"
              value={registerUser.username}
              onChange={(event) =>
                setRegisterUser((prevUser) => ({
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
            <label htmlFor="dateOfBirth">Date Of Birth</label>
            <input
              type="date"
              className="input"
              value={registerUser.dateOfBirth}
              onChange={(event) =>
                setRegisterUser((prevUser) => ({
                  ...prevUser,
                  dateOfBirth: event.target.value,
                }))
              }
            />
            {!isValid.dateOfBirth && (
              <span className="validation">Date Of Birth is not valid</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="input"
              value={registerUser.password}
              onChange={(event) =>
                setRegisterUser((prevUser) => ({
                  ...prevUser,
                  password: event.target.value.trim(),
                }))
              }
            />
            {!isValid.password && (
              <span className="validation">Password is not valid</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="confirmedPassword">Confirmed Password</label>
            <input
              type="password"
              className="input"
              value={registerUser.confirmedPassword}
              onChange={(event) =>
                setRegisterUser((prevUser) => ({
                  ...prevUser,
                  confirmedPassword: event.target.value.trim(),
                }))
              }
            />
            {!isValid.confirmedPassword && (
              <span className="validation">Password is not matched</span>
            )}
          </div>
          <div className="form-group">
            <button type="submit" className="btn">
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
