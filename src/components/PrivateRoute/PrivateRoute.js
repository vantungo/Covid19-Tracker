import React, { Component } from "react";
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
            <MainLayout>
              <Component {...props} />
            </MainLayout>
          ) : (
            <Redirect
              to={{ pathname: "/news", state: { from: props.location } }}
            />
          );
        }}
      />
    </div>
  );
}

export default PrivateRoute;
