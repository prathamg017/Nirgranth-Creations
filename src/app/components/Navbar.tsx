"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const services = [
    { name: "SMM & Strategy", href: "/smm" },
    { name: "Recording Studio", href: "/recording" },
    { name: "Graphics & Video", href: "/graphic" },
    { name: "App & Web Dev", href: "/development" },
    { name: "Events", href: "/event" },
  ];

  return (
    <>
      <header className="fixed top-4 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-[96%] md:w-[95%] max-w-6xl">
        <div className="bg-white/80 backdrop-blur-xl rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] border border-white/20 px-4 md:px-8 py-2 md:py-3.5 flex justify-between items-center transition-all duration-300">
          {/* Logo */}
          <Link href="/" className="flex items-center cursor-pointer">
            <Image
              src="/logo.svg"
              alt="Nirgranth Creations Logo"
              width={140}
              height={40}
              priority
              className="object-contain w-[120px] md:w-[150px] h-auto"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex gap-10 font-semibold text-gray-900 items-center">
            <Link href="/" className="hover:text-[#FF5851] transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5851] transition-all group-hover:w-full"></span>
            </Link>

            <Link href="/portfolio" className="hover:text-[#FF5851] transition-colors relative group">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5851] transition-all group-hover:w-full"></span>
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#FF5851] transition-colors group">
                Services
                <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden py-3"
                  >
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block px-6 py-3 text-sm hover:bg-gray-50 hover:text-[#FF5851] transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="hover:text-[#FF5851] transition-colors relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF5851] transition-all group-hover:w-full"></span>
            </Link>


          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
              <a href="https://www.instagram.com/nirgranth_creation/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-[#FF5851] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
            </div>
            <Link href="/contact?service=General-Inquiry">
              <motion.button 
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF5851] text-white px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-widest shadow-[0_10px_20px_-5px_rgba(255,88,81,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(255,88,81,0.6)] transition-all duration-300"
              >
                Let&apos;s Connect
              </motion.button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-gray-900 transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-3 bg-white/95 backdrop-blur-xl rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100"
            >
              <nav className="px-6 py-8 flex flex-col gap-4">
                <Link href="/" className="text-xl font-bold border-b border-gray-50 pb-2" onClick={() => setIsOpen(false)}>Home</Link>
                <Link href="/portfolio" className="text-xl font-bold border-b border-gray-50 pb-2" onClick={() => setIsOpen(false)}>Portfolio</Link>
                <div className="flex flex-col gap-3">
                  <p className="text-xs uppercase tracking-widest text-[#FF5851] font-black">Our Services</p>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="text-lg font-medium text-gray-700 ml-2"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <Link href="/about" className="text-xl font-bold border-b border-gray-50 pb-2" onClick={() => setIsOpen(false)}>About</Link>

                <Link href="/contact?service=General-Inquiry" className="mt-4" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-[#FF5851] text-white py-4 rounded-2xl font-bold text-lg">
                    Contact Us
                  </button>
                </Link>

                <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-gray-100">
                  <a href="https://www.instagram.com/nirgranth_creation/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF5851] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                  </a>
                  <a href="https://twitter.com/nirgranth_c" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                  </a>
                  <a href="https://youtube.com/@nirgranthcreations" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FF0000] transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505a3.017 3.017 0 0 0-2.122 2.136C0 8.055 0 12 0 12s0 3.945.501 5.814a3.017 3.017 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.945 24 12 24 12s0-3.945-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}