import Hero from "@/components/Hero/hero";
import PropFirmTable from "@/components/PropFirmTable/PropFirmTable";
import SubscriptionSection from "@/components/SubscriptionSection";
import TestimonialCarousel from "@/components/TestimonialCarousel";
export default function Home() {
  return (
    <div className="">
      <section>
        <Hero />
      </section>
      <section className="my-24 md:my-40">
        <PropFirmTable />
      </section>
      <section>
        <TestimonialCarousel />
      </section>
      <section>
        <SubscriptionSection />
      </section>
    </div>
  );
}
