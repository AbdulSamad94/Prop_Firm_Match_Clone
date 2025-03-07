import Image from "next/image";

export default function Hero() {
  return (
    <div className="py-8 relative ">
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
    </div>
  );
}
