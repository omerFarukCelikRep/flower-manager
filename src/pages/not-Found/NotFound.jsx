import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h5>Not Found</h5>
      <p>The resource requested could not be found on this server</p>
      <Link to="/">
        <button>return to home page</button>
      </Link>
    </div>
  );
};

export default NotFound;
