// ui/AssetBadge.tsx
import React from "react";

interface AssetBadgeProps {
  type: string;
}

export const AssetBadge: React.FC<AssetBadgeProps> = ({ type }) => (
  <span className="inline-block px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md mr-1 mb-1">
    {type}
  </span>
);
