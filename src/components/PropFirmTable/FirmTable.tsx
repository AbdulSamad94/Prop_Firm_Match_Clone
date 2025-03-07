// FirmTable.tsx
"use client";
import React from "react";
import Image from "next/image";
import { PropFirm } from "@/types/propFirm";
import { PlatformIcon } from "./ui/PlatformIcon";
import { AssetBadge } from "./ui/AssetBadge";
import { Flag } from "./ui/Flag";
import { YearsInOperation } from "./ui/YearsInOperation";

interface FirmTableProps {
  firms: PropFirm[];
  toggleFavorite: (id: number) => void;
}

export const FirmTable: React.FC<FirmTableProps> = ({
  firms,
  toggleFavorite,
}) => {
  return (
    <div className="overflow-x-auto pb-4">
      <div className="min-w-[1000px]">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 py-4 text-gray-300 text-xs items-center">
          <div className="col-span-3 flex items-center justify-start">
            <span>FIRM</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <div className="col-span-1 flex items-center border-r border-l border-gray-600 justify-center">
            <span>RANK</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <div className="col-span-1 flex items-center border-r border-gray-600 justify-center">
            <span>COUNTRY</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <div className="col-span-1 flex items-center border-r border-gray-600 justify-center px-3">
            <span>YEARS</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <div className="col-span-2 border-r border-gray-600 flex items-center justify-center">
            <span>ASSETS</span>
          </div>
          <div className="col-span-1 border-r border-gray-600 flex items-center justify-center">
            <span>PLATFORMS</span>
          </div>
          <div className="col-span-1 border-r border-gray-600 flex items-center justify-center">
            <span>MAX ALLOCATIONS</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="ml-1"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
          <div className="col-span-1 border-r border-gray-600 flex items-center justify-center">
            <span>PROMO</span>
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <span>ACTIONS</span>
          </div>
        </div>

        {/* Table Body */}
        {firms.map((firm) => (
          <div
            key={firm.id}
            className="grid grid-cols-12 gap-4 py-6 border-t border-gray-800 items-center"
          >
            {/* Firm and Logo */}
            <div className="col-span-3 flex items-center">
              <div className="w-12 h-12 rounded-md overflow-hidden bg-gray-800 flex items-center justify-center mr-4">
                <Image src={firm.logo} alt={firm.name} width={30} height={30} />
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
                  <span className="ml-1">{firm.rating}</span>
                  <span className="ml-1 text-gray-400">
                    ({firm.reviewCount})
                  </span>
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
            <div className="col-span-1 flex">
              <Flag country={firm.country} />
            </div>

            {/* Years in Operation */}
            <div className="col-span-1">
              <YearsInOperation years={firm.yearsInOperation} />
            </div>

            {/* Assets */}
            <div className="col-span-2 flex flex-wrap">
              {firm.assets.slice(0, 4).map((asset, index) => (
                <AssetBadge key={index} type={asset} />
              ))}
              {firm.assets.length > 4 && (
                <span className="text-xs text-gray-400 ml-1">
                  +{firm.assets.length - 4}
                </span>
              )}
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
              <span className="text-white font-medium">
                {firm.maxAllocation}
              </span>
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
    </div>
  );
};
