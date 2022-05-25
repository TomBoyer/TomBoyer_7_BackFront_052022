import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { axiosIsLogged, getToken, getUserId } from "../Datas/ConfigAxios";
import { apiComment } from "../Datas/DatasApi";
import { useNavigate, useParams } from "react-router-dom";
import InputTextArea from "../Components/Form/InputTextArea";
import FormError from "../Components/Form/FormError";
import Header from "../Components/Header";
import Title from "../Components/Title";

export default function CreateComment() {
  let { postIdUrl } = useParams();
  
  //console.log("postId : " + postId);

  const navigate = useNavigate();

  const validate = yup.object({
    content: yup.string().required("Contenu requis"),
  });

  const formik = useFormik({
    initialValues: {
      content: "",
      userId: "",
      postId: "",
    },
    validationSchema: validate,
    onSubmit: ({ content }) => {
      // console.log("token : " + getToken());
      // console.log("User ID : " + parseInt(getUserId(), 10));

      axios({
        method: "POST",
        url: apiComment,
        headers: {
          Authorization: `Bearer ${getToken()}`,
          //"Content-Type": "application/json",
        },
        data: { content, userId: parseInt(getUserId(), 10), postId: postIdUrl },
      })
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
      <h1>PAGE CREATE COMMENT</h1>

      <Header />
      <Title name="Créer un commentaire" />

      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <p>{"ici le post à commenter : "}</p>
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
            {/* {formik.errors && formik.touched && <FormError />} */}
          </div>
        </form>
      </div>
    </div>
  );
}
