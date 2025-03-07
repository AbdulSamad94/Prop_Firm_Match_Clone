import { navItems } from "@/data/nav";
import Link from "next/link";

export default function NavItems({ className = "" }) {
  return (
    <div className={`flex justify-around ${className}`}>
      {navItems.map((nav, index) => (
        <Link
          href={nav.link}
          className="text-zinc-400 whitespace-nowrap hover:bg-zinc-900 hover:text-zinc-300 duration-200 transition-all px-4 py-2 rounded-md w=full"
          key={index}
        >
          {nav.title}
        </Link>
      ))}
    </div>
  );
}
