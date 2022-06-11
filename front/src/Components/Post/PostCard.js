//libs
import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

//compo
import { Card } from "antd";
import "../../Styles/common/_card2.scss";

//datas + api schema
import { apiPost } from "../../Datas/DatasApi";
import { canUpdateDelete, getToken } from "../../Storage/AuthenticationStorage";
import CommentCard from "../Comment/CommentCard";
import ProfilePicture from "../ProfilePicture";
import PostPicture from "./PostPicture";
import { DeleteIcon, EditIcon } from "../icons-logos/icons";
import PostLikeUp from "../Like/LikeUp";

export default function PostCard(props) {
  const { id, userId, User, createdAt, content, Comment, image } = props;
  const { username, imageUrl } = User;

  const [comments, setComments] = useState(Comment);

  const handleDeletePost = () => {
    console.warn("je delete :", id);

    axios.delete(`${apiPost}/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    let newPosts = props.posts.filter((post) => post.id !== id);
    props.setPosts(newPosts);
  };

  return (
    <Card
      bodyStyle={{ padding: "0.8rem" }}
      className="test"
      style={{
        background: "#e4e8ee",
        borderRadius: "20px",
        width: "70vw",
        margin: "1em .5em 1em .5em",
        border: "1px solid #3a405a",
        boxShadow: "2px 2px rgb(58, 64, 90)",
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

        {canUpdateDelete(userId, getToken()) && (
          <button
            onClick={handleDeletePost}
            className="btn btn-suppr"
            aria-label="Supprimer le post"
          >
            {/* Suppr */}
            <div name="lien vers supprimer le post">
              <DeleteIcon />
            </div>
          </button>
        )}

        {canUpdateDelete(userId, getToken()) && (
          <NavLink
            className="btn btn-go-update "
            to={`/updatePost/${id}`}
            name="link update post"
          >
            {/* Modif */}
            <button aria-label="lien vers modifier le post">
              <EditIcon />
            </button>
          </NavLink>
        )}

        <div className="btn btn-go-like" name="like le post">
          <PostLikeUp />
        </div>
      </div>

      {comments.map((comment) => (
        <div key={`${id}${comment.id}`}>
          <CommentCard
            {...comment}
            setComments={(comments) => {
              setComments(comments);
            }}
            comments={comments}
          />
        </div>
      ))}

      <NavLink className="btn btn-go-comment " to={`/createComment/${id}`}>
        Commentaire
      </NavLink>
    </Card>
  );
}
