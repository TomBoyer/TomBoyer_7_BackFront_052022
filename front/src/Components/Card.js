import React from "react";

export default function Card (

) {
  return (
    <div className="card__container">
      <div class="container">
        <div className="container__top">
          <div className="author" >ici le nom de l'auteur</div>
          <div className="date" >ici la date + l'heure</div>
          
        </div>

        <div className="container__content">
          <div className="content" >ici le content</div>
        </div>

        <button type="submit" className="btn">
          Commenter
        </button>
      </div>
    </div>
  );
}
