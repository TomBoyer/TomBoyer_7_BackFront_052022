import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/home">
        <img
          src={`${process.env.PUBLIC_URL}/imgs/icon-left-font-monochrome-black.png`}
          alt="logo groupomania black"
        />
      </NavLink>

      <Nav />
    </header>
  );
}
