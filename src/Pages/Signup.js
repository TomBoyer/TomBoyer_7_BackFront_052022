import React, { useState } from "react";
import Header from "../Components/Header";
import Title from "../Components/Title";
import { ShowInput, HideInput } from "../Components/icons-logos/icons";

export default function Signup() {
  //useState
  const [isHidden, setIsHidden] = useState(true);
  const [validation, setValidation] = useState("");

  // afficher/cacher le mdp du user dans l'input
  const passwordToggle = () => setIsHidden((e) => !e);

  // envoyer les infos au back (server) pour s'enregistrer sue le site. Si les infos rentrées sont ok (pas deja signup, bon mdp ...) retour sur la page login pour se co
  

  return (
    <div className="signup__container">
      <h1>Page de SIGNUP</h1>

      <Header />
      <Title name="Inscription" />

      <div className="form__container">
        <form
        // onSubmit={handleform}
        >
          <div className="label__container">
            <label htmlFor="Username">Pseudo</label>
            <input
              required
              id="Username"
              name="Username"
              type="Username"
              placeholder="Batman"
            />
          </div>

          <div className="label__container">
            <label htmlFor="Email">Email</label>
            <input
              required
              id="signupEmail"
              name="email"
              type="email"
              placeholder="email@email.fr"
            />
          </div>

          <div className="label__container">
            <label htmlFor="SignupPwd">Mot de passe</label>
            <input
              required
              id="signupPwd"
              name="pwd"
              type={isHidden ? "password" : "text"}
              placeholder="ton super code secret"
            />
            <div className="password-toggle" onClick={passwordToggle}>
              {isHidden ? <HideInput /> : <ShowInput />}
            </div>
          </div>

          <div className="label__container">
            <label htmlFor="RepeatPwd">Vérification du mot de passe</label>
            <input
              required
              id="signupPwd"
              name="pwd"
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
