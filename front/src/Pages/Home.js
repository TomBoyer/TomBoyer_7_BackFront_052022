//libs
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//compo
import Header from "../Components/Header";
import Title from "../Components/Title";
// import Card from "../Components/Card";
import { Card, Col, Row } from "antd";
// import { Button, Card } from "antd";

import "../Styles/common/_card2.scss";

//datas + api schema
import { /* axiosIsLogged, */ getToken } from "../Datas/ConfigAxios";
import { apiPost /* apiUser */ } from "../Datas/DatasApi";

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(apiPost, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>PAGE HOME 2</h1>
      <Header />
      <Title name="Accueil" />

      {/* <div className="btn-home-container"> */}
        <NavLink className="btn btn-go-post " to="/createPost">
          Créer une publication
        </NavLink>
      {/* </div> */}

      {posts.map((post) => (
        //ESPACE POST
        <Row /* gutter={[32, 24]} */ justify="center">
          <Card
            style={{
              background: "#e4e8ee",
              borderRadius: "20px",
              width: "55vw",
              margin: ".5em",
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
              }}
            >
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
                {post.User.username}
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
                {post.createdAt}
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
                padding: "0.5em",
                boxShadow: "2px 2px rgb(253, 45, 1)",
                height:"auto",
                gap: ".3em",
              }}
            >
              <p
              // content
                style={{
                  maxWidth: "35vw",
                  padding: "0.8em",
                  borderRadius: "20px",
                  background: "#d9e2f2",
                  boxShadow: "2px 2px rgb(94, 94, 94)",
                }}
              >
                {post.content}
              </p>
            </div>


            {/* <div className="container__btn__post"> */}
              <NavLink
                className="btn btn-go-comment "
                to={`/createComment/${post.id}`}
              >
                Commentaire
              </NavLink>
            {/* </div> */}


            {post.Comment.map((comment) => (
              //ESPACE COMMENT
            <Card
            style={{
              background: "#96b1da",
              borderRadius: "20px",
              width: "35vw",
              margin: ".5em",
              boxShadow: "2px 2px rgb(58, 64, 90)",
            }}>
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
                margin: ".8em",
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
                {comment.User.username}
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
                {comment.createdAt}
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
                height:"auto",
                gap: ".3em",
              }}
            >
              <p
              // content
                style={{
                  maxWidth: "35vw",
                  padding: "0.8em",
                  borderRadius: "20px",
                  background: "#d9e2f2",
                  boxShadow: "2px 2px rgb(58, 64, 90)",
                  
                }}
              >
                {comment.content}
              </p>
            </div>
            </Card>
          ))}

          </Card>
          
        </Row>
      ))}
    </div>
  );
}
