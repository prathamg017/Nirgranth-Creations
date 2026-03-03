"use client";
import { motion } from "framer-motion";
import { ArrowLeft, ShieldCheck, Sparkles, Target, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="bg-white overflow-hidden">
      {/* Cinematic Hero: The Origin Story */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-4 md:px-6 bg-gray-900 border-b-8 border-[#FF5851]">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src="/bg1.JPG" 
            alt="Studio Origin" 
            fill 
            className="object-cover grayscale"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/40 to-gray-900" />
        
        <div className="container mx-auto max-w-7xl relative z-10 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#FF5851] text-[10px] font-black uppercase tracking-[0.5em] mb-8 block underline decoration-[#FF5851]/30 underline-offset-8">The Nirgranth Legacy</span>
            <h1 className="text-5xl md:text-9xl font-black text-white leading-[0.8] tracking-tighter uppercase italic mb-12">
              BEYOND THE<br />
              <span className="text-[#FF5851]">ORDINARY.</span>
            </h1>
            <p className="text-white/60 text-lg md:text-2xl max-w-2xl font-bold leading-relaxed mb-16">
              Nirgranth Creations is not just a studio; it is a high-execution workshop where traditional narratives are weaponized with modern digital technology.
            </p>
            
            <div className="flex flex-wrap gap-8 justify-center md:justify-start">
              <div className="flex flex-col">
                <span className="text-white font-black text-3xl text-center md:text-left">EST. 2019</span>
                <span className="text-[#FF5851] text-xs font-black uppercase tracking-widest">Global Creative Hub</span>
              </div>
              <div className="w-px h-16 bg-white/10 hidden md:block" />
              <div className="flex flex-col">
                <span className="text-white font-black text-3xl">100+</span>
                <span className="text-[#FF5851] text-xs font-black uppercase tracking-widest">Projects Executed</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Core: Authority & Precision */}
      <section className="py-24 md:py-48 px-4 md:px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-gray-100 shadow-3xl"
            >
              <Image src="/recording.jpg" alt="Execution Precision" fill className="object-cover" />
              <div className="absolute inset-0 bg-[#FF5851]/10 mix-blend-overlay" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter uppercase italic mb-6">
                  OUR <span className="text-[#FF5851]">PHILOSOPHY</span>
                </h2>
                <p className="text-gray-500 text-lg font-bold leading-relaxed italic border-l-4 border-[#FF5851] pl-6">
                  "We believe that every story deserves a voice that cannot be ignored. We don't just record audio or design graphics; we manufacture authority for your brand."
                </p>
              </div>

              <div className="grid gap-8">
                {[
                  { icon: Target, title: "Strategic Intent", desc: "Every pixel and every wave-form is crafted with a specific outcome in mind. No filler, just impact." },
                  { icon: Zap, title: "High Execution", desc: "We bridge the gap between abstract ideas and market-ready dominance." },
                  { icon: ShieldCheck, title: "Legacy Standard", desc: "Built to last. We focus on preserving culture and identity for the future." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-16 h-16 rounded-2xl bg-[#FF5851]/10 flex items-center justify-center shrink-0 group-hover:bg-[#FF5851] transition-colors">
                      <item.icon size={28} className="text-[#FF5851] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-xl font-black text-gray-900 uppercase tracking-tight">{item.title}</h4>
                      <p className="text-gray-500 font-bold leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Mastery Ticker */}
      <section className="bg-gray-900 py-32 overflow-hidden">
        <div className="flex gap-20 animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex gap-20 items-center">
              <span className="text-5xl md:text-8xl font-black text-white/5 tracking-tighter uppercase italic">Dominance • Precision • Authority • Strategy</span>
              <span className="text-5xl md:text-8xl font-black text-[#FF5851]/20 tracking-tighter uppercase italic">Legacy • Execution • Excellence • Nirgranth</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-48 px-4 md:px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Sparkles className="mx-auto text-[#FF5851] mb-8" size={64} />
            <h2 className="text-4xl md:text-8xl font-black text-gray-900 tracking-tighter uppercase italic mb-8">
              READY TO BE<br />
              <span className="text-[#FF5851]">UNFORGETTABLE?</span>
            </h2>
            <p className="text-gray-500 text-xl font-bold mb-16 max-w-2xl mx-auto">
              Join the elite ranks of brands and creators that have scaled their vision with Nirgranth Creations.
            </p>
            <Link href="/contact?service=General-Inquiry" className="inline-flex items-center gap-6 px-16 py-8 bg-gray-900 text-white rounded-full font-black uppercase tracking-[0.3em] hover:bg-[#FF5851] transition-all shadow-3xl group">
              Start The Mission <ArrowLeft size={24} className="rotate-180 group-hover:translate-x-4 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
