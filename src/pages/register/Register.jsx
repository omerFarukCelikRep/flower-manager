import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/AuthService";
import "./Register.scss";

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
  const [success, setSuccess] = useState(false);

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
      setSuccess(true);
      return;
    }

    setError(result.message); //TODO: Hata mesajı result üzerinden alınacak
  };

  return (
    <>
      {success ? (
        <section>
          <h2>Registered Successfully!</h2>
          <p>
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </section>
      ) : (
        <section>
          <h2>Register</h2>
          {error && <p>{error}</p>}
          <form
            id="register-form"
            className="register-form"
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
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
              <button type="submit">Register</button>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default Register;
