"use client";
import React, { useState } from "react";
import { PropFirm } from "@/types/propFirm";
import { PropFirmTabs } from "./PropFirmTabs";

type TabOption = "Firms" | "Challenges" | "Offers" | "Reviews";
type FilterOption = "Popular" | "Favorite" | "New" | "All";

const sampleFirms: PropFirm[] = [
  {
    id: 1,
    name: "The5ers",
    logo: "/assets/firms_logos/the5ers.svg",
    rating: 4.8,
    reviewCount: 13719,
    favorite: false,
    country: "IL",
    yearsInOperation: 9,
    assets: [
      "Crypto",
      "Energy",
      "FX",
      "Indices",
      "Metals",
      "Other Commodities",
    ],
    platforms: ["MT4", "MT5"],
    maxAllocation: "$615K",
    promoDiscount: "5% OFF",
    promoType: "",
    isFeatured: true,
  },
  {
    id: 2,
    name: "Alpha Capital",
    logo: "/assets/firms_logos/alpha_capital.svg",
    rating: 4.4,
    reviewCount: 3049,
    favorite: false,
    country: "GB",
    yearsInOperation: 3,
    assets: ["FX", "Indices", "Metals", "Other Commodities"],
    platforms: ["MT4", "MT5", "cTrader"],
    maxAllocation: "$400K",
    promoDiscount: "20% OFF",
    promoType: "MATCH",
    isFeatured: false,
  },
  {
    id: 3,
    name: "Blueberry Funding",
    logo: "/assets/firms_logos/blueberry.svg",
    rating: 3.8,
    reviewCount: 1138,
    favorite: false,
    country: "VC",
    yearsInOperation: 0,
    assets: ["Crypto", "FX", "Indices", "Metals", "Other Commodities"],
    platforms: ["MT4", "MT5", "cTrader"],
    maxAllocation: "$400K",
    promoDiscount: "25% OFF",
    promoType: "MATCH25",
    isFeatured: false,
  },
];

export default function PropFirmTable() {
  const [firms, setFirms] = useState<PropFirm[]>(sampleFirms);
  const [activeTab, setActiveTab] = useState<TabOption>("Firms");
  const [activeFilter, setActiveFilter] = useState<FilterOption>("Popular");

  const toggleFavorite = (id: number) => {
    setFirms(
      firms.map((firm) =>
        firm.id === id ? { ...firm, favorite: !firm.favorite } : firm
      )
    );
  };

  const handleFilterChange = (filter: FilterOption) => {
    setActiveFilter(filter);
    console.log(activeTab);
  };

  return (
    <div className="w-full text-white px-4 md:px-8">
      <PropFirmTabs
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        activeFilter={activeFilter}
        handleFilterChange={handleFilterChange}
        firms={firms}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
}
