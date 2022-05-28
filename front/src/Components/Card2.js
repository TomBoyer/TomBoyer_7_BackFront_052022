import React from "react";

export default function Card2 (
    {
        className,
        author,
        date,
        name,
        value,
      }
) {
  return (
    <div>
        <div className="card__container">
      <div class="container">
        <div className="container__top">
          <p className="author" name={name} value={value}></p>
          <p className="date" name={name} date={value}></p>
          
        </div>

        <div className="container__content">
          <p className="content" >ici le content</p>
        </div>

        <button type="submit" className="btn">
          Commenter
        </button>
      </div>
    </div>
    </div>
  );
}
