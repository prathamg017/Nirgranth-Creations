"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6 overflow-hidden font-sans">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5851]/20 rounded-full blur-[120px] animate-pulse -z-10" />

      <div className="max-w-2xl text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[12px] font-black uppercase tracking-[1em] text-[#FF5851] mb-6 block">Error 404</span>
          <h1 className="text-8xl md:text-[12rem] font-black tracking-tighter italic leading-none mb-10">
            OFF<br />TRACK
          </h1>
          <p className="text-xl md:text-2xl text-white/60 mb-12 font-medium">
            The page you&apos;re looking for has moved beyond the horizon. 
            Let&apos;s get you back to the mission.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="/"
              className="px-12 py-5 rounded-full bg-white text-black font-black uppercase tracking-widest hover:bg-[#FF5851] hover:text-white transition-all duration-300 shadow-2xl hover:scale-105"
            >
              Return Home
            </Link>
            <Link 
              href="/contact"
              className="px-12 py-5 rounded-full border border-white/20 backdrop-blur-md font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              Contact Base
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 text-[10px] font-black uppercase tracking-widest text-white/20">
        Nirgranth Creations • 2024
      </div>
    </main>
  );
}
