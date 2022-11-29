import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function AuthenticationButton() {
  const { isAuthenticated, user } = useAuth0(); // 👈 1

  if (isAuthenticated) {
    // 👈 2
    const { name, picture, givenName } = user;
    return (
      <div className="d-flex flex-row align-items-center">
        <div className="col">
          <img src={picture} alt={givenName} className="rounded" />
        </div>
        <div className="col">{name}</div>
        <div className="col">
          <LogoutButton />
        </div>
      </div>
    );
  }

  return <LoginButton prop={"btn btn-primary"} />;
}
