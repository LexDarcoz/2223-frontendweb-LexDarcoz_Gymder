import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import AuthLanding from "../../components/authentication/AuthLanding";
import GymList from "./GymList";

import UserList from "./UserList";

export default function Discover() {
  const [isShownUserList, setIsShownUserList] = useState(false);

  function handleClick(prop) {
    if (prop === "user") {
      setIsShownUserList(false);
    }
    if (prop === "gym") {
      setIsShownUserList(true);
    }
  }
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div id="UnderNav" className="container w-100 min-vh-100 h-100">
        <span className="d-flex ">
          <button
            className="ms-0 btn btn-dark"
            onClick={() => handleClick("user")}
          >
            Users
          </button>
          <button
            className="ms-auto btn btn-dark "
            onClick={() => handleClick("gym")}
          >
            Gyms
          </button>
        </span>
        {isShownUserList ? <GymList /> : <UserList />}
      </div>
    );
  }
  return <AuthLanding />;
}
