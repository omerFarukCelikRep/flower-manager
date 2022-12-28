import React, { useEffect, useRef, useState } from "react";
import StringHelper from "../../helpers/StringHelper";
import AuthService from "../../services/AuthService";

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
    firstName: false,
    lastName: false,
    email: false,
    username: false,
    dateOfBirth: false,
    password: false,
    confirmedPassword: false,
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  // const [registerUserFocus, setRegisterUserFocus] = useState({
  //   firstName: false,
  //   lastName: false,
  //   email: false,
  //   username: false,
  //   dateOfBirth: false,
  //   password: false,
  //   confirmedPassword: false,
  // });

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsValid({ ...registerUser});
    if (Object.values(registerUser).every(val => val)) {
      AuthService.register(registerUser);
    }
  };

  return (
    <>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            value={registerUser.firstName}
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                firstName: event.target.value.trim(),
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            value={registerUser.lastName}
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                lastName: event.target.value.trim(),
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Email
          </label>
          <input
            type="email"
            value={registerUser.email}
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                email: event.target.value.trim(),
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="username">
            Username
          </label>
          <input
            type="text"
            value={registerUser.username}
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                username: event.target.value.trim(),
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth">
            Date Of Birth
          </label>
          <input
            type="date"
            value={registerUser.dateOfBirth}
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                dateOfBirth: event.target.value,
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="password">
            Password
          </label>
          <input
            type="password"
            value={registerUser.password}
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                password: event.target.value.trim(),
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="confirmedPassword">
            Confirmed Password
          </label>
          <input
            type="password"
            value={registerUser.confirmedPassword}
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                confirmedPassword: event.target.value.trim(),
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};

export default Register;
