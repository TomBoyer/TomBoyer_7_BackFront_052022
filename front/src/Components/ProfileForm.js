//libs
import React /* useState useEffect, useState*/ from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

//compo
import Input from "./Form/Input";
import { apiUser } from "../Datas/DatasApi";
// import FormError from "./Form/FormError";

import { getToken, getUser, setUser } from "../Storage/AuthenticationStorage";

export default function ProfileForm() {
  const validate = yup.object({
    username: yup.string().required("username requis"),
    imageUrl: yup
      .string()

      .required("image requis"),
  });

  const formik = useFormik({
    initialValues: {
      username: getUser()?.username,
      imageUrl: getUser()?.imageUrl,
    },
    validationSchema: validate,
    onSubmit: ({ username, imageUrl }) => {
      axios({
        method: "PUT",
        url: apiUser,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        data: { id: parseInt(getUser()?.userId), username, imageUrl },
      })
        .then((res) => {
          console.log(res);
          setUser({ userId: getUser().userId, username, imageUrl });
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
          label="Changer ton pseudo : "
          // type="username"
          handleChange={handleChange}
          placeholder="Batman"
          value={formik.values.username}
          error={formik.errors.username}
        />

        <Input
          name="imageUrl"
          label="Changer ton image : "
          type="url"
          handleChange={handleChange}
          placeholder="htts://example.jpg"
          value={formik.values.imageUrl}
          error={formik.errors.imageUrl}
        />

        <div className="label__container">
          <button type="submit" className="btn btn-profile">
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
}
