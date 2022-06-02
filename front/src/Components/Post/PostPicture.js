import React from "react";

export default function PostPicture(props) {
  const { image } = props;
  return (
    <div className="post-picture__container">
      <img src={image} alt="post-picture" />
    </div>
  );
}
