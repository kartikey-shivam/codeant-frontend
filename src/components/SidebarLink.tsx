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
      className={`flex items-center gap-3 px-2 py-2 text-sm rounded-lg
        ${
          active
            ? "bg-blue-50 text-blue-600 font-medium"
            : "text-gray-600 hover:bg-gray-50"
        }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm">{text}</span>
    </a>
  );
}

export default SidebarLink;
