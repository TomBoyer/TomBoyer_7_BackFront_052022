//libs
import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//compo
import Header from "../Components/Header";
import Title from "../Components/Title";
import { Col, Row } from "antd";

import "../Styles/common/_card2.scss";

//datas + api schema
import { apiPost } from "../Datas/DatasApi";
import { getToken, getUser } from "../Storage/AuthenticationStorage";
import BtnTop from "../Components/icons-logos/BtnTop";
import PostCard from "../Components/Post/PostCard";
import BtnRefreshPage from "../Components/icons-logos/BtnRefreshPage";

export default function Home(props) {
  const [posts, setPosts] = useState([]);

  // console.info("You are logged as :", getUser());

  //fetch la route post pour afficher allPost : vérifier si token
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
      {/* <h1>PAGE HOME</h1> */}
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

      {getUser() && <BtnRefreshPage />}

      <BtnTop />

      {posts.map((post) => (
        // console.log(post),
        // ESPACE POST

        <div key={post.id}>
          <Row>
            <Col offset={1}>
              <PostCard
                {...post}
                setPosts={(posts) => setPosts(posts)}
                posts={posts}
              />
            </Col>
          </Row>
        </div>
      ))}
    </div>
  );
}
