//libs
import React, {  useState } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

//components
import Header from "../Components/Header";
import Title from "../Components/Title";


import Input from "../Components/Form/Input";
import InputPassword from "../Components/Form/InputPassword";
import FormError from "../Components/Form/FormError";

//dataApi + schema
import { apiLogin } from "../Datas/DatasApi";
import LoaderWrapper from "../Components/Loader/LoaderWrapper";
import { setToken, setUser } from "../Storage/AuthenticationStorage";


export default function Login() {
  const VALID_EMAIL = /^[\w_.-]+@[\w-]+\.[a-z]{2,4}$/i;
  const VALID_PASSWORD =
    /^(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){2,})(?=.*[!@#$%])[A-Za-z\d@$!%*#?&]{8,16}$/;

  const navigate = useNavigate();
  const [hasErrors, sethasErrors] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = yup.object({
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
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: ({ email, password }) => {
      // console.log (email, password);

      sethasErrors(false);
      setLoading(true);

      axios
        .post(apiLogin, { email, password })
        .then((res) => {
          console.log(res.data);
          setToken(res.data.token);
          setUser({ userId: res.data.userId, username: res.data.username, imageUrl: res.data.imageUrl, isAdmin:res.data.isAdmin });

          console.log("verif admin", res.data.isAdmin);

          sethasErrors(false);
          setLoading(false);

          navigate("/home");
        })
        .catch((error) => {
          console.error(error);
          sethasErrors(true);
          setLoading(false);
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
      <LoaderWrapper displayLoader={loading}>
        <div className="signup__container">
          {/* <h1>Page de LOGIN</h1> */}

          <Header />
          <Title name="Connexion" />

          <div className="form__container">
            <form onSubmit={handleSubmit}>
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
                  Connexion
                </button>

                {hasErrors && <p>this is a backend error </p>}
                {!formik.isValid && <FormError />}
              </div>
            </form>
          </div>
        </div>
      </LoaderWrapper>
    </div>
  );
}
