import "./css/App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./LoginContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [login, action] = useLogin();

  const loginHandler = () => {
    fetch(process.env.REACT_APP_BACKEND_SERVER_IP + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.token) {
          localStorage.setItem("token", res.token);
          action.doLogin();
          navigate("/");
        } else {
          alert("로그인 에러, code status");
        }
      });
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <div className="login-input">
        <input
          type="text"
          name="useremail"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className="login-btn" onClick={loginHandler}>
        Login
      </button>
    </div>
  );
};

export default Login;
