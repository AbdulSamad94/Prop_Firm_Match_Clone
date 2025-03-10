"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { CaroData } from "@/data/login-carousels";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function LoginCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
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

  return (
    <Carousel
      setApi={setApi}
      className="w-full h-full  border-[0.5px] border-zinc-800 rounded-2xl "
    >
      <CarouselContent className="h-[600px] m-0">
        {CaroData.map((data, index) => (
          <CarouselItem
            key={index}
            className="bg-cover flex justify-start relative h-full bg-no-repeat rounded-2xl px-2"
            style={{ backgroundImage: `url(${data.bgImg})` }}
          >
            <div className="flex flex-col justify-between py-10 w-[490px] mx-auto">
              <Link href={"/"}>
                <Image
                  src={"/pfm-logo.svg"}
                  alt="Prop Firm Match Logo"
                  width={200}
                  height={200}
                  className="md:w-auto w-32 "
                />
              </Link>

              <div className="flex flex-col gap-3">
                <h2 className="text-[#D17DA7] ">{data.h2}</h2>
                <h1 className="text-3xl font-bold max-w-[70%]">{data.h1}</h1>
                <p className="text-[16px] text-gray-400">{data.p}</p>

                <div className="flex gap-2 pt-6">
                  {CaroData.map((_, index) => (
                    <span
                      key={index}
                      onClick={() => api?.scrollTo(index)}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300 cursor-pointer",
                        current === index ? "bg-white" : "bg-white/30"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default LoginCarousel;
