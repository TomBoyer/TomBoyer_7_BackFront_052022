//libs
import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";
import jwt from "jwt-decode";

//compo
import InputPassword from "../Components/Form/InputPassword";
import { apiUser } from "../Datas/DatasApi";
import { getToken, /* getUser */ } from "../Storage/AuthenticationStorage";

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

  const user = jwt(getToken());

  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: validate,
    onSubmit: ({ oldPassword, newPassword }) => {
      axios({
        method: "PUT",
        url: apiUser,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        data: { id: parseInt(user?.userId), oldPassword, newPassword },
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
          <button type="submit" className="btn btn-profile">
            Modifier MDP
          </button>
        </div>
      </form>
    </div>
  );
}
