import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthProps } from "../types";
import { KeyIcon } from "@heroicons/react/24/outline";

function AuthPage({ setIsAuthenticated }: AuthProps): React.ReactElement {
  const [selectedOption, setSelectedOption] = useState<"SAAS" | "Self Hosted">(
    "SAAS"
  );
  const navigate = useNavigate();

  const handleLogin = (method: string): void => {
    console.log(`Logging in with ${method}`);
    setIsAuthenticated(true);
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-light-bg dark:bg-dark-bg p-4">
       <div className="hidden lg:flex absolute -left-0 bottom-0 opacity-40">
              <img src="/logo_codeant.svg" alt="" className="w-40" />
            </div>
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section - Stats (visible on lg screens) */}
        <div className="hidden lg:block lg:w-1/2">
          <div className="relative ">
           
           

            {/* Stats Card */}
            <div className="relative -mt-20">
              <div className="bg-light-card dark:bg-dark-card rounded-[32px] shadow-card dark:shadow-card-dark p-4 py-6 max-w-md">
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
              <div className="bg-white dark:bg-dark-card rounded-[32px] shadow-card dark:shadow-card-dark p-4 w-[250px] absolute -bottom-32 right-8">
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

        <div className="w-full lg:w-1/2 p-8 flex-col justify-center items-center">
          {/* Logo and Title (only visible on mobile) */}
          <div className="w-full p-8 bg-light-card dark:bg-dark-card rounded-[10px] shadow-card dark:shadow-card-dark">
                  <div className="text-center lg:text-left">
                    <div className="flex justify-center lg:justify-start items-center gap-2">
                      <img
                        src="/logo_codeant.svg"
                        alt="CodeAnt AI"
                        className="h-8 w-auto"
                      />
                      <span className="text-xl">CodeAnt AI</span>
                    </div>
                    <h2 className="mt-6 text-2xl font-semibold text-gray-900">
                      Welcome to CodeAnt AI
                    </h2>
                  </div>

                  {/* Toggle Buttons */}
                  <div className="mt-8 flex rounded-lg p-1 bg-gray-100">
                    <button
                      onClick={() => setSelectedOption("SAAS")}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        selectedOption === "SAAS"
                          ? "bg-blue-600 text-white"
                          : "text-gray-500"
                      }`}
                    >
                      SAAS
                    </button>
                    <button
                      onClick={() => setSelectedOption("Self Hosted")}
                      className={`flex-1 py-2.5 text-sm font-medium rounded-md transition-colors ${
                        selectedOption === "Self Hosted"
                          ? "bg-blue-600 text-white"
                          : "text-gray-500"
                      }`}
                    >
                      Self Hosted
                    </button>
                  </div>

                  {/* Sign in Options */}
                  <div className="mt-8 space-y-3">
                    {selectedOption === "SAAS" ? (
                      // SAAS Options
                      <>
                        <button
                          onClick={() => handleLogin("github")}
                          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <svg
                            className="w-5 h-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Sign in with Github
                        </button>

                        <button
                          onClick={() => handleLogin("bitbucket")}
                          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="#2684FF" viewBox="0 0 16 16">
                            <path d="M.778 1.211a.768.768 0 00-.768.892l2.424 13.104c.058.302.278.54.571.619l5.951 1.606c.313.084.645-.02.854-.267l5.385-6.324a.768.768 0 00-.084-1.084L1.445 1.33a.768.768 0 00-.667-.119zm7.504 13.661l-2.138-6.191 3.847 3.955-1.709 2.236zm-4.01-6.89l1.94 5.613-4.285-1.156L.71 2.086l3.562 5.896zM7.86 8.594L3.815 2.271l10.429 7.359L7.86 8.594z" />
                          </svg>
                          Sign in with Bitbucket
                        </button>

                        <button
                          onClick={() => handleLogin("azure")}
                          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="#0078D4" viewBox="0 0 23 23">
                            <path d="M21.44 18.425L16.647 2.15a1.298 1.298 0 00-2.445 0l-4.792 16.275a.519.519 0 00.66.641l5.23-1.84a1.298 1.298 0 01.86 0l5.23 1.84a.519.519 0 00.66-.641zM11.647 12.575L8.152 3.383a1.298 1.298 0 00-2.445 0L.915 19.658a.519.519 0 00.66.641l5.23-1.84a1.298 1.298 0 01.86 0l3.982 1.4a.519.519 0 00.66-.641l-.66-6.643z" />
                          </svg>
                          Sign in with Azure Devops
                        </button>

                        <button
                          onClick={() => handleLogin("gitlab")}
                          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="#FC6D26" viewBox="0 0 16 16">
                            <path d="M15.97 9.058l-.895-2.756L13.3.842a.477.477 0 00-.907 0l-1.775 5.46H5.383L3.608.842a.477.477 0 00-.907 0L.924 6.302l-.895 2.756a.95.95 0 00.346 1.062l7.625 5.538 7.625-5.538a.95.95 0 00.346-1.062" />
                          </svg>
                          Sign in with GitLab
                        </button>
                      </>
                    ) : (
                      // Self Hosted Options
                      <>
                        <button
                          onClick={() => handleLogin("gitlab-self-hosted")}
                          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <svg className="w-5 h-5" fill="#FC6D26" viewBox="0 0 16 16">
                            <path d="M15.97 9.058l-.895-2.756L13.3.842a.477.477 0 00-.907 0l-1.775 5.46H5.383L3.608.842a.477.477 0 00-.907 0L.924 6.302l-.895 2.756a.95.95 0 00.346 1.062l7.625 5.538 7.625-5.538a.95.95 0 00.346-1.062" />
                          </svg>
                          Self Hosted GitLab
                        </button>

                        <button
                          onClick={() => handleLogin("sso")}
                          className="w-full flex items-center justify-center gap-3 px-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                          <KeyIcon className="w-5 h-5" />
                          Sign in with SSO
                        </button>
                      </>
                    )}
                  </div>

          </div>
                  {/* Privacy Policy */}
                  <p className="w-full mt-2 text-center text-sm text-gray-500">
                    By signing up you agree to the{" "}
                    <a href="#" className="text-black-600 font-bold hover:underline">
                      Privacy Policy
                    </a>
                  </p>
          
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
