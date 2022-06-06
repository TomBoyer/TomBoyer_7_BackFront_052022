//libs
import axios from "axios";
import React from "react";

//compo
import { Card } from "antd";

import "../../Styles/common/_card2.scss";

//datas + api schema
import { apiPost /* apiUser */ } from "../../Datas/DatasApi";
import { canDelete, getToken } from "../../Storage/AuthenticationStorage";

import { DeleteIcon } from "../icons-logos/icons";

export default function CommentCard(props) {
  const { id, userId, User, createdAt, content } = props;
  const { username } = User;

  const handleDeleteComment = () => {
    console.warn("je delete :", id);

    axios.delete(`${apiPost}/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  };
  return (
    <Card
      bodyStyle={{ padding: "0.5rem" }}
      style={{
        background: "#96b1da",
        borderRadius: "20px",
        width: "90%",
        margin: ".5em 0 3rem 0",
        boxShadow: "2px 2px rgb(58, 64, 90)",
      }}
    >
      <div
        // container top
        style={{
          background: "#598ada",
          borderRadius: "20px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          padding: "0.5em",
          boxShadow: "2px 2px rgb(58, 64, 90)",
          gap: ".3em",
          margin: ".8em 0 .8em 0",
        }}
      >
        <div
          // container username

          style={{
            borderRadius: "20px",
            textAlign: "center",
            padding: "1em",
            background: "#d9e2f2",
            boxShadow: "2px 2px rgb(58, 64, 90)",
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
            boxShadow: "2px 2px rgb(58, 64, 90)",
          }}
        >
          {createdAt}
        </div>
      </div>

      <div
        // container content
        style={{
          background: "#598ada",
          borderRadius: "20px",
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "0.5em",
          boxShadow: "2px 2px rgb(58, 64, 90)",
          height: "auto",
          // gap: ".3em",
        }}
      >
        <p
          // content
          style={{
            width: "95%",
            padding: "0.8em",
            borderRadius: "20px",
            background: "#d9e2f2",
            boxShadow: "2px 2px rgb(58, 64, 90)",
            textAlign: "center",
          }}
        >
          {content}
        </p>
        {canDelete(userId) && (
          // userId === getUser()?.userId && (
          <button onClick={handleDeleteComment} className="btn btn-suppr">
            <div>
              <DeleteIcon />
            </div>
          </button>
        )}
      </div>
    </Card>
  );
}
