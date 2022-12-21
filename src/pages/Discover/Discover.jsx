import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import AuthLanding from "../../components/authentication/AuthLanding";
import Transl from "../../Translation/i18n/translate";
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
            className="ms-0 my-3 btn btn-dark"
            onClick={() => handleClick("user")}
          >
            {Transl("Users")}
          </button>
          <button
            className="ms-auto my-3 btn btn-dark "
            onClick={() => handleClick("gym")}
          >
            {Transl("Gyms")}
          </button>
        </span>
        {isShownUserList ? <GymList /> : <UserList />}
      </div>
    );
  }
  return <AuthLanding />;
}
