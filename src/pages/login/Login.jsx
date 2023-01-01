import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import AuthService from "../../services/AuthService";

const Login = () => {
  const { setAuth } = useContext(AuthContext);

  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [email, password]);

  const login = async (event) => {
    event.preventDefault();

    const result = await AuthService.login(email, password);

    setSuccess(true);
  };
  return (
    <>
      <section>
        <h2>Login</h2>
        <p
          ref={errorRef}
          className={error ? "error-message" : "hide"}
          aria-live="assertive"
        >
          {error}
        </p>
        <form onSubmit={login}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              onChange={(e) => setEmail(e.target.value.trim())}
              value={email}
              required
            />
            <span></span>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <span></span>
          </div>
          <div className="form-group">
            <button>Login</button>
          </div>
        </form>
        <p>
          Need an Account?
          <Link to="/register">
            <a href="#">Register</a>
          </Link>
        </p>
      </section>
    </>
  );
};

export default Login;
