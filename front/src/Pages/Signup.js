//libs
import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

//components
import Header from "../Components/Header";
import Title from "../Components/Title";

import Input from "../Components/Form/Input";
import FormError from "../Components/Form/FormError";
import InputPassword from "../Components/Form/InputPassword";

//data
import { apiSignup } from "../Datas/DatasApi";
export default function Signup() {
  //navigation
  const navigate = useNavigate();
  const [hasErrors, sethasErrors] = useState(false);

  const VALID_USERNAME = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\S'.-]+$/;
  const VALID_EMAIL = /^[\w_.-]+@[\w-]+\.[a-z]{2,4}$/i;
  const VALID_PASSWORD =
    /^(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){2,})(?=.*[!@#$%])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const validate = yup.object({
    username: yup
      .string()
      .lowercase()
      .matches(VALID_USERNAME, "Sans espace svp !")
      .trim()
      .required("username requis"),
    email: yup
      .string()
      .lowercase()
      .trim(yup.string())
      .matches(VALID_EMAIL, "Email non valide")
      .email("Email non valide")
      .required("Email requis"),
    password: yup
      .string()
      .required("Merci d'inscrire un password")
      .matches(
        VALID_PASSWORD,
        "votre mdp doit contenir : 1 maj 1 min 8 cara un signe parmi (!@#$%)"
      ),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: ({ username, email, password }) => {
      // console.log(username, email, password);
      sethasErrors(false);
      axios
        .post(apiSignup, { username, email, password })
        .then(navigate("/login"))
        .catch((error) => {
          console.error(error);
        });
    },
  });

  const handleChange = (e) => {
    formik.handleChange(e);
  };

  const handleSubmit = (event) => {
    formik.handleSubmit(event);
  };

  // console.error(formik.errors);

  return (
    <div>
      <div className="signup__container">
        {/* <h1>Page de SIGNUP</h1> */}

        <Header />
        <Title name="Inscription" />

        <div className="form__container">
          <form onSubmit={handleSubmit}>
            <Input
              name="username"
              label="Pseudo"
              handleChange={handleChange}
              placeholder="Batman"
              value={formik.values.username}
              error={formik.errors.username}
            />

            <Input
              name="email"
              label="email"
              type="email"
              handleChange={handleChange}
              placeholder="email@email.fr"
              value={formik.values.email}
              error={formik.errors.email}
            />

            <InputPassword
              name="password"
              label="password"
              handleChange={handleChange}
              placeholder="Ton super mdp"
              value={formik.values.password}
              error={formik.errors.password}
            />

            <div className="label__container">
              <button type="submit" className="btn">
                Inscription
              </button>

              {hasErrors && <p>this is a backend error </p>}
              {!formik.isValid && <FormError />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
