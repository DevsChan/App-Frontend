import React, { useState } from "react";

const filters = [
  "All",
  "Web Development",
  "DSA",
  "Cyber Security",
  "Game Mods",
  "App Dev",
  "Game Dev",
];

const ThreadsHeader = ({ activeFilter, setActiveFilter }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white mb-3">
        Popular threads
      </h2>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`px-4 py-1 rounded-full text-sm whitespace-nowrap transition
              ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ThreadsHeader;
