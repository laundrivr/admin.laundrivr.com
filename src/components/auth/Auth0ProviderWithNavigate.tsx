import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  callbackUrl,
  clientId,
  domain,
} from "../../utils/auth0/auth0-configuration";

export const Auth0ProviderWithNavigate = ({ children }: any) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: any) => {
    navigate(appState?.returnTo || "/dashboard");
  };

  if (!(domain && clientId && callbackUrl)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: callbackUrl,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};
