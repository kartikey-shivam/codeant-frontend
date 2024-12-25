import React, { useState } from "react";
import SidebarLink from "./SidebarLink";
import {
  HomeIcon,
  CodeBracketIcon,
  CloudIcon,
  DocumentTextIcon,
  CogIcon,
  PhoneIcon,
  ArrowLeftOnRectangleIcon,
  XMarkIcon,
  ChevronDownIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/outline";
import { SidebarProps, NavLink, BottomLink } from "../types";
import { useTheme } from "../context/ThemeContext";

function Sidebar({
  onClose,
  setIsAuthenticated,
}: SidebarProps): React.ReactElement {
  const { theme, toggleTheme } = useTheme();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { icon: HomeIcon, text: "Repositories" },
    { icon: CodeBracketIcon, text: "AI Code Review" },
    { icon: CloudIcon, text: "Cloud Security" },
    { icon: DocumentTextIcon, text: "How to Use" },
    { icon: CogIcon, text: "Settings" },
  ];

  const handleLogout = (): void => {
    setIsAuthenticated(false);
  };

  const bottomLinks: BottomLink[] = [
    { icon: PhoneIcon, text: "Support" },
    {
      icon: ArrowLeftOnRectangleIcon,
      text: "Logout",
      onClick: handleLogout,
    },
  ];

  return (
    <div className="h-full bg-light-card dark:bg-dark-card">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
        <div className="flex items-center gap-2">
          <img src="/logo_codeant.svg" alt="CodeAnt AI" className="w-8 h-8" />
          <span className="font-semibold text-light-text-primary dark:text-dark-text-primary">
            CodeAnt AI
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "dark" ? (
              <SunIcon className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            ) : (
              <MoonIcon className="w-5 h-5 text-gray-500" />
            )}
          </button>
          <button onClick={onClose} className="md:hidden">
            <XMarkIcon className="w-6 h-6 text-light-text-primary dark:text-dark-text-primary" />
          </button>
        </div>
      </div>

      {/* User Dropdown */}
      <div className="px-3 py-2">
        <button
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          className="w-full flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
        >
          <span className="text-sm">UtkarshDhairyaPanwar</span>
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="mt-2 px-3">
        {navLinks.map((link) => (
          <SidebarLink
            key={link.text}
            Icon={link.icon}
            text={link.text}
            active={link.text === "Repositories"}
          />
        ))}
      </nav>

      {/* Bottom Links */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="px-3 py-2">
          {bottomLinks.map((link) => (
            <SidebarLink
              key={link.text}
              Icon={link.icon}
              text={link.text}
              onClick={link.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
