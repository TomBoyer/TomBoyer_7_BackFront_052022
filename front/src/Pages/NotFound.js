import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound_container">
      <h1 >NotFound</h1>
      <h2 >
        Error :
        <br />
        404 page not found ¯\_(ツ)_/¯
      </h2>
      <p >hop hop hop reviens par ici !</p>

      <div className="btn-home-container">
        <NavLink className="btn-home" to="/home">
          Go to Home{" "}
        </NavLink>
      </div>
    </div>
  );
}
