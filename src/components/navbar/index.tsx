"use client";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Menu, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import NavItems from "./navItems";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center gap-3 px-6 py-4 sticky top-0 w-full">
      {/* Top section with logo, search, login buttons */}
      <div className="flex items-center justify-between w-full">
        {/* Logo and Products dropdown */}
        <div className="flex items-center">
          <Link href={"/"}>
            <Image
              src={"/pfm-logo.svg"}
              alt="Prop Firm Match Logo"
              width={200}
              height={200}
              className="md:w-auto w-32"
            />
          </Link>

          <div className="hidden md:flex md:items-center">
            <span className="text-[#B9C1C2] mx-4 opacity-70">|</span>
            <div className="flex items-center gap-2">
              <h4>Products</h4>
              <div
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </div>
            </div>
          </div>
        </div>

        {/* Search bar - hide on mobile */}
        <div className="hidden md:block md:flex-1 md:max-w-xl mx-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="Searching Popular Firms"
              className="bg-[#28282c] text-gray-300 text-sm rounded-full pl-10 pr-4 py-2 w-full focus:outline-none ring-1 ring-gray-600 focus:ring-1 focus:ring-[#E94A96] focus:bg-[#312839]"
            />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-1"
          >
            <Menu size={20} />
          </Button>
        </div>

        {/* Login buttons - hide on mobile */}
        <div className="hidden md:flex md:gap-5 md:items-center">
          <Link href={"/login"}>
            <Button className="hover:bg-zinc-800 transition-all duration-200 text-white bg-transparent rounded-full cursor-pointer">
              Login
            </Button>
          </Link>
          <Link href={"register"}>
            <Button className="bg-gradient-to-r from-pink-500 to-purple-500 cursor-pointer rounded-full duration-200 transition-all">
              {" "}
              Sign Up
            </Button>
          </Link>
          <span className="text-[#3a3b3b] opacity-70">|</span>
          <div className="flex gap-2 items-center">
            <Image
              src="/flag.png"
              alt=""
              className="w-4"
              height={1000}
              width={1000}
            />
            <h5 className="text-sm">En</h5>
            <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            </div>
          </div>
          <span className="text-[#3a3b3b] opacity-70">|</span>
          <div className="cursor-pointer hover:bg-zinc-900 ml-2 p-2 rounded-xl duration-200 transition-all">
            <Menu size={20} />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden p-4 bg-[#1b1a1b] rounded-lg mt-2 flex flex-col gap-4">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-300" />
            </div>
            <input
              type="text"
              placeholder="Searching Popular Firms"
              className="bg-[#28282c] text-gray-300 text-sm rounded-full pl-10 pr-4 py-2 w-full focus:outline-none ring-1 ring-gray-600 focus:ring-1 focus:ring-[#E94A96] focus:bg-[#312839]"
            />
          </div>

          <div className="flex items-center gap-2 p-2">
            <h4>Products</h4>
            <ChevronDown size={12} />
          </div>

          <div className="flex flex-col gap-2">
            <Link href={"/login"}>
              <Button className="w-full justify-center">Login</Button>
            </Link>
            <Link href={"/register"}>
              <Button className="w-full justify-center bg-gradient-to-r from-pink-500 to-purple-500">
                Sign Up
              </Button>
            </Link>
          </div>

          <div className="flex gap-2 items-center p-2">
            <Image
              src="/flag.png"
              alt=""
              className="w-4"
              height={1000}
              width={1000}
            />
            <h5 className="text-sm">En</h5>
            <ChevronDown size={12} />
          </div>
        </div>
      )}

      {/* Scrollable nav items */}
      <div className="overflow-x-auto pb-2 -mx-2 px-2 w-full">
        <NavItems />
      </div>
    </div>
  );
}
