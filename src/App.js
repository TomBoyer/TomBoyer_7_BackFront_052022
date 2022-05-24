//Libs
import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

//Pages
import Signup2 from "./Pages/Signup2";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup2 />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile/:id" element={<Profile />} />

        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
