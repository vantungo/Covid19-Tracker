import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import { checkToken } from "../../utils/localStorage";

function AuthRoute({ component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return !checkToken() ? (
            <Component {...props} />
          ) : (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }}
      />
    </div>
  );
}

export default AuthRoute;
