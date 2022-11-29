import { useAuth0 } from "@auth0/auth0-react";
import { useCallback } from "react";

function LoginButton({ prop }) {
  const { loginWithRedirect } = useAuth0();

  const handleLogin = useCallback(async () => {
    loginWithRedirect();
  }, [loginWithRedirect]);

  return (
    <button type="button" className={prop} onClick={handleLogin}>
      Join today!
    </button>
  );
}

export default LoginButton;
