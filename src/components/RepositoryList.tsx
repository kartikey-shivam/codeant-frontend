import React from "react";
import {
  ArrowPathIcon,
  PlusIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import RepositoryItem from "./RepositoryItem";
import repoData from "../data/repositories.json";
import { Repository } from "../types";

function RepositoryList(): React.ReactElement {
  return (
    <div className="p-4 md:p-8 h-screen lg:ml-4">
      <div className="bg-white rounded-lg border border-gray-200 h-full flex flex-col">
        <div className="mt-4 px-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Repositories
            </h1>
            <p className="text-sm text-gray-500">
              {repoData.totalCount} total repositories
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-md hover:bg-gray-50">
              <ArrowPathIcon className="w-4 h-4" />
              <span>Refresh All</span>
            </button>

            <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
              <PlusIcon className="w-4 h-4" />
              <span>Add Repository</span>
            </button>
          </div>
        </div>

        <div className="mt-4 px-4 relative max-w-[300px] mb-4">
          <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Repositories"
            className="w-full pl-9 pr-4 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scrollbar-track-transparent">
          <div className="bg-white cursor-pointer rounded-lg">
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
