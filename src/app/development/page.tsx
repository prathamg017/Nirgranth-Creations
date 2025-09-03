// app/development/DevelopmentClient.tsx
"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import VisionaryShowcase from "@/app/components/VisionaryShowcase";

export default function DevelopmentClient() {
  // Cursor glow tracking
  const [pos, setPos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main className="relative text-gray-800 overflow-hidden font-sans">

      {/* Cursor Glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background: `radial-gradient(circle 200px at ${pos.x}px ${pos.y}px, rgba(231,84,107,0.15), transparent 80%)`,
        }}
      />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 -z-20 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="gray" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating Blobs */}
      <motion.div
        animate={{ y: [0, -25, 0], scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-[-150px] left-[-100px] w-[400px] h-[400px] bg-gradient-to-r from-pink-200 via-rose-200 to-yellow-200 rounded-full blur-[120px] -z-10"
      />
      <motion.div
        animate={{ y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ repeat: Infinity, duration: 10 }}
        className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-gradient-to-r from-pink-300 via-orange-200 to-pink-100 rounded-full blur-[140px] -z-10"
      />

      {/* 1. HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-br from-pink-50 via-rose-100 to-yellow-50">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        >
          <source src="/brand-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-pink-50/80 -z-10" />

        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight text-gray-900"
          >
            We Shape{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="bg-gradient-to-r from-pink-500 via-orange-400 to-rose-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(231,84,107,0.3)]"
            >
              Digital Futures
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 text-xl text-gray-700 max-w-2xl mx-auto"
          >
            More than apps. More than websites.{" "}
            We craft <span className="text-pink-600 font-semibold">timeless digital brands</span>.
          </motion.p>

          <motion.a
            href="/contact"
            animate={{
              boxShadow: [
                "0 0 0px #e7546b",
                "0 0 15px #e7546b",
                "0 0 0px #e7546b",
              ],
            }}
            transition={{ repeat: Infinity, duration: 2 }}
            whileHover={{ scale: 1.08 }}
            className="mt-10 inline-block px-10 py-4 bg-gradient-to-r from-pink-500 via-orange-400 to-rose-400 text-white rounded-full font-semibold shadow-lg hover:shadow-pink-400/50 transition"
          >
            Let’s Talk Vision 🚀
          </motion.a>
        </div>
      </section>

      {/* Divider */}
      <div className="h-[2px] w-3/4 mx-auto my-16 bg-gradient-to-r from-yellow-300 via-pink-400 to-rose-300" />

      {/* 2. FUTURISTIC MARQUEE */}
      <section className="py-16 border-y border-gray-200 bg-gradient-to-r from-pink-50 via-orange-50 to-rose-100">
        <div className="marquee-container">
          <div className="marquee-track">
            {["Websites", "Apps", "AI", "E-Commerce", "Startups", "Innovation"].map(
              (word, i) => (
                <span key={i}>{word}</span>
              )
            )}
            {["Websites", "Apps", "AI", "E-Commerce", "Startups", "Innovation"].map(
              (word, i) => (
                <span key={`dup-${i}`}>{word}</span>
              )
            )}
          </div>
        </div>
      </section>

      {/* 3. VISIONARY SHOWCASE */}
      <VisionaryShowcase />

      {/* Divider */}
      <div className="h-[2px] w-3/4 mx-auto my-16 bg-gradient-to-r from-rose-300 via-pink-400 to-yellow-300" />

      {/* 4. BRAND QUOTE */}
      <section className="py-32 text-center relative bg-gradient-to-br from-pink-50 via-yellow-50 to-rose-100">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl italic max-w-4xl mx-auto leading-relaxed text-gray-700"
        >
          “We don’t just build tech.{" "}
          We <span className="text-pink-600 font-semibold">craft stories</span> that live inside apps.”
          <span className="block mt-6 text-pink-500 font-bold">
            – Akash Jain, Founder
          </span>
        </motion.p>
      </section>

      {/* Divider */}
      <div className="h-[2px] w-3/4 mx-auto my-16 bg-gradient-to-r from-yellow-300 via-pink-400 to-rose-300" />

      {/* 5. FINAL MANIFESTO CTA */}
      <section className="py-32 text-center relative bg-gradient-to-b from-rose-100 via-pink-50 to-yellow-50">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto leading-snug text-gray-900"
        >
          You’re Not Hiring <span className="text-pink-600">Developers</span>.
          <br />
          You’re Partnering With{" "}
          <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-rose-400 bg-clip-text text-transparent">
            Visionaries
          </span>.
        </motion.h2>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.08 }}
          animate={{
            boxShadow: [
              "0 0 0px #e7546b",
              "0 0 15px #e7546b",
              "0 0 0px #e7546b",
            ],
          }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="mt-12 inline-block px-12 py-5 bg-gradient-to-r from-pink-500 via-orange-400 to-rose-400 text-white rounded-full font-semibold shadow-lg hover:shadow-pink-400/50 transition"
        >
          Start Your Journey
        </motion.a>
      </section>
    </main>
  );
}
