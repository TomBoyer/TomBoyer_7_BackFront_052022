//libs
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

//components
import Header from "../Components/Header";
import Title from "../Components/Title";
import { ShowInput, HideInput } from "../Components/icons-logos/icons";

//dataApi + schema
import { apiLogin } from "../Datas/DatasApi";
import loginSchema from "../Yup//LoginSchema";

export default function Login() {
  //useState
  const [isHidden, setIsHidden] = useState(true);
  const [validation, setValidation] = useState("");

  // afficher ou cacher le mdp du user dans l'input
  const passwordToggle = () => setIsHidden((e) => !e);

  return (
    <div className="login__container">
      <h1>Page de LOGIN</h1>

      <Header />
      <Title name="Connexion" />

      <div className="form__container">
        <form
        // onSubmit={handleform}
        >
          <div className="label__container">
            <label htmlFor="Email">Email</label>
            <input
              required
              id="loginEmail"
              name="email"
              type="email"
              placeholder="email@email.fr"
            />
          </div>

          <div className="label__container">
            <label htmlFor="password">Mot de passe</label>
            <input
              required
              id="loginPwd"
              name="password"
              type={isHidden ? "password" : "text"}
              placeholder="ton super code secret"
            />

            <div className="password-toggle" onClick={passwordToggle}>
              {isHidden ? <HideInput /> : <ShowInput />}
            </div>
            
          </div>

          <p>{validation}</p>

          <div className="label__container">
            <button className="btn">Connection</button>
          </div>
        </form>
      </div>
    </div>
  );
}
