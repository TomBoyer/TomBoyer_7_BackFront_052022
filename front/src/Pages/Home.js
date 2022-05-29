//libs
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//compo
import Header from "../Components/Header";
import Title from "../Components/Title";
// import Card from "../Components/Card";
import { Card, Col, Row } from "antd";
// import { Button, Card } from "antd";

import "../Styles/common/_card2.scss";

//datas + api schema
import { apiPost /* apiUser */ } from "../Datas/DatasApi";
import { getToken, getUser } from "../Storage/AuthenticationStorage";
import BtnTop from "../Components/icons-logos/BtnTop";

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  console.info("You are logged as :", getUser());

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
      <h1>PAGE HOME</h1>
      <Header />
      <Title name="Accueil" />
      {getUser() && (
        <h2>Bonjour {getUser().username} quoi de neuf à partager ?</h2>
      )}

      {getUser() && (
        <NavLink className="btn btn-go-post " to="/createPost">
          Publication
        </NavLink>
      )}

      <BtnTop />

      {posts.map((post) => (
        // console.log(post),
        //ESPACE POST

        <Row /* gutter={[32, 24]} */ /* justify="center" */>
          <Col offset={1}>
            <Card
              key={post.id}
              className="test"
              style={{
                background: "#e4e8ee",
                borderRadius: "20px",
                width: "70vw",
                margin: ".5em",
                // padding:".5rem",
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
                  key={post.userId}
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
                  height: "auto",
                  gap: ".3em",
                  marginBottom: "4em",
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
                  {post.content}
                </p>
              </div>

              {post.Comment.map((comment) => (
                //ESPACE COMMENT
                <Card
                bodyStyle={{ padding: "0.5rem"}}
                  key={comment.id}
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
                      margin: ".8em",
                    }}
                  >
                    <div
                      // container username
                      key={comment.userId}
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
                      {comment.content}
                    </p>
                  </div>
                </Card>
              ))}

              <NavLink
                className="btn btn-go-comment "
                to={`/createComment/${post.id}`}
              >
                Commentaire
              </NavLink>
            </Card>
          </Col>
        </Row>
      ))}
    </div>
  );
}
