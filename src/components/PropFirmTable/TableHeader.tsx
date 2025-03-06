import React from "react";

const TableHeader = () => {
  return (
    <div className="grid grid-cols-13 gap-4 py-4 border-b border-gray-700 text-gray-300 text-[10px] items-center">
      <div className="col-span-2 flex items-center justify-start">
        {" "}
        {/* Adjusted */}
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
      <div className="col-span-2 flex items-center border-r border-gray-600 justify-center px-3">
        {" "}
        {/* Adjusted */}
        <span>YEARS IN OPERATION</span>
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
        {" "}
        {/* Adjusted */}
        <span>ASSETS</span>
      </div>
      <div className="col-span-1 border-r border-gray-600 flex items-center justify-center">
        <span>PLATFORMS</span>
      </div>
      <div className="col-span-2 border-r border-gray-600 flex items-center justify-center">
        {" "}
        {/* Adjusted */}
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
        {" "}
        {/* Adjusted */}
        <span>ACTIONS</span>
      </div>
    </div>
  );
};

export default TableHeader;
