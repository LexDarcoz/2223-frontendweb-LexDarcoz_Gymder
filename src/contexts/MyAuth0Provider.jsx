import { Auth0Provider } from "@auth0/auth0-react";

function MyAuth0Provider({ children }) {
  // const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  // const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  // const audience = process.env.REACT_APP_AUTH0_API_AUDIENCE;
  const clientId = "XVvP508pzVwPWzt8IMbVfLBXxwdmKw0l";
  const domain = "dev-cz55lu1xuwjphous.us.auth0.com";
  const audience = "https://Gymder-API/";
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
