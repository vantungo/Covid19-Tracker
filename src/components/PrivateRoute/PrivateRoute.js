import React, { Component, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import { checkToken } from "../../utils/localStorage";

function PrivateRoute({ component: Component, ...rest }) {
  return (
    <div>
      <Route
        {...rest}
        render={(props) => {
          return checkToken() ? (
              <Component {...props} />
          ) : (
            <Redirect
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          );
        }}
      />
    </div>
  );
}

export default PrivateRoute;
