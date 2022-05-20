import React from "react";
import { NavLink, useEffect, useState } from "react-router-dom";
import axios from "axios";

export default function Nav() {
  return (
    <div>
      <nav className='header__nav'>
        <NavLink to="/signup" className="link-signup">
          S'inscrire
        </NavLink>
        <NavLink to="/login" className="link-login">
          Se Connecter
        </NavLink>
      </nav>
    </div>
  );
}
