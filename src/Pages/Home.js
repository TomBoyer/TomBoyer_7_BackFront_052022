import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Title from "../Components/Title";
import { Card } from "antd";

import { axiosIsLogged, getToken } from "../Datas/ConfigAxios";
import { apiPost, apiUser } from "../Datas/DatasApi";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  // console.log(axiosIsLogged);
  useEffect(() => {
    axios
      .get(apiPost, {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      })
      .then((res) => {
        // console.log(res.data);

        /* Plus besoin */
        // let usernames = [];
        // res.data.forEach((post) => {
        //   axios
        //     .get(`${apiUser}/${post.userId}`, {
        //       headers: {
        //         Authorization: `Bearer ${getToken()}`,
        //       },
        //     })

        //     .then((result) => {
        //       // console.log("usernames :" + usernames);
        //       // console.log(result.data.username);
        //       usernames.push(result.data.username);
        //       // post.username = result.data.username;
        //     })
        // });
        /* Plus besoin FIN */

        // console.log(res.data);
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

      {posts.map((post) => (
        // console.log(post.Comment),

        <Card
          key={post.id}
          title={`${post.createdAt} - ${post.User.username}`}
          style={{ width: 500 }}
        >
          <p>{post.content}</p>

          {post.Comment.map((comment) => (
            <Card
              key={comment.id}
              title={`${comment.createdAt} - ${comment.User.username}`}
              style={{ width: 350 }}
            >
              <p>{comment.content}</p>
            </Card>
          ))}
        </Card>
      ))}
    </div>
  );
}
