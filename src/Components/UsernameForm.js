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

export default function UsernameForm() {

  const validate = yup.object({
    username: yup
      .string()
      .required("username requis"),
  });

  const formik = useFormik({
    initialValues: {
      username: getUsername(),
    },
    validationSchema: validate,
    onSubmit: ({ username }) => {
        // console.log({id: parseInt(getUserId()), username });
      axios({
        method: "PUT",
        url: apiUser,
        headers: {
          Authorization: `Bearer ${getToken()}`,

        },
        data: {id: parseInt(getUserId()), username },
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
          <Input
            name="username"
            label="changer ton pseudo : "
            // type="username"
            handleChange={handleChange}
            placeholder="Batman"
            value={formik.values.username}
            error={formik.errors.username}
          />

          <div className="label__container">
            <button type="submit" className="btn">
              Modifier
            </button>
            {/* {formik.errors && formik.touched && <FormError />} */}
          </div>
        </form>
      </div>
  );
}
