//libs
import React, { /* useState */ useEffect, useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

//compo
import Input from "../Components/Form/Input";
import InputPassword from "../Components/Form/InputPassword";
import Header from "../Components/Header";
import Title from "../Components/Title";
import { apiUser } from "../Datas/DatasApi";
import FormError from "../Components/Form/FormError";

import { axiosIsLogged, getToken, getUserId, getUsername } from "../Datas/ConfigAxios";
import UsernameForm from "../Components/UsernameForm";
import PwdForm from "../Components/PwdForm";

export default function Profile() {
  // const VALID_EMAIL = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i;


  // const validate = yup.object({
  //   email: yup
  //     .string()
  //     .lowercase()
  //     .matches(VALID_EMAIL, "Email non valide")
  //     .email("Email non valide")
  //     .required("Email requis"),
  //   password: yup
  //     .string()
  //     .required("Merci d'inscrire un password")
  //     .matches(
  //       VALID_PASSWORD,
  //       "votre mdp doit contenir : 1 maj 1 min 8 cara un sign parmit (!@#$%)"
  //     ),
  // });

  // const formik = useFormik({
  //   initialValues: {
  //     username: getUsername(),
  //     password: "",
  //   },
  //   validationSchema: validate,
  //   onSubmit: ({ username, password }) => {
  //     // console.log (email, password);
  //     axios({
  //       method: "PUT",
  //       url: apiUser,
  //       headers: {
  //         Authorization: `Bearer ${getToken()}`,
  //         //"Content-Type": "application/json",
  //       },
  //       data: { username, password },
  //     })
  //       .then((res) => {
  //         console.log(res);
  //         navigate("/home");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   },
  // });

  // const handleChange = (e) => {
  //   formik.handleChange(e);
  // };

  // const handleSubmit = (event) => {
  //   formik.handleSubmit(event);
  // };

  // const navigate = useNavigate();
  return (
    <div>
      <Header />
      <Title name="Ton Profil" />


      <UsernameForm/>
      <PwdForm/>

      {/* <div className="form__container">
        <form onSubmit={handleSubmit}>
          <Input
            name="username"
            label="changer ton pseudo : "
            type="username"
            handleChange={handleChange}
            placeholder="Batman"
            value={formik.values.username}
            error={formik.errors.username}
          />

          <InputPassword
            name="password"
            label="changer ton mot de passe"
            handleChange={handleChange}
            placeholder="Ton nouveau super mot de passe"
            value={formik.values.password}
            error={formik.errors.password}
          />

          <div className="label__container">
            <button type="submit" className="btn">
              Modifer
            </button>
            {formik.errors && formik.touched && <FormError />}
          </div>
        </form>
      </div> */}
    </div>
  );
}
