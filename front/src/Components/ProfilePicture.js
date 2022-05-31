import React from "react";

export default function ProfilePicture(props) {
    const { imageUrl } = props
  return (
    <div className="profile-picure__container">
      <img src={imageUrl} alt="profile-pricture" />
    </div>
  );
}
