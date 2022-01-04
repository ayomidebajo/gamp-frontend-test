import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>
        Seems you entered the wrong url, click here to go{" "}
        <Link to="/" className="blue">
          back
        </Link>
      </h1>
    </div>
  );
};
