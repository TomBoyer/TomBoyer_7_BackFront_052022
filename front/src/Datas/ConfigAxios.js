//config axios pour vérifier si logged ?
import axios from "axios";

const baseUrl = "http://localhost:8080";
// export const axiosIsLogged = axios.create({
//   baseURL: baseUrl,
// });

export const getToken = () => {
  return sessionStorage.getItem("token");
};

export const getUserId = () => {
  return sessionStorage.getItem("userId");
};

export const getUsername = () => {
  return sessionStorage.getItem("username");
};

export const axiosIsLogged =  () => {
  return axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: `Bearer ${getToken()}`,
      // Accept: "application/vnd.api+json",
      // "Content-Type": "application/vnd.api+json",
    },
  });
};
