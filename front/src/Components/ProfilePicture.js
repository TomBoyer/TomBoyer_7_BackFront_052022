import React from "react";

export default function ProfilePicture(props) {
  const { imageUrl } = props;
  return (
    <div className="profile-picture__container">
      <img src={imageUrl} alt="profile-pricture" className="img-profile-pic"/>
    </div>
  );
}
