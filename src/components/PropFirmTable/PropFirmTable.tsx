"use client";
import React, { useState } from "react";
import Image from "next/image";
import { PropFirm } from "@/types/propFirm";
import UpperNavigation from "./UpperNavigation";
import TableHeader from "./TableHeader";

const PlatformIcon = ({ platform }: { platform: string }) => {
  switch (platform.toLowerCase()) {
    case "mt4":
      return (
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/firms_platform_icons/icon_1.svg"}
            alt="platform"
            width={16}
            height={16}
            className="rounded-full"
          />
        </div>
      );
    case "mt5":
      return (
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/firms_platform_icons/icon_2.svg"}
            alt="platform"
            width={16}
            height={16}
            className="rounded-full"
          />
        </div>
      );
    case "ctrader":
      return (
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/firms_platform_icons/icon_3.svg"}
            alt="platform"
            width={16}
            height={16}
            className="rounded-full"
          />
        </div>
      );
    default:
      return (
        <div className="flex items-center justify-center">
          <Image
            src={"/assets/firms_platform_icons/icon_4.svg"}
            alt="platform"
            width={16}
            height={16}
            className="rounded-full"
          />
        </div>
      );
  }
};

// Define asset badge component
const AssetBadge = ({ type }: { type: string }) => (
  <span className="inline-block px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md mr-1 mb-1">
    {type}
  </span>
);

// Flag component
const Flag = ({ country }: { country: string }) => {
  const countryCode = country.toUpperCase();
  return (
    <div className="flex items-center">
      <span className="mr-1">
        {countryCode === "GB"
          ? "🇬🇧"
          : countryCode === "US"
          ? "🇺🇸"
          : countryCode === "IL"
          ? "🇮🇱"
          : countryCode === "VC"
          ? "🇻🇨"
          : countryCode === "VG"
          ? "🇻🇬"
          : countryCode === "AE"
          ? "🇦🇪"
          : countryCode === "CZ"
          ? "🇨🇿"
          : countryCode === "LC"
          ? "🇱🇨"
          : countryCode === "ZA"
          ? "🇿🇦"
          : "🏳️"}
      </span>
      <span>{countryCode}</span>
    </div>
  );
};

// Years in Operation component
const YearsInOperation = ({ years }: { years: number }) => (
  <div className="w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center text-white">
    <div className="text-center">
      <span className="text-lg font-bold">{years}</span>
    </div>
  </div>
);

// Sample data structure
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

  const toggleFavorite = (id: number) => {
    setFirms(
      firms.map((firm) =>
        firm.id === id ? { ...firm, favorite: !firm.favorite } : firm
      )
    );
  };

  return (
    <div className="w-full text-white px-8">
      {/* Filters */}
      <UpperNavigation />
      {/* Table Header */}
      <TableHeader />
      {/* Table Body */}
      {firms.map((firm) => (
        <div
          key={firm.id}
          className="grid grid-cols-12 gap-4 py-6 border-b border-gray-800 items-center"
        >
          {/* Firm and Logo */}
          <div className="col-span-3 flex items-center">
            <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center mr-4">
              {/* Placeholder for logo - in production use Image component */}
              <div className="text-lg font-bold">
                <Image src={firm.logo} alt={firm.name} width={30} height={30} />
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <h3 className="text-white font-medium">{firm.name}</h3>
                <button
                  onClick={() => toggleFavorite(firm.id)}
                  className="ml-2 text-pink-500"
                >
                  {firm.favorite ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      stroke="none"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  ) : (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                    </svg>
                  )}
                </button>
              </div>
              <div className="flex items-center text-pink-500 text-sm mt-1">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="none"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                <span className="ml-1">{firm.reviewCount}</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="col-span-1">
            <div className="w-10 h-10 rounded-full bg-gray-800 text-white flex items-center justify-center">
              <span className="font-bold">{firm.rating}</span>
            </div>
          </div>

          {/* Country */}
          <div className="col-span-1">
            <Flag country={firm.country} />
          </div>

          {/* Years in Operation */}
          <div className="col-span-1">
            <YearsInOperation years={firm.yearsInOperation} />
          </div>

          {/* Assets */}
          <div className="col-span-2 flex flex-wrap">
            {firm.assets.slice(0, 5).map((asset, index) => (
              <AssetBadge key={index} type={asset} />
            ))}
          </div>

          {/* Platforms */}
          <div className="col-span-1 flex space-x-1">
            {firm.platforms.map((platform, index) => (
              <PlatformIcon key={index} platform={platform} />
            ))}
          </div>

          {/* Max Allocation */}
          <div className="col-span-1">
            <div className="w-full bg-gray-800 rounded-full h-1.5 mb-1">
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-1.5 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
            <span className="text-white font-medium">{firm.maxAllocation}</span>
          </div>

          {/* Promo */}
          <div className="col-span-1">
            {firm.promoDiscount && (
              <div
                className={`inline-block px-3 py-1 rounded-md ${
                  firm.promoType ? "bg-purple-900" : "bg-pink-900"
                } text-white font-medium`}
              >
                {firm.promoDiscount}
              </div>
            )}
            {firm.promoType && (
              <div className="inline-block px-3 py-1 rounded-md bg-gray-800 text-white text-xs mt-1">
                {firm.promoType}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="col-span-1">
            <button className="px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-700 hover:bg-gray-700 transition">
              Firm
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
