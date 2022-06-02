//libs
import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

//compo
import { Card } from "antd";

import "../../Styles/common/_card2.scss";

//datas + api schema
import { apiPost /* apiUser */ } from "../../Datas/DatasApi";
import {
  canDelete,
  getToken,
  /* getUser,
  isAdmin, */
} from "../../Storage/AuthenticationStorage";
import CommentCard from "../Comment/CommentCard";
import ProfilePicture from "../ProfilePicture";
import PostPicture from "./PostPicture";

export default function PostCard(props) {
  const { id, userId, User, createdAt, content, Comment, image } = props;
  const { username, imageUrl } = User;

  const handleDeletePost = () => {
    console.warn("je delete :", id);

    axios.delete(`${apiPost}/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  };

  // const canDelete = () => {
  //   if (userId === getUser()?.userId || getUser()?.isAdmin) {
  //     return true;
  //   }
  // };

  // console.log("le user postCar:",User);
  return (
    <Card
      bodyStyle={{ padding: "0.8rem" }}
      className="test"
      style={{
        background: "#e4e8ee",
        borderRadius: "20px",
        width: "70vw",
        margin: "1em .5em 1em .5em",
      }}
    >
      <div
        // container top
        style={{
          background: "#1b407a",
          borderRadius: "20px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0.5em",
          boxShadow: "2px 2px rgb(253, 45, 1)",
          gap: ".3em",
          margin: ".8em",
          position: "relative",
        }}
      >
        <ProfilePicture imageUrl={imageUrl} />

        <div
          // container username

          style={{
            borderRadius: "20px",
            textAlign: "center",
            padding: "1em",
            background: "#d9e2f2",
            boxShadow: "2px 2px rgb(94, 94, 94)",
          }}
        >
          {username}
        </div>
        <div
          // container date
          style={{
            borderRadius: "20px",
            textAlign: "center",
            padding: "1em",
            background: "#d9e2f2",
            boxShadow: "2px 2px rgb(94, 94, 94)",
          }}
        >
          {createdAt}
        </div>
      </div>
      <div
        // container content
        style={{
          background: "#1b407a",
          borderRadius: "20px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0.5em",
          boxShadow: "2px 2px rgb(253, 45, 1)",
          height: "auto",
          gap: ".3em",
          marginBottom: "4em",
          position: "relative",
        }}
      >
        <p
          // content
          style={{
            width: "45vw",
            padding: "0.8em",
            borderRadius: "20px",
            background: "#d9e2f2",
            boxShadow: "2px 2px rgb(94, 94, 94)",
            textAlign: "center",
          }}
        >
          {content}
        </p>

        {image && <PostPicture image={image} />}

        {canDelete(userId) && (
          // userId === getUser()?.userId && (

          <button onClick={handleDeletePost} className="btn btn-suppr">
            Suppr
          </button>
        )}

        {canDelete(userId) && (
          <NavLink className="btn btn-go-update " to={`/updatePost/${id}`}>
            Modif
          </NavLink>
        )}
      </div>

      {Comment.map((comment) => (
        <div key={`${id}${comment.id}`}>
          <CommentCard {...comment} />
        </div>
      ))}

      <NavLink className="btn btn-go-comment " to={`/createComment/${id}`}>
        Commentaire
      </NavLink>
    </Card>
  );
}
