import React from "react";

type StatusType = "Active" | "Pending" | "Inactive";

export const StatusBadge = ({ status }: { status: StatusType }) => {
  return (
    <span
      className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
        status === "Active"
          ? "bg-accent-green/20 text-accent-green"
          : status === "Pending"
          ? "bg-accent-blue/20 text-accent-blue"
          : "bg-secondary/20 text-secondary"
      }`}
    >
      {status}
    </span>
  );
};
