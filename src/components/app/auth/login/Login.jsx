import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../../../context/AuthProvider";
import { history } from "../../../../helpers/HistoryHelper";
import AuthService from "../../../../services/AuthService";

const Login = () => {
  const { auth, setAuth } = useAuthContext();

  const emailRef = useRef();

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
      <div className="form-container login-container">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Login</h2>
          {error && <p className="text-danger">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="input"
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
              className="input"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <span></span>
          </div>
          <a href="#" className="link">
            Forgot your password?
          </a>
          <div className="form-group">
            <button className="btn">Login</button>
          </div>
          <div
            className="form-group"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              alignItems: "centers",
            }}
          >
            Need an Account?
            <Link to="/register" className="link">
              Register
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
