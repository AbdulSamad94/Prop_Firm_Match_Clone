"use client";
import React, { useState } from "react";
import { Search, Filter, Heart } from "lucide-react";
import { PiFireSimpleFill } from "react-icons/pi";
import { MdVerified } from "react-icons/md";

type TabOption = "Firms" | "Challenges" | "Offers" | "Reviews";

export default function UpperNavigation() {
  const [activeTab, setActiveTab] = useState<TabOption>("Firms");
  const [activeFilter, setActiveFilter] = useState<string | null>("Popular");

  const handleTabChange = (tab: TabOption) => {
    setActiveTab(tab);
  };

  const handleFilterChange = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter);
  };

  return (
    <div className="w-full  text-white inter">
      {/* Main Navigation Tabs */}
      <div className="flex justify-center py-4 space-x-4">
        {["Firms", "Challenges", "Offers", "Reviews"].map((tab) => (
          <button
            key={tab}
            className={`px-6 py-3 rounded-full ${
              activeTab === tab
                ? "bg-white text-black"
                : "bg-[#28282c] hover:bg-[#1b1a1b] text-white"
            } transition-colors text-md font-semibold`}
            onClick={() => handleTabChange(tab as TabOption)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filter and Search Bar */}
      <div className="flex items-center justify-between py-4">
        <div className="flex flex-wrap items-center space-x-3">
          {/* Filter Button */}
          <button className="flex items-center px-3 py-2 bg-[#28282c] rounded-full hover:bg-[#312839] text-sm mb-2 sm:mb-0">
            <Filter size={16} className="mr-2" />
            Filter
          </button>
          <div className="w-[1px] bg-gray-700 h-7"></div>
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
            disabled={activeFilter === "Popular"} // Disable hover effect when active
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
            className={`flex items-center px-3 py-2 rounded-full text-sm border  ${
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
            className={`flex items-center px-6 py-2 rounded-full text-sm border  ${
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
            className="bg-[#28282c] text-gray-300 text-sm rounded-full pl-10 pr-4 py-2 w-72 focus:outline-none ring-1 ring-gray-600 focus:ring-1 focus:ring-[#E94A96] focus:bg-[#312839]"
          />
        </div>
      </div>
    </div>
  );
}
