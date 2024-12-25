import React from "react";

interface RepositoryItemProps {
  repository: {
    name: string;
    visibility: "Public" | "Private";
    language: string;
    size: string;
    updatedAt: string;
  };
}

function RepositoryItem({
  repository,
}: RepositoryItemProps): React.ReactElement {
  const { name, visibility, language, size, updatedAt } = repository;

  return (
    <div className="p-4 bg-white rounded-lg border hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">{name}</h3>
            <span
              className={`px-2 py-1 text-xs ${
                visibility === "Public"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-800"
              } rounded-full`}
            >
              {visibility}
            </span>
          </div>
          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full" />
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
