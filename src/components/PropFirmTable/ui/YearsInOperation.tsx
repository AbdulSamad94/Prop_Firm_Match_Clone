// ui/YearsInOperation.tsx
import React from "react";

interface YearsInOperationProps {
  years: number;
}

export const YearsInOperation: React.FC<YearsInOperationProps> = ({
  years,
}) => (
  <div className="w-12 h-12 rounded-full border-2 border-purple-500 flex items-center justify-center text-white">
    <div className="text-center">
      <span className="text-lg font-bold">{years}</span>
    </div>
  </div>
);
