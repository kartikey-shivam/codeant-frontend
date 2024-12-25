import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import RepositoryItem from "./RepositoryItem";

interface Repository {
  name: string;
  visibility: "Public" | "Private";
  language: string;
  size: string;
  updatedAt: string;
}

function RepositoryList(): React.ReactElement {
  const repositories: Repository[] = [
    {
      name: "design-system",
      visibility: "Public",
      language: "React",
      size: "7320 KB",
      updatedAt: "1 day ago",
    },
    {
      name: "codeant-ci-app",
      visibility: "Private",
      language: "Javascript",
      size: "5871 KB",
      updatedAt: "2 days ago",
    },
    // Add more repositories as needed
  ];

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold">Repositories</h1>
          <p className="text-sm text-gray-500">33 total repositories</p>
        </div>
        <div className="flex gap-3">
          <button className="p-2 md:px-3 md:py-2 border rounded-lg hover:bg-gray-50">
            <ArrowPathIcon className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex-1 md:flex-none px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Add Repository
          </button>
        </div>
      </div>

      <div className="mb-6">
        <input
          type="text"
          placeholder="Search Repositories"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-4">
        {repositories.map((repo) => (
          <RepositoryItem key={repo.name} repository={repo} />
        ))}
      </div>
    </div>
  );
}

export default RepositoryList;
