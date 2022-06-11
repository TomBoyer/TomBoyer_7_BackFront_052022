//libs
import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { apiComment } from "../Datas/DatasApi";
import { useNavigate, useParams } from "react-router-dom";
import { getToken, /* getUser */ } from "../Storage/AuthenticationStorage";

//components
import InputTextArea from "../Components/Form/InputTextArea";
import Title from "../Components/Title";
import Header from "../Components/Header";
import jwt from "jwt-decode";

export default function CreateComment() {
  //récupérer l'id du post dans le params
  let { postIdUrl } = useParams();

  //console.log("postId : " + postId);

  const navigate = useNavigate();

  //schéma de validation par yup
  const validate = yup.object({
    content: yup.string().required("Contenu requis"),
  });

  const user = jwt(getToken());

  //formik : valeurs initiales vides et validation suivant le schéma yup
  const formik = useFormik({
    initialValues: {
      content: "",
      userId: "",
      postId: "",
    },
    validationSchema: validate,
    onSubmit: ({ content }) => {

      //fetch la route comment pour post un commentaire : vérifier si token
      axios({
        method: "POST",
        url: apiComment,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        data: { 
          content, 
          userId: parseInt(user.userId, 10), 
          postId: postIdUrl 
        },
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
      {/* <h1>PAGE CREATE COMMENT</h1> */}

      <Header/>
      <Title name="Créer un commentaire" />

      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <InputTextArea
            name="content"
            id="content"
            label="Un commentaire ? : "
            handleChange={handleChange}
            placeholder="Tu peux écrire ton commentaire ici pour le partager avec le monde !"
            value={formik.values.content}
            error={formik.errors.content}
          />

          <div className="label__container">
            <button type="submit" className="btn">
              Publier
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
