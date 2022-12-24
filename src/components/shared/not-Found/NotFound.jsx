import React from "react";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="not-found">
      <h1>404</h1>
      <h5>Not Found</h5>
      <p>The resource requested could not be found on this server</p>
      <button onClick={handleClick}>return to home page</button>
    </div>
  );
};
