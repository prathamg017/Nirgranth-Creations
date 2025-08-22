"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-[#e7546b] text-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/nirgranth.PNG"
            alt="Nirgranth Creations Logo"
            width={80}
            height={20}
            priority
            className="object-contain"
          />
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex gap-8 font-medium">
          {[
            { name: "About", href: "/about" },
            { name: "Event Gallery", href: "/gallery" },
            { name: "ContactUs", href: "/contact" },
          ].map((item) => (
            <Link key={item.name} href={item.href} className="relative group">
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-yellow-300 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
