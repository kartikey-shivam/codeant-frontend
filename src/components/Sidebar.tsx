import React, { useState } from "react";
import {
  CodeBracketIcon,
  CloudIcon,
  HomeIcon,
  Cog6ToothIcon,
  BookOpenIcon,
  XMarkIcon,
  ChevronDownIcon,
  PhoneIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import SidebarLink from "./SidebarLink";
import { AuthProps } from "../types";

interface SidebarProps extends AuthProps {
  onClose: () => void;
}

interface UserOption {
  id: string;
  name: string;
  type: "Personal" | "Team";
}

function Sidebar({
  setIsAuthenticated,
  onClose,
}: SidebarProps): React.ReactElement {
  const userOptions: UserOption[] = [
    { id: "1", name: "UtkarshDhairyaPanwar", type: "Personal" },
    { id: "2", name: "PersonalAccount", type: "Personal" },
    { id: "3", name: "CodeAnt-Team", type: "Team" },
    { id: "4", name: "Development-Team", type: "Team" },
    { id: "5", name: "Testing-Team", type: "Team" },
  ];

  const [selectedUser, setSelectedUser] = useState<UserOption>(userOptions[0]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="fixed inset-0 z-40 md:relative md:inset-auto">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity md:hidden"
        onClick={onClose}
      />

      {/* Sidebar content */}
      <div className="fixed inset-y-0 left-0 w-[280px] bg-white dark:bg-dark-card transform transition-transform md:translate-x-0 md:static md:h-screen">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-100 dark:border-dark-border">
          <div className="flex items-center gap-2">
            <img src="/logo_codeant.svg" alt="CodeAnt AI" className="w-8 h-8" />
            <span className="text-lg font-medium text-gray-900 dark:text-dark-text-primary">
              CodeAnt AI
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-500 hover:text-gray-700 dark:text-dark-text-secondary dark:hover:text-dark-text-primary md:hidden"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* User Dropdown */}
        <div className="p-2 relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between p-2 text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border rounded-md"
          >
            <span className="text-sm font-medium">{selectedUser.name}</span>
            <ChevronDownIcon className="w-5 h-5 text-gray-400 dark:text-dark-text-secondary" />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-2 right-2 mt-1 py-1 bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-md shadow-lg z-50">
              <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-dark-text-secondary">
                Personal Account
              </div>
              {userOptions
                .filter((option) => option.type === "Personal")
                .map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedUser(option);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm ${
                      selectedUser.id === option.id
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}

              <div className="px-3 py-2 text-xs font-medium text-gray-500 dark:text-dark-text-secondary border-t border-gray-100 dark:border-dark-border mt-1">
                Teams
              </div>
              {userOptions
                .filter((option) => option.type === "Team")
                .map((option) => (
                  <button
                    key={option.id}
                    onClick={() => {
                      setSelectedUser(option);
                      setIsDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-2 text-sm ${
                      selectedUser.id === option.id
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border"
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="px-2 py-3">
          <SidebarLink Icon={HomeIcon} text="Repositories" active />
          <SidebarLink Icon={CodeBracketIcon} text="AI Code Review" />
          <SidebarLink Icon={CloudIcon} text="Cloud Security" />
          <SidebarLink Icon={BookOpenIcon} text="How to Use" />
          <SidebarLink Icon={Cog6ToothIcon} text="Settings" />
        </nav>

        {/* Bottom Links */}
        <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-gray-100 dark:border-dark-border">
          <SidebarLink Icon={PhoneIcon} text="Support" />
          <SidebarLink
            Icon={ArrowRightOnRectangleIcon}
            text="Logout"
            onClick={handleLogout}
          />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
