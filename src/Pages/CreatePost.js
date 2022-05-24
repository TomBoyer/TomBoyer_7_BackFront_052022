import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { axiosIsLogged, getToken, getUserId } from "../Datas/ConfigAxios";
import { apiPost } from "../Datas/DatasApi";
import { useNavigate } from "react-router-dom";
import InputTextArea from "../Components/Form/InputTextArea";
import FormError from "../Components/Form/FormError";
import Header from "../Components/Header";
import Title from "../Components/Title";

export default function CreatePost() {
  const navigate = useNavigate();
  const validate = yup.object({
    content: yup.string().required("Contenu requis"),
  });

  const formik = useFormik({
    initialValues: {
      content: "",
    },
    validationSchema: validate,
    onSubmit: ({ content }) => {
      axios



//a finir passer par les form-data : https://stackoverflow.com/questions/51415439/how-can-i-add-raw-data-body-to-an-axios-request/51415585#51415585
        .post(
          apiPost,
          { content, userId: getUserId() },
          {
              
            headers: {
              Authorization: `Bearer ${getToken()}`,
              "Content-Type": "text/plain",
            },
          }
        )




        .then((res) => {
          console.log(res);
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
  return (
    <div>
      <Header />
      <Title name="Créer un post" />

      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <InputTextArea 
            name="content"
            label="Un truc à partager ? : "
            handleChange={handleChange}
            placeholder="Tu peux écrire ton post ici pour le partager avec le monde !"
            value={formik.values.content}
            error={formik.errors.content}
            
          />

          <div className="label__container">
            <button type="submit" className="btn">
              Publier
            </button>
            {/* {formik.errors && formik.touched && <FormError />} */}
          </div>
        </form>
      </div>
    </div>
  );
}
