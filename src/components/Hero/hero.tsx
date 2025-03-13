"use client";
import { heroOffers } from "@/data/hero-offer";
import { CalendarDays, CircleAlert, Copy, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const features = [
    {
      title: "Spreads",
      image: "/hero-carousels/image.png",
    },
    { title: "Analytics", image: "/hero-carousels/image.png" },
    { title: "Trading", image: "/hero-carousels/image.png" },
    { title: "Reports", image: "/hero-carousels/image.png" },
    { title: "Insights", image: "/hero-carousels/image.png" },
  ];

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <div className="pt-8 relative md:px-6 lg:px-8">
      <Image
        src="/left-grad.webp"
        alt=""
        width={1000}
        height={1000}
        className="absolute top-0 left-0 -z-10 w-1/2 max-w-lg md:max-w-full"
      />
      <Image
        src="/right-grad.webp"
        alt=""
        width={1000}
        height={1000}
        className="w-1/2 absolute top-0 right-0 -z-10 max-w-lg md:max-w-full"
      />
      <div className="mx-3">
        <div className="text-center mb-6">
          <h1 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold">
            Prop Firms Insights and Analytics
          </h1>
          <h5 className="font-sans text-base md:text-lg text-zinc-400 mt-2">
            Across 500+ challenges and 40+ of the best firms.
          </h5>
        </div>

        <div className="max-w-7xl mx-auto flex pt-4 md:pt-8 gap-4 flex-col md:flex-row">
          {/* First Card - Offers */}
          <div className="bg-gradient-to-r from-[#622548] to-[#4C2C62] border border-pink-500 rounded-[12px] p-4 flex flex-col gap-2 w-full md:w-1/2 relative">
            <div className="border items-center flex gap-3 border-pink-500 bg-gradient-to-r from-[#622548] to-[#4C2C62] absolute rounded-full top-3 right-4 px-3 py-1">
              <CalendarDays size={14} color="#ff0095" />
              <h1 className="text-[12px]">Feb 26 - Mar 31</h1>
            </div>

            <div className="flex gap-2 items-center justify-center mt-6 md:mt-0">
              <Link
                href={"/offers"}
                className="text-center hover:text-pink-400 transition-colors"
              >
                Launch Offers
              </Link>
              <span>
                <Flame color="#e74694" strokeWidth={3} absoluteStrokeWidth />
              </span>
            </div>

            <div className="flex gap-1 items-center">
              <CircleAlert
                color="#fbff00"
                strokeWidth={3}
                absoluteStrokeWidth
                size={16}
              />
              <p className="text-sm text-center">
                Get an additional free, same-sized account upon payout by using
                the MATCH code.
              </p>
            </div>

            <div>
              <p className="text-zinc-400 text-sm md:text-base text-center mb-2">
                Applies with the following firms:
              </p>
            </div>

            <ScrollArea className="overflow-hidden h-64 md:h-48 lg:h-52">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pr-2">
                {heroOffers.map((offer, index) => (
                  <div
                    className="bg-zinc-900 p-2 flex gap-2 items-center rounded-[12px]"
                    key={index}
                  >
                    <div className="rounded-[12px] border border-zinc-600 p-2 md:p-4 flex-shrink-0">
                      <Image
                        src={offer.logo}
                        alt={offer.name}
                        width={1000}
                        height={1000}
                        className="w-4 md:w-6"
                      />
                    </div>
                    <div className="text-sm md:text-base flex flex-col gap-1 flex-grow">
                      <h2 className="truncate">{offer.name}</h2>
                      <p className="text-[10px] border border-pink-500 px-2 rounded-full w-fit">
                        4.6 ⭐⭐⭐⭐
                      </p>
                    </div>

                    <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-2 md:px-3 py-1 rounded-[8px] flex-shrink-0">
                      <h4 className="text-xs md:text-sm">{offer.off}% OFF</h4>
                      <div className="bg-zinc-950 flex gap-1 rounded-[8px] p-1 items-center">
                        <h2 className="text-[10px]">MATCH</h2>
                        <Copy color="#ff1fc3" size={10} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </div>

          {/* Second Card - Features - Exact match to reference */}
          <div className="bg-black/40 border border-zinc-600 rounded-[12px] w-full md:w-1/2 mt-4 md:mt-0">
            <div className="p-4 flex flex-row justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold text-white">
                Features
              </h2>

              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 bg-black/30 border-0 text-white hover:bg-black/50 rounded-full p-0 cursor-pointer"
                    onClick={scrollPrev}
                  >
                    <ChevronLeft className="h-3 w-3" />
                    <span className="sr-only">Previous slide</span>
                  </Button>
                  {features.map((_, index) => (
                    <span
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300 cursor-pointer",
                        current === index ? "bg-white" : "bg-white/30"
                      )}
                    />
                  ))}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 bg-black/30 border-0 text-white hover:bg-black/50 rounded-full p-0 cursor-pointer"
                    onClick={scrollNext}
                  >
                    <ChevronRight className="h-3 w-3" />
                    <span className="sr-only">Next slide</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="border border-zinc-600 m-4 mt-4 rounded-[12px]">
              <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent>
                  {features.map((feature, index) => (
                    <CarouselItem key={index}>
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        height={1000}
                        width={1000}
                        className="rounded-[12px] w-full h-full object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
