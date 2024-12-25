import React from "react";
import { Repository } from "../types";

interface RepositoryItemProps {
  repository: Repository;
}

function RepositoryItem({
  repository,
}: RepositoryItemProps): React.ReactElement {
  return (
    <div className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-dark-border cursor-pointer">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-medium text-gray-900 dark:text-dark-text-primary">
              {repository.name}
            </h3>
            <span className="px-2 py-0.5 text-xs font-medium text-gray-600 dark:text-dark-text-secondary bg-gray-100 dark:bg-dark-border rounded-full">
              {repository.visibility}
            </span>
          </div>
          <div className="flex items-center gap-3 mt-1">
            <div className="flex items-center gap-1">
              <span
                className={`w-2 h-2 rounded-full ${getLanguageColor(
                  repository.language
                )}`}
              />
              <span className="text-sm text-gray-600 dark:text-dark-text-secondary">
                {repository.language}
              </span>
            </div>
            <span className="text-sm text-gray-600 dark:text-dark-text-secondary">
              {repository.size} KB
            </span>
            <span className="text-sm text-gray-600 dark:text-dark-text-secondary">
              Updated {repository.updatedAt}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function getLanguageColor(language: string): string {
  const colors: { [key: string]: string } = {
    JavaScript: "bg-yellow-400",
    TypeScript: "bg-blue-500",
    Python: "bg-blue-600",
    Java: "bg-red-500",
    Swift: "bg-orange-500",
    "HTML/CSS": "bg-purple-500",
    PHP: "bg-indigo-500",
    React: "bg-cyan-400",
  };
  return colors[language] || "bg-gray-400";
}

export default RepositoryItem;
