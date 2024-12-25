import React, { JSX } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import RepositoryList from "./components/RepositoryList";
import AuthPage from "./components/AuthPage";
import { ThemeProvider } from "./context/ThemeContext";

interface PrivateRouteProps {
  children: React.ReactNode;
}

function App(): React.ReactElement {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const PrivateRoute = ({ children }: PrivateRouteProps): JSX.Element => {
    return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
  };

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route
            path="/login"
            element={
              !isAuthenticated ? (
                <AuthPage setIsAuthenticated={setIsAuthenticated} />
              ) : (
                <Navigate to="/dashboard" />
              )
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <div className="min-h-screen bg-gray-50">
                  {/* Mobile Header */}
                  <div className="md:hidden flex items-center justify-between p-4 border-b bg-white">
                    <div className="flex items-center gap-2">
                      <img
                        src="/logo_codeant.svg"
                        alt="CodeAnt AI"
                        className="w-8 h-8"
                      />
                      <span className="font-semibold">CodeAnt AI</span>
                    </div>
                    <button
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      className="p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex">
                    <div
                      className={`${
                        isSidebarOpen ? "block" : "hidden"
                      } md:block fixed md:static w-64 h-full z-50`}
                    >
                      <Sidebar
                        onClose={() => setIsSidebarOpen(false)}
                        setIsAuthenticated={setIsAuthenticated}
                      />
                    </div>
                    <div className="flex-1 w-full">
                      <RepositoryList />
                    </div>
                  </div>
                </div>
              </PrivateRoute>
            }
          />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
