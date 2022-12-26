import React, { useEffect, useState } from "react";

const Register = (/*{register}*/) => {
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
  // const [registerUserFocus, setRegisterUserFocus] = useState({
  //   firstName: false,
  //   lastName: false,
  //   email: false,
  //   username: false,
  //   dateOfBirth: false,
  //   password: false,
  //   confirmedPassword: false,
  // });

  //register(registerUser);

  return (
    <>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="firstName"></label>
          <input
            type="text"
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                firstName: event.target.value,
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="lastName"></label>
          <input
            type="text"
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                lastName: event.target.value,
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                email: event.target.value,
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input
            type="text"
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                username: event.target.value,
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth"></label>
          <input
            type="date"
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
          <label htmlFor="password"></label>
          <input
            type="password"
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                password: event.target.value,
              }))
            }
          />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="checkPassword"></label>
          <input
            type="password"
            onChange={(event) =>
              setRegisterUser((prevUser) => ({
                ...prevUser,
                confirmedPassword: event.target.value,
              }))
            }
          />
          <span></span>
        </div>
      </form>
    </>
  );
};

export default Register;
