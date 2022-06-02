//enregistrer le token
export const setToken = (token) => {
  sessionStorage.setItem("token", token);
};

//récup token dans le sessions storage
export const getToken = () => {
  return sessionStorage.getItem("token");
};

//récup id user + username dans le sessiosn storage
export const setUser = ({ userId, username, imageUrl, isAdmin }) => {
  // console.log(userId, username, imageUrl);
  sessionStorage.setItem(
    "user",
    JSON.stringify({ userId, username, imageUrl, isAdmin })
  );
};

//vérifier que le session storage possede bien un user pour dire qu'il est login : sinon return null
export const getUser = () => {
  const user = sessionStorage.getItem("user");

  if (!user) {
    return null;
  }

  // console.info("you are logged as : ", user)
  return JSON.parse(user);
};

//vérifier si peut suppr
export const canDelete = (userId) => {
  if (userId === getUser()?.userId || getUser()?.isAdmin) {
    return true;
  }
};

//vider session storage pour déco
export const logout = () => {
  sessionStorage.clear();
};
