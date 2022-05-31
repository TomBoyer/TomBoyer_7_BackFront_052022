import * as yup from "yup";

//def regex :
const pseudoRegex =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'.-]+$/;
const forbiddenCharacters = /[$<>;]/;

//def schema de signUp

const signupSchema = yup.object().shape({
  username: yup
    .string()
    .required("Champs Requis")
    .test(
      "forbiddenCharacters",
      "Caractère(s) interdit(s)",
      (value) => !forbiddenCharacters.test(value)
    )
    .trim()
    .noWhiteSpace()
    .matches(pseudoRegex, 'Le pseudo peut contenir maj, min, espaces')
    .min(2, "Le pseudo doit contenir au minimum 2 caractères")
    .max(15, "Le pseudo ne doit pas dépasser 15 caractères"),

  email: yup
    .string()
    .trim()
    .noWhiteSpace()
    .required("Champ Requis")
    .email("L'email n'est pas valide"),

  password: yup
    .string()
    .required("Champ Requis")
    .test(
      "forbiddenCharacters",
      "Caractère(s) interdit(s)",
      (value) => !forbiddenCharacters.test(value)
    )
    .trim()
    .noWhiteSpace()
    .min(8, `Veuillez mettre au minimum 6 caractères`)
    .matches(/[a-z]/, "Le mot de passe doit contenir au moins 1 minuscule")
    .matches(/[A-Z]/, "Le mot de passe doit contenir au moins 1 majuscule")
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins 1 chiffre"),
});

export default signupSchema;


// passwordSchema
//   .is()
//   .min(8)
//   .is()
//   .max(20)
//   .has()
//   .uppercase(1)
//   .has()
//   .lowercase(1)
//   .has()
//   .digits(1)
//   .has()
//   .not()
//   .spaces()
//   .is()
//   .not()
//   .oneOf(["Passw0rd", "Password123", "M0tdepasse"]);