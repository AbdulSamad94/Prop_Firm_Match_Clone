import Link from "next/link";
import Image from "next/image";
import {
  Twitter,
  Instagram,
  Youtube,
  TwitterIcon as TikTok,
} from "lucide-react";
import footerData from "@/data/footer.json";

export default function Footer() {
  return (
    <footer className=" text-white py-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="flex gap-2 md:gap-8">
          {/* Logo column */}
          <div>
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/icons/logo.svg"
                  alt="Prop Firm Match Logo"
                  width={40}
                  height={40}
                  className="md:h-10 md:w-10 h-5 w-5"
                />
              </div>
              <span className="text-xl hidden md:block font-semibold whitespace-nowrap">
                {footerData.companyName}
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 w-full gap-8">
            {/* Footer columns from JSON data */}
            {footerData.columns.map((column) => (
              <div key={column.title} className="flex flex-col">
                <h3 className="text-sm font-bold uppercase mb-4">
                  {column.title}
                </h3>
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.text}>
                      <Link
                        href={link.url}
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {footerData.companyName}. All
            rights reserved.
          </div>

          <div className="flex gap-4">
            {footerData.legalLinks.map((link) => (
              <Link
                key={link.text}
                href={link.url}
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {footerData.socialLinks.map((social) => (
              <Link
                key={social.platform}
                href={social.url}
                className="text-white hover:text-gray-400 transition-colors"
                aria-label={social.platform}
              >
                {social.platform === "twitter" && (
                  <Twitter className="md:w-7 md:h-7 w-5 h-7" size={28} />
                )}
                {social.platform === "instagram" && (
                  <Instagram className="md:w-7 md:h-7 w-5 h-7" size={28} />
                )}
                {social.platform === "youtube" && (
                  <Youtube className="md:w-7 md:h-7 w-5 h-7" size={28} />
                )}
                {social.platform === "tiktok" && (
                  <TikTok className="md:w-7 md:h-7 w-5 h-7" size={28} />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
