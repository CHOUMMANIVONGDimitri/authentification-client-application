import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import ErrorPage from "./pages/public/ErrorPage";
import UsersPage from "./pages/private/UsersPage";
import NavBar from "./components/Navbar";
import FooterSection from "./components/FooterSection";

function App() {
  const [isConnected, setIsConnected] = useState(null);

  if (
    isConnected !== null &&
    isConnected === false &&
    document.cookie.length > 0
  ) {
    document.location.reload();
  }

  useEffect(() => {
    if (isConnected !== null && isConnected === false) {
      console.log(document.cookie.length);
      document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }, [isConnected]);

  return (
    <>
      <header>
        <NavBar isConnected={isConnected} setIsConnected={setIsConnected} />
      </header>
      <main className="my-24">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Navigate to="/register" />} />
          <Route
            path="/login"
            element={
              <LoginPage
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/*" element={<ErrorPage />} />
          {/* Private */}
          <Route
            path="/users"
            element={<UsersPage setIsConnected={setIsConnected} />}
          />
        </Routes>
      </main>
      <footer className="my-12">
        <FooterSection />
      </footer>
    </>
  );
}

export default App;
