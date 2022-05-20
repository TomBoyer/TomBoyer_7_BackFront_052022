import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h1>NotFound</h1>
      <h2>
        Error :
        <br />
        404 page not found ¯\_(ツ)_/¯
      </h2>
      <p>hop hop hop reviens par ici !</p>

      <div className="btn-home-container">
        <Link className="btn-home" to="/">
          Go to Home{" "}
        </Link>
      </div>
    </div>
  );
}
