//libs
import React, { /* useState */ } from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import axios from "axios";

//components
import Header from "../Components/Header";
import Title from "../Components/Title";

// import { ShowInput, HideInput } from "../Components/icons-logos/icons";
import Input from "../Components/Form/Input";
import InputPassword from "../Components/Form/InputPassword";
import FormError from "../Components/Form/FormError";

//dataApi + schema
import { apiLogin } from "../Datas/DatasApi";
// import loginSchema from "../Yup//LoginSchema";

export default function Login() {
  const VALID_EMAIL = /^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i;
  const VALID_PASSWORD =
    /^(?=.*[A-Z])(?=.*[a-z])(?=(.*\d){2,})(?=.*[!@#$%])[A-Za-z\d@$!%*#?&]{8,16}$/;

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
      axios
        .post(apiLogin, { email, password })
        .then((res) => {
          // console.log(res.data);
          sessionStorage.setItem("userId", res.data.userId);
          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("username", res.data.username);
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

    // sessionStorage.setItem("token", )

    // if (!formik.isValid || Object.values(formik.values).includes('')) {
    //   setShowAlert(true);
    // }
  };

  const navigate = useNavigate();
  return (
    <div>
      <div className="signup__container">
        <h1>Page de LOGIN</h1>

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
              {formik.errors && formik.touched && <FormError />}
            </div>
          </form>
        </div>
      </div>
    </div>
    // <div className="login__container">
    //   <h1>Page de LOGIN</h1>

    //   <Header />
    //   <Title name="Connexion" />

    //   <div className="form__container">
    //     <form
    //     // onSubmit={handleform}
    //     >
    //       <div className="label__container">
    //         <label htmlFor="Email">Email</label>
    //         <input
    //           required
    //           id="loginEmail"
    //           name="email"
    //           type="email"
    //           placeholder="email@email.fr"
    //         />
    //       </div>

    //       <div className="label__container">
    //         <label htmlFor="password">Mot de passe</label>
    //         <input
    //           required
    //           id="loginPwd"
    //           name="password"
    //           type={isHidden ? "password" : "text"}
    //           placeholder="ton super code secret"
    //         />

    //         <div className="password-toggle" onClick={passwordToggle}>
    //           {isHidden ? <HideInput /> : <ShowInput />}
    //         </div>

    //       </div>

    //       <p>{validation}</p>

    //       <div className="label__container">
    //         <button className="btn">Connection</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
}
