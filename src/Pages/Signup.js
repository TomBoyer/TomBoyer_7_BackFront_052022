//libs
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

//components
import Header from "../Components/Header";
import Title from "../Components/Title";
import { ShowInput, HideInput } from "../Components/icons-logos/icons";

//dataApi + schema
import { apiSignup } from "../Datas/DatasApi";
import signupSchema from "../Yup/SignupSchema";

// envoyer les infos au back (server) pour s'enregistrer sue le site. Si les infos rentrées sont ok (pas deja signup, bon mdp ...) retour sur la page login pour se co
export default function Signup() {

  //utiliser le yup schema pour vérifier les infos reseignées dans les inputs
  const {
    register,
    handleSubmit,
    formState,
    errors
  } = useForm({ resolver: yupResolver(signupSchema) });

   //desac le btn de submit avant remplissage des champs
   const {isSumitting, isSubmitted, isSubmitSuccessful ,setE} = formState

  //useState :
  //affichage/masquage mdp
  const [isHidden, setIsHidden] = useState(true);
  //mdp valide
  // const [validation, setValidation] = useState("");
  //err de link avec l'api
  const [apiErr, setApiErr] = useState("");

  // afficher/cacher le mdp du user dans l'input
  const passwordToggle = () => setIsHidden((e) => !e);


  //navigation
  const navigate = useNavigate();

  //utiliser axios pour fetch l'api
  const sendForm = async (formDatas) => {
    try {
      await axios.post(apiSignup, formDatas);
      navigate("/login");
    } catch (err) {
      console.log(err);
      const { status, data } = err.response;
      setApiErr({ status, data });
    }
  };



  // console.log({ ...register("Username") });

  return (
    <div className="signup__container">
      <h1>Page de SIGNUP</h1>

      <Header />
      <Title name="Inscription" />

      <div className="form__container">
        <form 
        onSubmit={handleSubmit((data) => sendForm(data))}>
          <div className="label__container">
            <label htmlFor="username">Pseudo</label>
            <input
              // {...register('Username')}
              required
              id="username"
              name="username"
              type="username"
              placeholder="Batman"
            />
            {/* {errors.username && <span>{errors.username.message}</span>} */}
          </div>

          <div className="label__container">
            <label htmlFor="Email">Email</label>
            <input
              // {...register('email')}
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
              // {...register('pwd')}
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

          {/* <div className="label__container">
            <label htmlFor="RepeatPwd">Vérification du mot de passe</label>
            <input
              // ref={register}
              required
              id="signupPwd"
              name="pwd"
              type={isHidden ? "password" : "text"}
              placeholder="ton super code secret"
            />
            <div className="password-toggle" onClick={passwordToggle}>
              {isHidden ? <HideInput /> : <ShowInput />}
            </div>
          </div> */}

          <div className="label__container">
            <button className="btn">Connection</button>
          </div>
        </form>
      </div>
    </div>
  );
}
