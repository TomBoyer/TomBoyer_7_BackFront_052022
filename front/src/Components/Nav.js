//libs
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

//compo + data
import { LogOutIcon } from "./icons-logos/icons";
import { getUser, logout } from "../Storage/AuthenticationStorage";

export default function Nav() {
  const [showLinks, setShowLinks] = useState(false);
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const navigate = useNavigate;
  const logOut = () => {
    logout();
    navigate("/login");
  };

  // console.log(getToken());

  return getUser() ? (
    <div>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <ul className="navbar__links">
          <li>
            <NavLink to="/home" className="link-login">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile" className="link-login">
              Profil
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="link-logout">
              <button onClick={logOut}>
                <LogOutIcon />
              </button>
            </NavLink>
          </li>
        </ul>
        <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </div>
  ) : (
    <div>
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <ul className="navbar__links">
          <li>
            <NavLink to="/signup" className="link-signup">
              S'inscrire
            </NavLink>
          </li>
          <li>
            <NavLink to="/login" className="link-login">
              Se Connecter
            </NavLink>
          </li>
        </ul>
        <button className="navbar__burger" onClick={handleShowLinks}>
          <span className="burger-bar"></span>
        </button>
      </nav>
    </div>
  );
}
