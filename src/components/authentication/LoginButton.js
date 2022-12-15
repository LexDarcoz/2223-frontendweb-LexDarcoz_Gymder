import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";
import Transl from "../../Translation/i18n/translate";
function LoginButton({ prop }) {
  const { loginWithRedirect } = useAuth0();
  const handleLogin = useCallback(async () => {
    loginWithRedirect();
  }, [loginWithRedirect]);
  return (
    <button type="button" className={prop} onClick={handleLogin}>
      {Transl("JoinToday")}
    </button>
  );
}

export default LoginButton;
