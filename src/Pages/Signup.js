import React, { useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

import Header from "../Components/Header";
import Title from "../Components/Title";

import { ShowInput, HideInput } from "../Components/icons-logos/icons";
import { apiSignup } from "../Datas/DatasApi";
import Input from "../Components/Form/Input";
import FormError from "../Components/Form/FormError";
import InputPassword from "../Components/Form/InputPassword";

export default function Signup() {
  //   const PseudoRegex =
  //     /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'.-]+$/;
  const VALID_EMAIL = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i;
  const VALID_PASSWORD =
    /^(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){2,})(?=.*[!@#$%])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const validate = yup.object({
    username: yup.string().lowercase().required("username requis"),
    email: yup
      .string()
      .lowercase()
      .matches(VALID_EMAIL, "Email non valide")
      .email("Email non valide")
      .required("Email requis"),
    password: yup
      .string()
      .required("Merci d'inscrire un password")
      .matches(
        VALID_PASSWORD,
        "votre mdp doit contenir : 1 maj 1 min 8 cara un sign parmit (!@#$%)"
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

    // if (!formik.isValid || Object.values(formik.values).includes('')) {
    //   setShowAlert(true);
    // }
  };

  const [isHidden, setIsHidden] = useState(true);
  const passwordToggle = () => setIsHidden((e) => !e);

  //navigation
  const navigate = useNavigate();

  return (
    <div>
      <div className="signup__container">
        <h1>Page de SIGNUP2</h1>

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
                Insciption
              </button>
              {formik.errors && formik.touched && <FormError />}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
