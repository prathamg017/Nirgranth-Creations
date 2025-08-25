"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-pri text-white shadow-md sticky top-0 z-50 transition-all duration-300">
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

        {/* Desktop Nav Links */}
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col gap-1 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="px-6 pb-4 flex flex-col gap-4 font-medium">
          {[
            { name: "About", href: "/about" },
            { name: "Event Gallery", href: "/gallery" },
            { name: "ContactUs", href: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="py-2 border-b border-white/20 hover:text-yellow-300 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}