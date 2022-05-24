import axios from "axios";
import React, { useEffect } from "react";
import Header from "../Components/Header";
import Title from "../Components/Title";

import { axiosIsLogged } from "../Datas/ConfigAxios";
import { apiPost } from "../Datas/DatasApi";

export default function Home() {
  // console.log(axiosIsLogged);
  useEffect(() => {
    axios
      .get(apiPost)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>PAGE HOME</h1>
      <Header />
      <Title name="Accueil" />
    </div>
  );
}
