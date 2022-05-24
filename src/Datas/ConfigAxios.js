//config axios pour vérifier si logged ?
import axios from 'axios';

const baseUrl = "http://localhost:8080";
// export const axiosIsLogged = axios.create({
//   baseURL: baseUrl,
// });

export const getToken = () => {
  return JSON.parse(sessionStorage.getItem("token"))
}

export const axiosIsLogged = async (req) => {
  const token = await getToken({ req });
  // const csrfToken = await getCsrfToken({ req });
  return axios.create({
    baseURL: baseUrl,
    headers: {
      "Authorization": `Bearer ${token.user.token}`,
      // 'X-CSRF-Token': csrfToken,
      "Accept": 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
    },
  });
};