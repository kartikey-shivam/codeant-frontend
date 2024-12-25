import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { AuthProps } from "../types";
import { KeyIcon } from "@heroicons/react/24/outline";
import { useTheme } from "../context/ThemeContext";

function AuthPage({ setIsAuthenticated }: AuthProps): React.ReactElement {
  const [selectedOption, setSelectedOption] = useState<"SAAS" | "Self Hosted">(
    "SAAS"
  );
  const navigate = useNavigate();
  const { isDarkMode, toggleTheme } = useTheme();

  const handleLogin = (method: string): void => {
    console.log(`Logging in with ${method}`);
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-bg p-4">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 text-gray-600 dark:text-dark-text-primary bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg hover:bg-gray-50 dark:hover:bg-dark-border transition-colors shadow-sm"
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <SunIcon className="w-5 h-5" />
        ) : (
          <MoonIcon className="w-5 h-5" />
        )}
      </button>

      {/* Background Logo */}
      <div className="hidden lg:block absolute left-0 bottom-0 opacity-20 dark:opacity-10">
        <img src="/logo_codeant.svg" alt="" className="w-48" />
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12">
        {/* Left Section - Stats */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="relative">
            {/* Stats Card */}
            <div className="relative -mt-20">
              <div className="bg-light-card dark:bg-dark-card rounded-[24px] shadow-card dark:shadow-card-dark p-4 py-6 max-w-md">
                <div className="flex items-center mr-1 mb-6 border-solid border-b-[1px] border-black">
                  <div className=" rounded-lg p-1 ">
                    <img
                      src="/logo_codeant.svg"
                      alt="CodeAnt AI"
                      className="w-7 h-7"
                    />
                  </div>
                  <span className="text-md font-medium text-light-text-primary dark:text-dark-text-primary">
                    AI to Detect & Autofix Bad Code
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-12">
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-1">
                      30+
                    </div>
                    <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                      Language Support
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-1">
                      10K+
                    </div>
                    <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                      Developers
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-semibold text-light-text-primary dark:text-dark-text-primary mb-1">
                      100K+
                    </div>
                    <div className="text-xs text-light-text-secondary dark:text-dark-text-secondary">
                      Hours Saved
                    </div>
                  </div>
                </div>
              </div>

              {/* Issues Fixed Card */}
              <div className="bg-white dark:bg-dark-card rounded-[15px] shadow-card dark:shadow-card-dark p-4 w-[250px] absolute -bottom-32 right-8">
                <div className="flex flex-col items-center">
                  <div className="w-full flex justify-between">
                    <div className="relative w-10 h-10 mb-2">
                      <div className=" flex justify-center item-center p-2 absolute inset-0 rounded-full bg-[#9D90FA40]">
                        <img src="/pichart.svg" />
                      </div>
                    </div>
                    <div className=" items-center justify-between">
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                        <span className="text-sm text-blue-600 font-bold">
                          14%
                        </span>
                      </div>
                      <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        This week
                      </span>
                    </div>
                  </div>
                  {/* Pie Chart Circle */}

                  {/* Content */}
                  <div className=" w-full">
                    <div className="text-base text-light-text-primary dark:text-dark-text-primary font-medium mb-1">
                      Issues Fixed
                    </div>
                    <div className="text-[25px] leading-6 font-bold text-light-text-primary dark:text-dark-text-primary mb-3">
                      500K+
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Auth Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          {/* Logo and Title */}
          <div className="w-full p-8 bg-light-card dark:bg-dark-card rounded-[10px] shadow-card dark:shadow-card-dark">
            <div className="mb-8 w-full flex justify-center items-center gap-2">
              <img
                src="/logo_codeant.svg"
                alt="CodeAnt AI"
                className="w-8 h-8"
              />
              <span className="text-xl font-semibold text-gray-900 dark:text-dark-text-primary">
                CodeAnt AI
              </span>
            </div>

            <h1 className="w-full text-center text-2xl font-bold text-gray-900 dark:text-dark-text-primary mb-8">
              Welcome to CodeAnt AI
            </h1>

            {/* Auth Container */}
            <div className="w-full max-w-md">
              {/* Auth Options Toggle */}
              <div className="flex p-1 mb-6 bg-gray-50 dark:bg-dark-border rounded-lg">
                {["SAAS", "Self Hosted"].map((option) => (
                  <button
                    key={option}
                    onClick={() =>
                      setSelectedOption(option as "SAAS" | "Self Hosted")
                    }
                    className={`flex-1 py-2 text-sm font-medium rounded-md transition-colors ${
                      selectedOption === option
                        ? "bg-blue-600 text-white"
                        : "text-gray-500 dark:text-dark-text-secondary hover:text-gray-700 dark:hover:text-dark-text-primary"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>

              {/* Auth Buttons */}
              <div className="space-y-3">
                {selectedOption === "SAAS" ? (
                  <SaasAuthButtons handleLogin={handleLogin} />
                ) : (
                  <SelfHostedAuthButtons handleLogin={handleLogin} />
                )}
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <p className="mt-4 text-center text-sm text-gray-500 dark:text-dark-text-secondary">
            By signing up you agree to the{" "}
            <a
              href="#"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

// Helper Components
const StatItem = ({ number, label }: { number: string; label: string }) => (
  <div className="text-center">
    <div className="text-2xl font-bold text-gray-900 dark:text-dark-text-primary mb-1">
      {number}
    </div>
    <div className="text-sm text-gray-500 dark:text-dark-text-secondary">
      {label}
    </div>
  </div>
);

const SaasAuthButtons = ({
  handleLogin,
}: {
  handleLogin: (method: string) => void;
}) => (
  <>
    <button
      onClick={() => handleLogin("github")}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-sm font-medium text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border transition-colors"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
      Sign in with Github
    </button>

    <button
      onClick={() => handleLogin("bitbucket")}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-sm font-medium text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border transition-colors"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#2684FF">
        <path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891L.778 1.213zM14.52 15.53H9.522L8.17 8.466h7.561l-1.211 7.064z" />
      </svg>
      Sign in with Bitbucket
    </button>

    <button
      onClick={() => handleLogin("azure")}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-sm font-medium text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border transition-colors"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0078D4">
        <path d="M23.174 3.468L14.931 1.23a.36.36 0 00-.407.19L8.676 11.476l-5.895-4.277a.36.36 0 00-.424.011L.249 8.675a.36.36 0 00.023.585l6.112 4.444-6.112 4.444a.36.36 0 00-.023.585l2.108 1.465a.36.36 0 00.424.011l5.895-4.277 5.848 10.056a.36.36 0 00.407.19l8.243-2.238a.36.36 0 00.253-.392L21.976 13l1.451-9.546a.36.36 0 00-.253-.392z" />
      </svg>
      Sign in with Azure Devops
    </button>

    <button
      onClick={() => handleLogin("gitlab")}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-sm font-medium text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border transition-colors"
    >
      <svg className="w-5 h-5" fill="#FC6D26" viewBox="0 0 16 16">
        <path d="M15.97 9.058l-.895-2.756L13.3.842a.477.477 0 00-.907 0l-1.775 5.46H5.383L3.608.842a.477.477 0 00-.907 0L.924 6.302l-.895 2.756a.95.95 0 00.346 1.062l7.625 5.538 7.625-5.538a.95.95 0 00.346-1.062" />
      </svg>
      Sign in with GitLab
    </button>
  </>
);

const SelfHostedAuthButtons = ({
  handleLogin,
}: {
  handleLogin: (method: string) => void;
}) => (
  <>
    <button
      onClick={() => handleLogin("gitlab-self-hosted")}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-sm font-medium text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border transition-colors"
    >
      <svg className="w-5 h-5" fill="#FC6D26" viewBox="0 0 16 16">
        <path d="M15.97 9.058l-.895-2.756L13.3.842a.477.477 0 00-.907 0l-1.775 5.46H5.383L3.608.842a.477.477 0 00-.907 0L.924 6.302l-.895 2.756a.95.95 0 00.346 1.062l7.625 5.538 7.625-5.538a.95.95 0 00.346-1.062" />
      </svg>
      Self Hosted GitLab
    </button>

    <button
      onClick={() => handleLogin("sso")}
      className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-lg text-sm font-medium text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border transition-colors"
    >
      <KeyIcon className="w-5 h-5" />
      Sign in with SSO
    </button>
  </>
);

export default AuthPage;
