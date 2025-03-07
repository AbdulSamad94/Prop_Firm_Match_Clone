import { heroOffers } from "@/data/hero-offer";
import { CalendarDays, CircleAlert, Copy, Flame } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="pt-8 relative ">
      <div className="absolute top-0 -z-10">
        <Image src="/left-grad.webp" alt="" width={1000} height={1000} />
      </div>
      <div className="absolute top-0 right-0 -z-10">
        <Image src="/right-grad.webp" alt="" width={1000} height={1000} />
      </div>

      <div className="text-center">
        <h1 className="font-sans text-4xl font-bold">
          Prop Firms Insights and Analytics
        </h1>
        <h5 className="font-sans text-lg text-zinc-400">
          Across 500+ challenges and 40+ of the best firms.
        </h5>
      </div>

      <div className="max-w-7xl mx-auto flex pt-8">
        <div className="bg-gradient-to-r from-[#622548] to-[#4C2C62] border border-pink-500 rounded-[12px] p-4 flex flex-col gap-2  w-[50%] relative">


          <div className="border items-center flex gap-3 border-pink-500 bg-gradient-to-r from-[#622548] to-[#4C2C62] absolute rounded-full top-3 right-4 px-3 py-1
">
             <CalendarDays size={14} color="#ff0095" />
            <h1 className="text-[12px]">Feb 26 - Mar 31</h1>
          </div>


          <div className="flex gap-2 items-center justify-center">
            <Link href={"/offers"} className="text-center">Launch Offers</Link>
            <span>
              <Flame color="#e74694" strokeWidth={3} absoluteStrokeWidth />
            </span>
          </div>

          <div className="flex gap-1 items-center ">
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


          <div className="">
            <p className="text-zinc-400 text-[16px] text-center">
              Applies with the following firms:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
             {heroOffers.map((offer, index) => (
              <div className="bg-zinc-900 p-2 flex gap-4 items-center rounded-[12px] " key={index}>
                <div className="rounded-[12px] border border-zinc-600 p-4">

                 <Image src={offer.logo} alt={offer.name} width={1000} height={1000} className="w-6"/>
                </div>
                 <div className="text-[16px] flex flex-col gap-1">
                  <h2>{offer.name}</h2>
                  <p className="text-[10px] border border-pink-500 px-2 rounded-full">4.6 ⭐⭐⭐⭐</p>
                 </div>

                 <div className="bg-gradient-to-r from-pink-500 to-purple-500 px-3 py-1 rounded-[8px]">
                     <h4>{offer.off}% OFF</h4>
                     <div className="bg-zinc-950 flex gap-1 rounded-[8px] p-1 items-center">
                        <h2 className="text-[10px]">MATCH</h2>
                        <Copy color="#ff1fc3" size={10}/>
                     </div>
                 </div>
              </div>
             ))}
          </div>

        </div>
      </div>
    </div>
  );
}
