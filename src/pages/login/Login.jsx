import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthProvider";
import { history } from "../../helpers/HistoryHelper";
import AuthService from "../../services/AuthService";

const Login = () => {
  const { auth, setAuth } = useAuthContext();

  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (auth) {
      history.navigate("/");
    }
  });

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [email, password]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const result = await AuthService.login(email, password);
    if (!result?.isSuccess) {
      setError(result.message);
      return;
    }

    setAuth({ id: result?.data?.id, email: result?.data?.email });
    history.navigate("/");
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
        <form onSubmit={handleSubmit}>
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
            <span>Register</span>
          </Link>
        </p>
      </section>
    </>
  );
};

export default Login;
