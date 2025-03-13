"use client";

import { FirmsList } from "@/components/firms/FirmsList";
import { mockFirms } from "@/data/firmData";

export default function FirmsPage() {
  return (
    <div>
      <FirmsList firms={mockFirms} />
    </div>
  );
}
