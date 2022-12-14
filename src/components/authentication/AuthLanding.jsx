import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Error from "../tools/Error";
import LoginButton from "./LoginButton";

export default function AuthLanding() {
  const { error, isAuthenticated, isLoading } = useAuth0();

  if (error) {
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Login failed</h1>
          <p>
            Sorry, we were unable to sign you in, the error below might be
            useful.
          </p>
          <Error error={error} />
          <LoginButton />
        </div>
      </div>
    </div>;
  }

  if (!isLoading && isAuthenticated) {
    return <Navigate to="/" />;
  }

  if (!isLoading && !isAuthenticated) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>Login required</h1>
            <p>You need to login to access this page.</p>
            <LoginButton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Signing in</h1>
          <p>Please wait while we sign you in!</p>
        </div>
      </div>
    </div>
  );
}
