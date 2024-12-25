import React from "react";

interface SidebarLinkProps {
  Icon: React.ElementType;
  text: string;
  active?: boolean;
  onClick?: () => void;
}

function SidebarLink({
  Icon,
  text,
  active,
  onClick,
}: SidebarLinkProps): React.ReactElement {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
        active
          ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
          : "text-gray-700 dark:text-dark-text-primary hover:bg-gray-50 dark:hover:bg-dark-border"
      }`}
    >
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </button>
  );
}

export default SidebarLink;
