import React from "react";
import "./style.css";
import logo from "../../loading.png"

function Loading(props) {
  return (
    <div className="loading-spinner">
      <img src={logo} className="loading-logo" alt="logo" />
    </div>
  );
}

export default Loading;
