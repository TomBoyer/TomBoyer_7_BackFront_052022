import * as yup from "yup";

//def regex :
const pseudoRegex =
  /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\s'.-]+$/;
const forbiddenCharacters = /[$<>;]/;

//def schema de signUp

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .required("Champs Requis")
    .test(
      "forbiddenCharacters",
      "Caractère(s) interdit(s)",
      (value) => !forbiddenCharacters.test(value)
    )
    .trim()
    .matches(pseudoRegex, 'Le pseudo peut contenir maj, min, espaces')
    .min(2, "Le pseudo doit contenir au minimum 2 caractères")
    .max(15, "Le pseudo ne doit pas dépasser 15 caractères"),

  email: yup
    .string()
    .trim()
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
    .min(8, `Veuillez mettre au minimum 6 caractères`)
    .matches(/[a-z]/, "Le mot de passe doit contenir au moins 1 minuscule")
    .matches(/[A-Z]/, "Le mot de passe doit contenir au moins 1 majuscule")
    .matches(/[0-9]/, "Le mot de passe doit contenir au moins 1 chiffre"),
});

export default loginSchema;
