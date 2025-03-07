
import { navItems } from "@/data/nav";
import Link from "next/link";

export default function NavItems() {
  return (
    <div className="flex w-full justify-around">
      {navItems.map((nav, index) => (
        <Link
          href={nav.link}
          className="text-zinc-400 relative hover:bg-zinc-900 duration-200 transition-all px-5 py-3 "
          key={index}
        >
          <h2 className="relative ">{nav.title}</h2>
        </Link>
      ))}
    </div>
  );
}