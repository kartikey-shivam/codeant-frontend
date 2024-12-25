import React from "react";
import { SidebarLinkProps } from "../types";

function SidebarLink({
  Icon,
  text,
  active,
  onClick,
}: SidebarLinkProps): React.ReactElement {
  return (
    <a
      href="#"
      onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-lg transition-colors
        ${
          active
            ? "bg-blue-600 text-white font-medium"
            : "text-gray-600 hover:bg-gray-50"
        }`}
    >
      <Icon className="w-5 h-5" />
      <span>{text}</span>
    </a>
  );
}

export default SidebarLink;
