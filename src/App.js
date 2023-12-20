import { Routes, Route, redirect } from "react-router-dom";
import Home from "./Pages/Home";
import { MsalProvider } from "@azure/msal-react";
import msalInstance from "./Components/MSAL/instance";
import Login from "./Pages/Login";
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  const { accessToken } = JSON.parse(localStorage.getItem("MSAL")) || "";
  const isAuthenticated = accessToken ? true : false;

  return (
    <MsalProvider instance={msalInstance}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
      </Routes>
    </MsalProvider>
  );
}

export default App;
