import React from "react";

const Login = () => {
  return (
    <>
      <div className="form-container login-container">
        <form action="#" id="login-form">
          <h2 className="form-title">Login</h2>
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />
          <a href="#" className="link">
            Forgot your password?
          </a>
          <button className="btn">Sign In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
