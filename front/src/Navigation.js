import React from "react";
import { Link } from "react-router-dom";
import "./css/navigation.css";
import { useNavigate } from "react-router-dom";
import { useLogin } from "./LoginContext";

const Navigation = () => {
  const navigate = useNavigate();
  const [login,action] = useLogin();
  



  const logoutHandler = () => {
    if (window.confirm("로그아웃 하시겠습니까?")) {
      localStorage.removeItem("token");
      action.doLogout()
      navigate("/");
    }
  };

  return (
    <div className="navigation">
      <div className="nav_home">
        <Link className="logo" to="/">
          Bartender_Y
        </Link>
      </div>
      {!login ? (
        <div className="user-core">
          <Link to="/login">login</Link>
          <Link to="/join">join</Link>
        </div>
      ) : (
        <div className="user-core" onClick={logoutHandler}>
          logout
        </div>
      )}
    </div>
  );
};

export default Navigation;
