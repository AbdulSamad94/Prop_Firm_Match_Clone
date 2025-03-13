"use client";

import React, { useState, ReactNode } from "react";
import { AdminSidebar } from "./AdminSideBar";

export const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen bg-background-dark text-text-white py-20 md:py-0">
      <AdminSidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Main content */}
      <main
        className={`flex-1 p-6 ${
          !isSidebarOpen ? "md:ml-0" : "md:ml-0"
        } overflow-y-auto`}
      >
        {children}
      </main>
    </div>
  );
};
