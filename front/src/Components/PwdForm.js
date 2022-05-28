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

import {
  axiosIsLogged,
  getToken,
  getUserId,
  getUsername,
} from "../Datas/ConfigAxios";

export default function PwdForm() {
  const VALID_PASSWORD =
    /^(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){2,})(?=.*[!@#$%])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const validate = yup.object({
    oldPassword: yup
      .string()
      .required("Merci d'inscrire un l'ancien password")
      .matches(
        VALID_PASSWORD,
        "votre mdp doit contenir : 1 maj 1 min 8 cara un sign parmit (!@#$%)"
      ),
    newPassword: yup
      .string()
      .required("Merci d'inscrire un le nouveau password")
      .matches(
        VALID_PASSWORD,
        "votre mdp doit contenir : 1 maj 1 min 8 cara un sign parmit (!@#$%)"
      ),
  });

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: validate,
    onSubmit: ({ oldPassword, newPassword }) => {
      console.log({ id: parseInt(getUserId()), oldPassword, newPassword });
      axios({
        method: "PUT",
        url: apiUser,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        data: { id: parseInt(getUserId()), oldPassword, newPassword },
      })
        .then((res) => {
          //   console.log(res);
          navigate("/home");
        })
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

  const navigate = useNavigate();
  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <InputPassword
          name="oldPassword"
          label="ancien mdp"
          handleChange={handleChange}
          placeholder="ton ancien mdp"
          value={formik.values.oldPassword}
          error={formik.errors.oldPassword}
        />

        <InputPassword
          name="newPassword"
          label="nouveau mdp"
          handleChange={handleChange}
          placeholder="Ton nouveau super mot de passe"
          value={formik.values.newPassword}
          error={formik.errors.newPassword}
        />
        <div className="label__container">
          <button type="submit" className="btn">
            Modifier pwd
          </button>
          {/* {formik.errors && formik.touched && <FormError />} */}
        </div>
      </form>
    </div>
  );
}
