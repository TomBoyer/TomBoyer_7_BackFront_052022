import React from "react";
import { NavLink } from "react-router-dom";

import Nav from "./Nav";

export default function Header() {
  return (
    <header className="header">
      {/* <div className="logo__container"> */}
      <NavLink to="/home">
        <img
          // className="logo"
          // src="./imgs/icon-left-font-monochrome-black.png"
          src={`${process.env.PUBLIC_URL}/imgs/icon-left-font-monochrome-black.png`}
          alt="logo groupomania black"
        />
      </NavLink>
      {/* </div> */}
      <Nav />
    </header>
  );
}
