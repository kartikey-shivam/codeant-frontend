import React from "react";
import { Repository } from "../types";

interface RepositoryItemProps {
  repository: Repository;
}

function RepositoryItem({
  repository,
}: RepositoryItemProps): React.ReactElement {
  const { name, visibility, language, size, updatedAt } = repository;

  const getLanguageColor = (lang: string): string => {
    const colors: { [key: string]: string } = {
      React: "bg-blue-500",
      Javascript: "bg-yellow-400",
      Python: "bg-blue-600",
      Swift: "bg-orange-500",
      Java: "bg-red-500",
      "HTML/CSS": "bg-purple-500",
      PHP: "bg-indigo-500",
    };
    return colors[lang] || "bg-gray-400";
  };

  return (
    <div className="px-6 py-4 hover:bg-gray-50 transition-colors border-b border-gray-100 last:border-0">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium text-gray-900 hover:text-blue-600 cursor-pointer">
              {name}
            </h3>
            <span
              className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                visibility === "Public"
                  ? "bg-blue-50 text-blue-600"
                  : "bg-gray-50 text-gray-600"
              }`}
            >
              {visibility}
            </span>
          </div>
          <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <span
                className={`w-2 h-2 rounded-full ${getLanguageColor(language)}`}
              />
              {language}
            </span>
            <span>{size}</span>
            <span>Updated {updatedAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryItem;
