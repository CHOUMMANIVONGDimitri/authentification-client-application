import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import LoginPage from "./pages/public/LoginPage";
import RegisterPage from "./pages/public/RegisterPage";
import ErrorPage from "./pages/public/ErrorPage";
import UsersPage from "./pages/private/UsersPage";
import NavBar from "./components/Navbar";
import FooterSection from "./components/FooterSection";
import HeaderSection from "./components/HeaderSection";

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
    if (isConnected === false) {
      console.log(document.cookie.length);
      document.cookie = `token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
  }, [isConnected]);

  return (
    <div className="dark:bg-gray-900 h-screen flex flex-col justify-between">
      <header className="fixed top-0 right-0 left-0">
        <NavBar isConnected={isConnected} setIsConnected={setIsConnected} />
      </header>
      <main className="flex flex-col justify-around mx-auto py-28 w-screen h-fit dark:bg-gray-900">
        <Routes>
          {/* Public */}
          <Route path="/" element={<Navigate to="/register" />} />
          <Route
            path="/login"
            element={
              <>
                <HeaderSection />
                <LoginPage
                  isConnected={isConnected}
                  setIsConnected={setIsConnected}
                />
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <HeaderSection />
                <RegisterPage />{" "}
              </>
            }
          />
          <Route path="/*" element={<ErrorPage />} />
          {/* Private */}
          <Route
            path="/users"
            element={
              <UsersPage
                isConnected={isConnected}
                setIsConnected={setIsConnected}
              />
            }
          />
        </Routes>
      </main>
      <footer>
        <FooterSection />
      </footer>
    </div>
  );
}

export default App;
