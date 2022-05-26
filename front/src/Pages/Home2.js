//libs
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//compo
import Header from "../Components/Header";
import Title from "../Components/Title";
import {  Card } from "antd";
// import { Button, Card } from "antd";

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

      <div className="btn-home-container">
        <NavLink className="btn btn-go-post " to="/createPost">
          Créer une publication
        </NavLink>
      </div>

      <div className="form__card__container">
        {posts.map(
          (post) => (
            (
              <Card
                className="card__post"
                key={post.id}
                title={`Le ${post.createdAt} --
            auteur : 
            ${post.User.username}`}
                style={{ width: 500 }}
              >
                <p>{post.content}</p>

                <div className="">
                  <NavLink
                    className="btn btn-go-comment "
                    to={`/createComment/${post.id}`}
                  >
                    Commentaire
                  </NavLink>
                </div>

               
                {post.Comment.map((comment) => (
                  
                  <Card
                    className="card__comment"
                    key={comment.id}
                    title={`Le ${comment.createdAt} --
              auteur : ${comment.User.username}`}
                    style={{ width: 350 }}
                  >
                    <p>{comment.content}</p>
                  </Card>
                ))}
                {/* </div> */}
              </Card>
            )
          )
        )}
      </div>
    </div>
  );
}
