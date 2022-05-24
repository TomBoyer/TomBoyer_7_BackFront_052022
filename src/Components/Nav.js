import React from "react";
import { NavLink, useEffect, useNavigate, useState } from "react-router-dom";
import { LogOutIcon } from "./icons-logos/icons";
import axios from "axios";

export default function Nav() {
  const navigate = useNavigate;
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    // <div>
    //   <nav className='header__nav'>
    //     <NavLink to="/signup" className="link-signup">
    //       S'inscrire
    //     </NavLink>
    //     <NavLink to="/login" className="link-login">
    //       Se Connecter
    //     </NavLink>
    //   </nav>
    // </div>

    // si user logged utiliser cette nav bar
    <div>
      <nav className="header__nav">
        <NavLink to="/home" className="link-login">
          Accueil
        </NavLink>

        <NavLink to="/profile/:id" className="link-login">
          Profil
        </NavLink>

        <NavLink to="/login" className="link-logout">
          <button onClick={logOut}>
            <LogOutIcon />
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
