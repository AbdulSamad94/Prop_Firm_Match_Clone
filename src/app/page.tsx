import PropFirmTable from "@/components/PropFirmTable/PropFirmTable";
import SubscribeSection from "@/components/SubscribeSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
export default function Home() {
  return (
    <div className="">
      <div className="bg-[var(--color-bg)] text-[var(--color-text)] p-6">
        This is a dark background with white text
      </div>

      <div className="bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] p-6 text-white">
        Gradient Background Example
      </div>

      <div>
        <PropFirmTable />
      </div>
    
      <TestimonialCarousel/>
      <SubscribeSection/>
    </div>
  );
}
