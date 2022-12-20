import { useAuth0 } from "@auth0/auth0-react";
import AuthLanding from "../../components/authentication/AuthLanding";
import MyProfile from "../Profiles/CurrentUserProfile/MyProfile";

export default function Settings() {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return (
      <div
        className="container w-100 min-vh-100 h-100 d-flex flex-column"
        id="UnderNav"
      >
        <h1 className="ps-2">Settings</h1>
        <MyProfile />
      </div>
    );
  }
  return <AuthLanding />;
}
