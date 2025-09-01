import React from "react";
import { Link } from "react-router-dom";
import "./notfound.css";

const NotFound = () => {
  return (
    <div className="notfound">
      <h1>404 Not Found</h1>
      <p>Your visited page not found. You may go home page.</p>
      <Link to="/" className="btn-back">
        Back to home page
      </Link>
    </div>
  );
};

export default NotFound;
