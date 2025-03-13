"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  ChevronRight,
  Plus,
  Building,
  Home,
  Settings,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";

export const AdminSidebar = ({
  isSidebarOpen,
  toggleSidebar,
}: {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}) => {
  const [expandedMenus, setExpandedMenus] = useState({ firms: false });

  const toggleMenu = (menu: keyof typeof expandedMenus) => {
    setExpandedMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <>
      {/* Mobile sidebar toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-sidebar-accent"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 transform bg-sidebar ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:static md:inset-auto md:h-screen flex flex-col`}
        style={{ backgroundColor: "var(--background-card)" }}
      >
        {/* Logo */}
        <div className="flex items-center justify-center h-16 px-4 border-b border-border-color">
          <h1
            className="text-xl font-bold"
            style={{
              background: "var(--gradient-purple)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Admin Panel
          </h1>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 px-2 py-4 space-y-1 overflow-y-auto">
          <Link
            href="/admin"
            className="flex items-center px-4 py-3 rounded-md hover:bg-background-card-hover transition-colors"
          >
            <Home size={20} className="mr-3" />
            <span>Dashboard</span>
          </Link>

          {/* Firms section with dropdown */}
          <div>
            <button
              onClick={() => toggleMenu("firms")}
              className="w-full flex items-center justify-between px-4 py-3 rounded-md hover:bg-background-card-hover transition-colors"
            >
              <div className="flex items-center">
                <Building size={20} className="mr-3" />
                <span>Firms</span>
              </div>
              {expandedMenus.firms ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>

            {/* Dropdown menu */}
            {expandedMenus.firms && (
              <div className="pl-10 space-y-1 mt-1">
                <Link
                  href="/admin/firms"
                  className="flex items-center px-4 py-2 rounded-md hover:bg-background-card-hover transition-colors text-text-light"
                >
                  All Firms
                </Link>
                <Link
                  href="/admin/firms/add"
                  className="flex items-center px-4 py-2 rounded-md hover:bg-background-card-hover transition-colors text-text-light"
                >
                  <Plus size={16} className="mr-2" />
                  Add New Firm
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/admin/users"
            className="flex items-center px-4 py-3 rounded-md hover:bg-background-card-hover transition-colors"
          >
            <Users size={20} className="mr-3" />
            <span>Users</span>
          </Link>

          <Link
            href="/admin/settings"
            className="flex items-center px-4 py-3 rounded-md hover:bg-background-card-hover transition-colors"
          >
            <Settings size={20} className="mr-3" />
            <span>Settings</span>
          </Link>
        </nav>

        {/* User profile and logout */}
        <div className="p-4 border-t border-border-color">
          <button className="w-full flex items-center px-4 py-2 rounded-md hover:bg-background-card-hover transition-colors">
            <LogOut size={20} className="mr-3" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
};
