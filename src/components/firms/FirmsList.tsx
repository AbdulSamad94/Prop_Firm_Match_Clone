"use client";

import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FirmType } from "@/types";

interface FirmsListProps {
  firms: FirmType[];
}

export const FirmsList = ({ firms }: FirmsListProps) => {
  const Router = useRouter();
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">All Firms</h1>
        <Link
          href="/dashboard/firms/add"
          className="px-4 py-2 rounded-md transition-colors"
          style={{
            background: "var(--gradient-purple)",
            boxShadow: "var(--shadow-light)",
          }}
        >
          <span className="flex items-center">
            <Plus size={18} className="mr-2" />
            Add New Firm
          </span>
        </Link>
      </div>

      <div
        className="overflow-x-auto rounded-lg"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <table className="w-full table-auto">
          <thead>
            <tr
              className="text-left"
              style={{ backgroundColor: "var(--background-card)" }}
            >
              <th className="px-6 py-3 border-b border-border-color">Name</th>
              <th className="px-6 py-3 border-b border-border-color">
                Industry
              </th>
              <th className="px-6 py-3 border-b border-border-color">
                Employees
              </th>
              <th className="px-6 py-3 border-b border-border-color">Status</th>
              <th className="px-6 py-3 border-b border-border-color">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {firms.map((firm) => (
              <tr
                key={firm.id}
                className="hover:bg-background-card-hover cursor-pointer transition-colors"
                onClick={() => Router.push(`/dashboard/firms/${firm.id}`)}
                style={{ backgroundColor: "var(--background-card)" }}
              >
                <td className="px-6 py-4 border-b border-border-color font-medium">
                  {firm.name}
                </td>
                <td className="px-6 py-4 border-b border-border-color text-text-light">
                  {firm.industry}
                </td>
                <td className="px-6 py-4 border-b border-border-color text-text-light">
                  {firm.employees}
                </td>
                <td className="px-6 py-4 border-b border-border-color">
                  <StatusBadge status={firm.status} />
                </td>
                <td className="px-6 py-4 border-b border-border-color">
                  <button
                    className="text-text-gray hover:text-text-white transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      Router.push(`/dashboard/firms/${firm.id}/edit`);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
