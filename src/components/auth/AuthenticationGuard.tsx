import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import CallbackPage from "../../pages/callback/CallbackPage";

export const AuthenticationGuard = ({ component }: any) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <CallbackPage />,
  });

  return <Component />;
};
