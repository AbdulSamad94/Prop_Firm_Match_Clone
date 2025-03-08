"use client";
import React from "react";
import { Filter, Heart, Search } from "lucide-react";
import { PiFireSimpleFill } from "react-icons/pi";
import { MdVerified } from "react-icons/md";

type FilterOption = "Popular" | "Favorite" | "New" | "All";

interface FirmFilterBarProps {
  activeFilter: FilterOption;
  handleFilterChange: (filter: FilterOption) => void;
}

export const FirmFilterBar: React.FC<FirmFilterBarProps> = ({
  activeFilter,
  handleFilterChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between py-4 space-y-4 md:space-y-0">
      <div className="flex flex-wrap items-center gap-2">
        {/* Filter Button */}
        <button className="flex items-center px-3 py-2 bg-[#28282c] rounded-full hover:bg-[#312839] text-sm">
          <Filter size={16} className="mr-2" />
          Filter
        </button>
        <div className="hidden md:block w-[1px] bg-gray-700 h-7"></div>
        {/* Popular Filter */}
        <button
          className={`flex items-center px-6 py-2 rounded-full border text-sm 
          ${
            activeFilter === "Popular"
              ? "bg-[#0d0613] border-white"
              : "bg-[#28282c] border-[#28282c] hover:bg-[#312839]"
          }
          `}
          onClick={() => handleFilterChange("Popular")}
          disabled={activeFilter === "Popular"}
        >
          <PiFireSimpleFill
            size={16}
            className="mr-2"
            color={activeFilter === "Popular" ? "#E94A96" : "white"}
          />
          Popular
        </button>

        {/* Favorite Filter */}
        <button
          className={`flex items-center px-5 py-2 rounded-full text-sm border ${
            activeFilter === "Favorite"
              ? "bg-[#0d0613] border-white"
              : "bg-[#28282c] hover:bg-[#312839] border-[#28282c]"
          }`}
          onClick={() => handleFilterChange("Favorite")}
          disabled={activeFilter === "Favorite"}
        >
          <Heart
            size={16}
            className="mr-2"
            color={activeFilter === "Favorite" ? "#E94A96" : "white"}
            fill={activeFilter === "Favorite" ? "#E94A96" : "none"}
          />
          Favorite 0/5
        </button>

        {/* New Filter */}
        <button
          className={`flex items-center px-3 py-2 rounded-full text-sm border ${
            activeFilter === "New"
              ? "bg-[#0d0613] border-white"
              : "bg-[#28282c] hover:bg-[#312839] border-[#28282c]"
          }`}
          onClick={() => handleFilterChange("New")}
          disabled={activeFilter === "New"}
        >
          <MdVerified
            size={20}
            className="mr-2"
            color={activeFilter === "New" ? "#E94A96" : "white"}
          />
          New
        </button>

        {/* All Filter */}
        <button
          className={`flex items-center px-6 py-2 rounded-full text-sm border ${
            activeFilter === "All"
              ? "bg-[#0d0613] border-white"
              : "bg-[#28282c] hover:bg-[#312839] border-[#28282c]"
          }`}
          onClick={() => handleFilterChange("All")}
          disabled={activeFilter === "All"}
        >
          All
        </button>
      </div>

      {/* Search Box */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={16} className="text-gray-300" />
        </div>
        <input
          type="text"
          placeholder="Searching Popular Firms"
          className="bg-[#28282c] text-gray-300 text-sm rounded-full pl-10 pr-4 py-2 w-full md:w-72 focus:outline-none ring-1 ring-gray-600 focus:ring-1 focus:ring-[#E94A96] focus:bg-[#312839]"
        />
      </div>
    </div>
  );
};
