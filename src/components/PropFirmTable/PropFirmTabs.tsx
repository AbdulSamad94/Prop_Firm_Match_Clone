// PropFirmTabs.tsx
"use client";
import React from "react";
import { PropFirm } from "@/types/propFirm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FirmFilterBar } from "./FirmFilterBar";
import { FirmTable } from "./FirmTable";

type TabOption = "Firms" | "Challenges" | "Offers" | "Reviews";
type FilterOption = "Popular" | "Favorite" | "New" | "All";

interface PropFirmTabsProps {
  activeTab: TabOption;
  setActiveTab: (tab: TabOption) => void;
  activeFilter: FilterOption;
  handleFilterChange: (filter: FilterOption) => void;
  firms: PropFirm[];
  toggleFavorite: (id: number) => void;
}
export const PropFirmTabs: React.FC<PropFirmTabsProps> = ({
  activeTab,
  setActiveTab,
  activeFilter,
  handleFilterChange,
  firms,
  toggleFavorite,
}) => {
  console.log(activeTab);
  return (
    <Tabs
      defaultValue="Firms"
      className="w-full"
      onValueChange={(value) => setActiveTab(value as TabOption)}
    >
      {/* Main Navigation Tabs */}
      <div className="flex justify-center py-8">
        <TabsList className="gap-2 md:gap-4 p-1 rounded-full flex-wrap">
          {["Firms", "Challenges", "Offers", "Reviews"].map((tab, index) => (
            <TabsTrigger
              key={index}
              value={tab}
              className="px-2 py-2 md:px-4 md:py-3 rounded-full data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:shadow text-sm md:text-base font-semibold transition-colors bg-[#28282c] hover:bg-[#1c1a1d] duration-300"
            >
              {tab}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      <TabsContent value="Firms" className="mt-8">
        <FirmFilterBar
          activeFilter={activeFilter}
          handleFilterChange={handleFilterChange}
        />
        <FirmTable firms={firms} toggleFavorite={toggleFavorite} />
      </TabsContent>

      <TabsContent value="Challenges" className="mt-2">
        <div className="p-8 bg-[#1b1a1b] rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">Challenges Section</h3>
          <p className="text-gray-300">
            This section will display prop firm challenges.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="Offers" className="mt-2">
        <div className="p-8 bg-[#1b1a1b] rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">Offers Section</h3>
          <p className="text-gray-300">
            This section will display special offers from prop firms.
          </p>
        </div>
      </TabsContent>

      <TabsContent value="Reviews" className="mt-2">
        <div className="p-8 bg-[#1b1a1b] rounded-lg text-center">
          <h3 className="text-xl font-bold mb-3">Reviews Section</h3>
          <p className="text-gray-300">
            This section will display user reviews of prop firms.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  );
};
