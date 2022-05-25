import React from "react";
import { NavLink, useEffect, useNavigate, useState } from "react-router-dom";
import { LogOutIcon } from "./icons-logos/icons";
import { getToken } from "../Datas/ConfigAxios";
import axios from "axios";

export default function Nav() {
  const navigate = useNavigate;
  const logOut = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  // console.log(getToken());
  return getToken() ? (
    // si user logged utiliser cette nav bar
    <div>
      <nav className="header__nav">
        <NavLink to="/home" className="link-login">
          Accueil
        </NavLink>

        <NavLink to="/profile" className="link-login">
          Profil
        </NavLink>

        <NavLink to="/login" className="link-logout">
          <button onClick={logOut}>
            <LogOutIcon />
          </button>
        </NavLink>
      </nav>
    </div>
  ) : (
    <div>
      <nav className="header__nav">
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
