import React from "react";
import {
  ArrowPathIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline";
import RepositoryItem from "./RepositoryItem";
import repoData from "../data/repositories.json";
import { Repository } from "../types";
import { useTheme } from "../context/ThemeContext";

function RepositoryList(): React.ReactElement {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div className="p-4 md:p-8 h-screen lg:ml-4">
      <div className="bg-white dark:bg-dark-card rounded-lg border border-gray-200 dark:border-dark-border shadow-[0_1px_3px_0_rgb(0,0,0,0.1),0_1px_2px_-1px_rgb(0,0,0,0.1)] dark:shadow-[0_1px_3px_0_rgb(0,0,0,0.3),0_1px_2px_-1px_rgb(0,0,0,0.2)] h-full flex flex-col">
        <div className="mt-4 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-dark-text-primary">
              Repositories
            </h1>
            <p className="text-sm text-gray-500 dark:text-dark-text-secondary">
              {repoData.totalCount} total repositories
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 dark:text-dark-text-primary bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-md hover:bg-gray-50 dark:hover:bg-dark-border">
              <ArrowPathIcon className="w-4 h-4" />
              <span>Refresh All</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <PlusIcon className="w-4 h-4" />
              <span>Add Repository</span>
            </button>

            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 px-2 py-1.5 text-sm text-gray-600 dark:text-dark-text-primary bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-md hover:bg-gray-50 dark:hover:bg-dark-border"
            >
              {isDarkMode ? (
                <SunIcon className="w-4 h-4" />
              ) : (
                <MoonIcon className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        <div className="mt-4 px-4 relative max-w-[300px] mb-4">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 dark:text-dark-text-secondary" />
          </div>
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full pl-9 pr-4 py-1.5 text-sm text-gray-600 dark:text-dark-text-primary bg-white dark:bg-dark-card border border-gray-200 dark:border-dark-border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-400 dark:focus:border-blue-400 dark:placeholder-dark-text-secondary"
          />
        </div>

        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-dark-border hover:scrollbar-thumb-gray-400 dark:hover:scrollbar-thumb-dark-text-secondary scrollbar-track-transparent flex-1">
          <div className="divide-y divide-gray-200 dark:divide-dark-border">
            {repoData.repositories.map((repo) => (
              <RepositoryItem key={repo.name} repository={repo as Repository} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RepositoryList;
