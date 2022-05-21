//stocker les données liées à l'API
//utiliser Axios pour requeter les infos liées à l'API

// export let apiUser = "";
// export let apiPost = "";
// export let apiComment = "";
// export let apiLogin = "";
// export let apiSignup = "";

export let apiUser = "http://localhost:3000/api/user";
export let apiPost = "http://localhost:3000/api/post";
export let apiComment = "http://localhost:3000/api/comment";
export let apiLogin = "http://localhost:3000/api/user/login";
export let apiSignup = "http://localhost:3000/api/user/signup/";

export const getHeaders = (token, option) => {
  if (option === "multipart") {
    return {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    };
  }

  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};
