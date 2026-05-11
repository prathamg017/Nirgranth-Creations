// app/development/DevelopmentClient.tsx
"use client";

import VisionaryShowcase from "@/app/components/VisionaryShowcase";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const techStack = [
  { name: "Next.js", icon: "▲", color: "#000000" },
  { name: "Flutter", icon: "F", color: "#02569B" },
  { name: "React", icon: "⚛", color: "#61DAFB" },
  { name: "Node.js", icon: "◆", color: "#339933" },
  { name: "TypeScript", icon: "TS", color: "#3178C6" },
  { name: "Firebase", icon: "🔥", color: "#FFCA28" },
];

const services = [
  {
    title: "Next.js Web Apps",
    desc: "Lightning-fast, SEO-optimized web applications built with Next.js",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Flutter Mobile Apps",
    desc: "Cross-platform iOS & Android apps with a single Flutter codebase",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Backend & APIs",
    desc: "Scalable Node.js backends with RESTful & GraphQL APIs",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    title: "Cloud & DevOps",
    desc: "Firebase, AWS deployment with CI/CD pipelines",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
];

export default function DevelopmentClient() {
  const [typedText, setTypedText] = useState("");
  const codeSnippet = "const future = await build();";

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < codeSnippet.length) {
        setTypedText(codeSnippet.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 100);
    return () => clearInterval(typing);
  }, []);

  return (
    <main className="relative text-white overflow-hidden font-mono bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Animated Grid Background */}
      <div className="fixed inset-0 -z-10 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(255,88,81,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,88,81,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Floating Code Elements - Simplified */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 8 }}
          className="absolute top-20 left-10 text-5xl text-pink-500/20 font-bold"
        >
          {"{ }"}
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 10 }}
          className="absolute bottom-40 right-20 text-5xl text-blue-500/20 font-bold"
        >
          {"< />"}
        </motion.div>
      </div>

      {/* HERO SECTION - Terminal Style */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-6xl mx-auto w-full">
          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-800/50 backdrop-blur-xl rounded-2xl border border-gray-700 shadow-2xl overflow-hidden"
          >
            {/* Terminal Header */}
            <div className="bg-gray-700/50 px-4 py-3 flex items-center gap-2 border-b border-gray-600">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4">development.tsx</span>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-12">
              <div className="text-green-400 mb-4 text-sm">$ npm run build</div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="text-gray-300">We Build Apps With</span>{" "}
                <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                  Flutter & Next.js
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 font-sans max-w-3xl">
                Cross-platform mobile apps with Flutter. Lightning-fast web applications with Next.js.
                Starting from ₹15k for a professional 5-page website.
              </p>

              {/* Typed Code */}
              <div className="bg-black/50 rounded-lg p-4 mb-8 border border-gray-700">
                <code className="text-pink-400">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </code>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact?service=App-and-Web-Development"
                  className="px-8 py-4 rounded-lg font-bold text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300 font-sans"
                  style={{ backgroundColor: '#FF5851' }}
                >
                  Start Your Project
                </Link>
                <a
                  href="#tech"
                  className="px-8 py-4 rounded-lg bg-gray-700/50 border border-gray-600 font-bold text-white hover:bg-gray-600/50 transition-all duration-300 font-sans"
                >
                  View Tech Stack
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section id="tech" className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              Our <span style={{ color: '#FF5851' }}>Tech Stack</span>
            </h2>
            <p className="text-gray-400 text-xl font-sans">Technologies we master to build your vision</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-pink-500 transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3 text-center">{tech.icon}</div>
                <div className="text-center font-bold text-gray-300 font-sans">{tech.name}</div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp(0)} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sans">
              What We <span style={{ color: '#FF5851' }}>Build</span>
            </h2>
            <p className="text-gray-400 text-xl font-sans max-w-2xl mx-auto">
              Full-stack development services for modern businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.15)}
                className="group relative bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-pink-500 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 font-sans">{service.title}</h3>
                    <p className="text-gray-400 font-sans leading-relaxed">{service.desc}</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HYPER-PREMIUM PORTFOLIO SHOWCASE */}
      <section className="py-32 px-6 relative overflow-hidden bg-black">
        {/* Cinematic Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#FF5851]/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{ 
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,88,81,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px' 
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <span className="text-[10px] font-black uppercase tracking-[0.8em] text-[#FF5851] mb-6 block">Production Excellence</span>
            <h2 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter italic uppercase leading-[0.85]">
              LIVE<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5851] to-orange-400">DEPLOYMENT</span>
            </h2>
            <p className="text-gray-500 text-lg md:text-xl font-bold max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
              Real-time architectural validation. This is how we build the future.
            </p>
          </motion.div>

          <div className="relative group">
            {/* 3D Container */}
            <motion.div
              initial={{ opacity: 0, rotateY: -15, rotateX: 5, scale: 0.9 }}
              whileInView={{ opacity: 1, rotateY: 0, rotateX: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full perspective-[2000px] preserve-3d"
            >
              {/* The "Monitor" Frame */}
              <div className="relative rounded-[2rem] md:rounded-[3rem] p-2 bg-gradient-to-br from-gray-700 via-gray-900 to-black shadow-[0_50px_100px_-20px_rgba(0,0,0,1)] border border-white/10 overflow-hidden">
                {/* Browser UI */}
                <div className="absolute top-0 left-0 w-full h-16 bg-gray-900/90 backdrop-blur-xl border-b border-white/5 flex items-center px-8 gap-6 z-20">
                  <div className="flex gap-2.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#FF5851] shadow-[0_0_15px_rgba(255,88,81,0.5)]"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-orange-400/50"></div>
                    <div className="w-3.5 h-3.5 rounded-full bg-green-500/50"></div>
                  </div>
                  <div className="flex-1 max-w-2xl bg-black/40 h-9 rounded-full border border-white/5 flex items-center px-6 gap-3 overflow-hidden">
                    <svg className="w-3.5 h-3.5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                    <span className="text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] truncate">https://portfolio-me-delta-ten.vercel.app</span>
                  </div>
                </div>

                {/* The Iframe Section */}
                <div className="relative mt-14 aspect-video md:aspect-[21/9] w-full overflow-hidden bg-white">
                  <iframe 
                    src="https://portfolio-me-delta-ten.vercel.app" 
                    className="w-full h-full border-none"
                    title="Live Portfolio Showcase"
                    loading="lazy"
                  ></iframe>
                  
                  {/* Interactive Glitch Overlay on Hover */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>

              {/* Floating Tech Specs - Side Label */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute -right-10 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 z-30"
              >
                {[
                  { l: "Performance", v: "100" },
                  { l: "SEO", v: "100" },
                  { l: "Security", v: "A+" }
                ].map((s, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-2xl border border-white/10 p-6 rounded-2xl w-40 shadow-2xl">
                    <div className="text-[10px] font-black text-[#FF5851] uppercase tracking-widest mb-1">{s.l}</div>
                    <div className="text-3xl font-black text-white italic">{s.v}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Reflection / Glow below */}
            <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-4/5 h-40 bg-[#FF5851]/20 blur-[100px] rounded-full -z-10"></div>
          </div>

          <div className="mt-20 flex flex-col items-center">
             <Link 
              href="https://portfolio-me-delta-ten.vercel.app" 
              target="_blank" 
              className="group flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full font-black text-sm uppercase tracking-[0.3em] hover:bg-[#FF5851] hover:text-white transition-all duration-500 hover:scale-110 shadow-3xl"
             >
                Inspect Live Build
                <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
             </Link>
          </div>
        </div>
      </section>

      {/* VISIONARY SHOWCASE */}
      <VisionaryShowcase />

      {/* STATS SECTION - Code Style */}
      <section className="py-24 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Projects Delivered", value: "150+", symbol: "{}" },
              { label: "Client Satisfaction", value: "99%", symbol: "<>" },
              { label: "Years Experience", value: "7+", symbol: "[]" },
              { label: "Tech Stack", value: "20+", symbol: "()" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                {...fadeUp(i * 0.1)}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 text-center hover:border-pink-500 transition-all duration-300"
              >
                <div className="text-pink-500 text-2xl mb-2">{stat.symbol}</div>
                <div className="text-4xl font-bold text-white mb-2 font-sans">{stat.value}</div>
                <div className="text-gray-400 text-sm font-sans">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM FINAL CTA SECTION */}
      <section 
        className="py-20 md:py-32 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(to bottom, #0a0a0a, #000000, #ff5851)' }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none tracking-tighter text-white uppercase italic">
              ENGINEER YOUR <br />
              <span className="text-white/20">DIGITAL EMPIRE</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 mb-12 font-sans max-w-2xl mx-auto font-medium">
              From initial architecture to global scaling. We don&apos;t just code — we build market-dominating digital assets.
            </p>
            <Link 
              href="/contact?service=App-and-Web-Development"
              className="inline-flex items-center gap-6 px-8 py-5 md:px-16 md:py-8 rounded-full bg-white text-black font-black text-lg md:text-xl hover:bg-black hover:text-white transition-all duration-500 hover:scale-105 shadow-[0_30px_100px_rgba(255,255,255,0.15)] group"
            >
              SECURE YOUR BLUEPRINT
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
