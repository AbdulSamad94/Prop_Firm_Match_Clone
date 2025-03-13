"use client";

import React from "react";
import Router from "next/router";
import { ChevronLeft } from "lucide-react";

export const BackButton = ({ label = "Back" }: { label?: string }) => {
  return (
    <button
      onClick={() => Router.back()}
      className="text-text-gray hover:text-text-white mb-2 flex items-center"
    >
      <ChevronLeft size={20} className="mr-1" />
      {label}
    </button>
  );
};
