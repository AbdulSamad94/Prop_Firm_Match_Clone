"use client";

import React from "react";
import { BackButton } from "@/components/ui/BackButton";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { FirmType } from "@/types";
import Router from "next/router";

interface FirmDetailProps {
  firm: FirmType;
}

export const FirmDetail = ({ firm }: FirmDetailProps) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <div>
          <BackButton label="Back to Firms" />
          <h1 className="text-2xl font-bold">{firm.name}</h1>
        </div>

        <div className="flex space-x-3">
          <button
            onClick={() => Router.push(`/admin/firms/${firm.id}/edit`)}
            className="px-4 py-2 rounded-md bg-sidebar-accent text-text-white transition-colors hover:bg-sidebar-accent/80"
          >
            Edit Firm
          </button>
          <button className="px-4 py-2 rounded-md bg-destructive text-destructive-foreground transition-colors hover:bg-destructive/80">
            Delete Firm
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "var(--background-card)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h2 className="text-xl font-semibold mb-4">Firm Information</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-text-gray">Industry</h3>
                <p>{firm.industry}</p>
              </div>

              <div>
                <h3 className="text-sm text-text-gray">Employees</h3>
                <p>{firm.employees}</p>
              </div>

              <div>
                <h3 className="text-sm text-text-gray">Status</h3>
                <StatusBadge status={firm.status} />
              </div>

              <div>
                <h3 className="text-sm text-text-gray">Description</h3>
                <p className="text-text-light">{firm.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="p-6 rounded-lg"
            style={{
              backgroundColor: "var(--background-card)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h2 className="text-xl font-semibold mb-4">Contact Details</h2>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm text-text-gray">Email</h3>
                <p>{firm.email}</p>
              </div>

              <div>
                <h3 className="text-sm text-text-gray">Phone</h3>
                <p>{firm.phone}</p>
              </div>

              <div>
                <h3 className="text-sm text-text-gray">Address</h3>
                <p className="text-text-light">{firm.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
