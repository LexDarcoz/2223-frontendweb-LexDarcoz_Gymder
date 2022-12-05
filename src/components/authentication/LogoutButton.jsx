import { useAuth0 } from "@auth0/auth0-react";
import Transl from "../../Translation/i18n/translate";

function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button
      type="button"
      className="btn btn-danger"
      onClick={() =>
        logout({
          returnTo: window.location.origin,
        })
      }
    >
      {Transl("LogOut")}
    </button>
  );
}

export default LogoutButton;
