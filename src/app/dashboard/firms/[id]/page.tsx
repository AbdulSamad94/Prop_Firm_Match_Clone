"use client";

import { FirmDetail } from "@/components/firms/FirmDetail";
import { getFirmById } from "@/data/firmData";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function FirmDetailPage() {
  const params = useParams();
  const firmId = parseInt(params.id as string);

  const firm = getFirmById(firmId);

  if (!firm) {
    return notFound();
  }

  return (
    <div>
      <FirmDetail firm={firm} />
    </div>
  );
}
