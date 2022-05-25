//stocker les données liées à l'API
//utiliser Axios pour requeter les infos liées à l'API

const baseUrl = "http://localhost:8080";

export let apiUser = baseUrl + "/api/user";
export let apiPost = baseUrl + "/api/post";
export let apiComment = baseUrl + "/api/comment";
export let apiLogin = baseUrl + "/api/user/login";
export let apiSignup = baseUrl + "/api/user/signup/";

// export const getHeaders = (token, option) => {
//   if (option === "multipart") {
//     return {
//       headers: {
//         Authorization: `Bearer ${token}`,
//         "Content-Type": "multipart/form-data",
//       },
//     };
//   }

//   return {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// };

