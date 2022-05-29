//libs
import React, { /* useState */ useEffect, useState } from "react";


//compo
import Header from "../Components/Header";
import Title from "../Components/Title";


import UsernameForm from "../Components/UsernameForm";
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
