//libs
import React from "react";

//compo
import Header from "../Components/Header";
import Title from "../Components/Title";

import UsernameForm from "../Components/ProfileForm";
import PwdForm from "../Components/PwdForm";

export default function Profile() {

  return (
    <div>
      <Header />
      <Title name="Ton Profil" />

      <UsernameForm/>
      <PwdForm/>
    </div>
  );
}
