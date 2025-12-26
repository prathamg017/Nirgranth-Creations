"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Floating Navbar */}
      <header className="fixed top-3 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[96%] md:w-[95%] max-w-5xl">
        <div className="bg-white/95 backdrop-blur-md rounded-full shadow-xl md:shadow-2xl px-4 md:px-8 py-2.5 md:py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src="/logo.svg"
              alt="Nirgranth Creations Logo"
              width={100}
              height={30}
              priority
              className="object-contain md:w-[150px] md:h-[40px]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-8 font-medium text-gray-800">
            {[
              { name: "About", href: "/about" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="relative group hover:text-orange-500 transition-colors"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-pink-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-800 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden mt-4 bg-white rounded-3xl shadow-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="px-6 py-4 flex flex-col gap-3 font-medium">
            {[
              { name: "About", href: "/about" },
              { name: "Contact Us", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-3 border-b border-gray-100 text-gray-800 hover:text-orange-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    </>
  );
}