import { render } from "@testing-library/react";
import { useState } from "react";
import GymList from "./GymList";

import UserList from "./UserList";

export default function Discover() {
  const [isShownGymList, setIsShownGymList] = useState(false);
  const [isShownUserList, setIsShownUserList] = useState(false);

  function handleClick(prop) {
    if (prop === "user") {
      setIsShownUserList(true);
      setIsShownGymList(false);
    }
    if (prop === "gym") {
      setIsShownGymList(true);
      setIsShownUserList(false);
    }
  }

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
      {isShownUserList ? <UserList /> : <GymList />}
    </div>
  );
}
