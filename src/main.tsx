import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { Auth0ProviderWithNavigate } from "./components/auth/Auth0ProviderWithNavigate";
import Layout from "./components/layout/Layout";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Auth0ProviderWithNavigate>
          <Layout>
            <App />
          </Layout>
        </Auth0ProviderWithNavigate>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
