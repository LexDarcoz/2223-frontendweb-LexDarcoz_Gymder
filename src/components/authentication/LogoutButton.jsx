import { useAuth0 } from "@auth0/auth0-react";
import Transl from "../../Translation/i18n/translate";

function LogoutButton() {
  const { logout } = useAuth0();
  function handleClick() {
    logout({
      returnTo: window.location.origin,
    });
  }

  return (
    <button
      type="button"
      data-cy="LogOut_Button"
      className="btn btn-danger"
      onClick={handleClick}
    >
      {Transl("LogOut")}
    </button>
  );
}

export default LogoutButton;
