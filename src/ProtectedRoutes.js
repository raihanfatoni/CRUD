import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    // let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
            sessionStorage.getItem('token') ? (
                children
            ) : (
                <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            />
            )
        }
      />
    );
}

export default PrivateRoute;