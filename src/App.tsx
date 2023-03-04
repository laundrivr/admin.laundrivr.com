import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import UsersPage from "./pages/users/UsersPage";
import CallbackPage from "./pages/callback/CallbackPage";
import { useAuth0 } from "@auth0/auth0-react";
import { AuthenticationGuard } from "./components/auth/AuthenticationGuard";
import FourOhFourPage from "./pages/404/FourOhFourPage";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <CallbackPage />;
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* Protected */}
      <Route
        path="/dashboard"
        element={<AuthenticationGuard component={DashboardPage} />}
      />
      <Route
        path="/users"
        element={<AuthenticationGuard component={UsersPage} />}
      />
      <Route path="*" element={<FourOhFourPage />} />
      <Route path="/callback" element={<CallbackPage />} />
    </Routes>
  );
}

export default App;
