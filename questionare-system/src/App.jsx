import { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./pages/Login";
import MainLayout from "./layout/MainLayout";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import ProjectShowCase from "./pages/ProjectShowCase";

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MainLayout/>}>
        <Route index element={<Dashboard />}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
        <Route path="projects" element={<ProjectShowCase/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
