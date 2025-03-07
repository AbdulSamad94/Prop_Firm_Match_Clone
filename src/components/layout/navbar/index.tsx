"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronDown, ChevronUp, Menu } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import NavItems from "./navItems";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col justify-center gap-3 px-6 py-4">
      <div className="flex items-center">
        <Image
          src={"/pfm-logo.svg"}
          alt="Prop Firm Match Logo"
          width={200}
          height={200}
          className=""
        />

        <div className="flex gap-8 w-full ">

          <div className="flex items-center">
            <span className="text-[#B9C1C2] mx-4 opacity-70">|</span>
            <div className="flex items-center gap-2">
              <h4>Products</h4>
              <div className="" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </div>
            </div>
          </div>

          <div className="">
            <Input
              className="rounded-full outline-none border-[#B9C1C2] w-[500px] text-field"
              placeholder="Search a Prop Firm"
            />
          </div>

          <div className="flex gap-5 items-center justify-end">
            <Button className="hover:bg-zinc-800 transition-all duration-200 text-white bg-transparent rounded-full cursor-pointer">
              Login
            </Button>
            <Button className="bg-linear-65 from-pink-500 to-purple-500 cursor-pointer rounded-full duration-200 transition-all">
              Sign Up
            </Button>
            <span className="text-[#3a3b3b] opacity-70">|</span>
            <div className="flex gap-2 items-center">
              <Image src="/flag.png" alt="" className="w-4" height={1000} width={1000}/>
              <h5 className="text-sm">En</h5>
              <div className="" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
              </div>
            </div>
            <span className="text-[#3a3b3b] opacity-70">|</span>
            <div className="cursor-pointer hover:bg-zinc-900 ml-2 p-2 rounded-xl duration-200 transition-all">
              <Menu size={20} />
            </div>
          </div>
        </div>
      </div>
      <NavItems />
    </div>
  );
}
