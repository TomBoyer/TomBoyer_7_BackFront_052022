import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { apiPost } from "../Datas/DatasApi";
import { useNavigate, useParams } from "react-router-dom";
import InputTextArea from "../Components/Form/InputTextArea";
// import FormError from "../Components/Form/FormError";
import Header from "../Components/Header";
import Title from "../Components/Title";
import { getToken, getUser } from "../Storage/AuthenticationStorage";
import Input from "../Components/Form/Input";

export default function UpdatePost(props) {
  let { postIdUrl } = useParams();

  const [initialValues, setInitialValues] = useState({
    content: "",
    image: "",
  });

  useEffect(() => {
    axios
      .get(`${apiPost}/${postIdUrl}`, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        // console.log("la res", res.data);
        setInitialValues({
          content: res.data.content,
          image: res.data.image,
        });
      });
  }, [postIdUrl]);

  const navigate = useNavigate();

  const validate = yup.object({
    content: yup.string().required("Contenu requis"),
  });

  // console.log("la value", initialValues);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: validate,
    onSubmit: ({ content, image }) => {
      console.log(content, image, getUser().userId);
      axios({
        method: "PUT",
        url: `${apiPost}/${postIdUrl}`,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        data: { content, userId: parseInt(getUser().userId), image },
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
      {/* <h1>PAGE UPDATE POST</h1> */}

      <Header />
      <Title name="Modifier ta publication" />

      <div className="form__container">
        <form onSubmit={handleSubmit}>
          <InputTextArea
            name="content"
            id="content"
            label="Un truc à modifier ? : "
            handleChange={handleChange}
            placeholder="ton super message"
            value={formik.values.content}
            error={formik.errors.content}
          />

          <Input
            name="image"
            label="poste une image : "
            type="url"
            handleChange={handleChange}
            placeholder="htts://example.jpg"
            value={formik.values.image}
            error={formik.errors.image}
          />

          <div className="label__container">
            <button type="submit" className="btn">
              Modifier
            </button>
            {/* {formik.errors && formik.touched && <FormError />} */}
          </div>
        </form>
      </div>
    </div>
  );
}
