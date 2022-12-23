import React, { useState } from "react";

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

  return (
    <>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="firstName"></label>
          <input type="text" />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="lastName"></label>
          <input type="text" />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input type="email" />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="username"></label>
          <input type="text" />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="dateOfBirth"></label>
          <input type="date" />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input type="password" />
          <span></span>
        </div>
        <div className="form-group">
          <label htmlFor="checkPassword"></label>
          <input type="password" />
          <span></span>
        </div>
      </form>
    </>
  );
};

export default Register;
