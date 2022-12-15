import { Auth0Provider } from "@auth0/auth0-react";

function MyAuth0Provider({ children }) {
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  const audience = process.env.REACT_APP_AUTH0_API_AUDIENCE;

  return (
    <Auth0Provider
      domain={domain}
      audience={audience}
      clientId={clientId}
      redirectUri={`${window.location.origin}`} // 👈
      cacheLocation="localstorage"
      useRefreshTokens
    >
      {children}
    </Auth0Provider>
  );
}

export default MyAuth0Provider;
