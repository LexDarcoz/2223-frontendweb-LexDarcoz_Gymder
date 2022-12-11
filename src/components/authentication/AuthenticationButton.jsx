import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function AuthenticationButton() {
  const { isAuthenticated, user } = useAuth0();

  if (isAuthenticated) {
    const { name, picture, givenName } = user;
    return (
      <div className="d-flex flex-row align-items-center ">
        <div className="col justify-content-center d-flex">
          <img src={picture} alt={givenName} className="rounded w-50 " />
        </div>
        <div className="form-label">{name}</div>
        <div className="col w-50 form-label  ms-5 ">
          <LogoutButton />
        </div>
      </div>
    );
  }

  return <LoginButton prop={"btn btn-primary"} />;
}
