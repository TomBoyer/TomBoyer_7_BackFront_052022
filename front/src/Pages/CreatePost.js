//libs
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { apiPost } from "../Datas/DatasApi";
import { useNavigate } from "react-router-dom";
import { getToken, getUser } from "../Storage/AuthenticationStorage";

//components
import InputTextArea from "../Components/Form/InputTextArea";
import Header from "../Components/Header";
import Title from "../Components/Title";
import Input from "../Components/Form/Input";

export default function CreatePost() {
  const navigate = useNavigate();

  //schéma de validation par yup
  const validate = yup.object({
    content: yup.string().required("Contenu requis"),
  });

  //formik : valeurs initiales vides et validation suivant le schéma yup
  const formik = useFormik({
    initialValues: {
      content: "",
      userId: "",
      image: "",
    },
    validationSchema: validate,
    onSubmit: ({ content, image }) => {

      //fetch la route post pour publier post : vérifier si token
      axios({
        method: "POST",
        url: apiPost,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        data: { content, userId: parseInt(getUser().userId), image },
      })
        .then((res) => {
          // console.log(res);
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
      {/* <h1>PAGE CREATE POST</h1> */}

      <Header />
      <Title name="Créer une publication" />

      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <InputTextArea
            name="content"
            id="content"
            label="Un truc à partager ? : "
            handleChange={handleChange}
            placeholder="Tu peux écrire ton post ici pour le partager avec le monde !"
            value={formik.values.content}
            error={formik.errors.content}
          />

          <Input
            name="image"
            label="poset une image : "
            type="url"
            handleChange={handleChange}
            placeholder="htts://example.jpg"
            value={formik.values.image}
            error={formik.errors.image}
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
