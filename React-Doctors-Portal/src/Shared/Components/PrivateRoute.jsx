import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../Hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { firebase } = useAuth();
  console.log(firebase);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !firebase.user.uid ? (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        ) : (
          children
        )
      }
    />
  );
};

export default PrivateRoute;
