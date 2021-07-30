import React, { useState, useRef } from "react";
import "./style.css";
import userImg from "./user.png";
import passwordImg from "./password.png";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

function Login(props) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    if (username === "" && password === "") {
      alert("Enter username or password!");
    } else if (username === "admin" && password === "admin") {
      localStorage.setItem("token", true);
      history.push("/");
    } else {
      Swal.fire({
        position: "center-center",
        icon: "error",
        title: "Login failed!",
        text: "Your email or password is incorrect.",
        showConfirmButton: false,
      });
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="container">
      <div className="login-page">
        <div className="login-title">
          <label>Login</label>
        </div>
        <form className="login-form">
          <div className="text-field">
            <label>
              <img src={userImg} alt="" />
              Username
            </label>
            <input
              type="text"
              className="input-text"
              required
              onChange={handleUsernameChange}
            />
          </div>
          <div className="text-field">
            <label>
              <img src={passwordImg} alt="" />
              Password
            </label>
            <input
              type="password"
              className="input-text"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className="button-login">
            <button type="submit" className="btn btn-success" onClick={login}>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
