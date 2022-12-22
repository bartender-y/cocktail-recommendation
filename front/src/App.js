import "./css/App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";
import Join from "./Join";
import Home from "./Home";
import Navigation from "./Navigation";
import { LoginProvider } from "./LoginContext";

export default function App() {
  return (
    <LoginProvider>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/join" element={<Join />} />
        </Routes>
      </div>
    </LoginProvider>
  );
}
