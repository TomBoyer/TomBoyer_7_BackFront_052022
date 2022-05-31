//Libs
import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

//Pages
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
// import HomeTest from "./Pages/HomeTest";
import CreatePost from "./Pages/CreatePost";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import CreateComment from "./Pages/CreateComment";
// import PageTest from "./Pages/PageTest";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/hometest" element={<HomeTest />} /> */}
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/createComment/:postIdUrl" element={<CreateComment />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<NotFound />} />


        {/* <Route path="/pageTest" element={<PageTest />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
