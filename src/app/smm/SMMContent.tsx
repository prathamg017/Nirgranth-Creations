"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BarChart3, CheckCircle2, Target, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, delay },
});

export default function SMMPremiumPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <main ref={containerRef} className="bg-[#050505] text-white overflow-hidden font-sans selection:bg-[#FF5851] selection:text-white">
      {/* Cinematic Background Grid */}
      <div className="fixed inset-0 z-0 opacity-[0.15]" 
           style={{ backgroundImage: `linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)`, backgroundSize: '4rem 4rem' }}>
      </div>
      
      {/* Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Background Blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#FF5851]/20 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-600/10 blur-[100px] rounded-full"></div>

        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2000"
            alt="Digital Dominance"
            fill
            priority
            className="object-cover opacity-20 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/10 to-[#050505]" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[#FF5851] text-[10px] font-black tracking-[0.5em] mb-10 uppercase"
            >
              <Zap size={14} className="animate-pulse" /> Elite Attention Engineering
            </motion.div>
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black leading-[0.85] tracking-tighter mb-10">
              SOCIAL<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF5851] to-orange-600">DOMINANCE</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/50 max-w-2xl mx-auto mb-16 leading-relaxed font-medium">
              We manufacture authority for 20+ elite brands. Our systems don&apos;t just post content; they engineer influence and drive absolute market authority.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <Link href="#tiers">
                <button className="px-8 py-4 md:px-14 md:py-7 rounded-2xl bg-white text-black font-black text-lg md:text-xl hover:bg-[#FF5851] hover:text-white transition-all duration-500 hover:scale-105 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                  START THE ENGINE
                </button>
              </Link>
              <Link href="#workflow">
                <button className="px-8 py-4 md:px-14 md:py-7 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 text-white font-black text-lg md:text-xl hover:bg-white/10 transition-all duration-500">
                  VIEW BLUEPRINT
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section - UPDATED TO 20+ */}
      <section className="py-24 border-y border-white/5 bg-black/50 backdrop-blur-3xl">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Active Brands", val: "20+" },
              { label: "Content Pieces", val: "500+" },
              { label: "Viral Reach", val: "5M+" },
              { label: "Market Authority", val: "100%" }
            ].map((stat, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)}>
                <div className="text-4xl md:text-6xl font-black text-white mb-2">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-[#FF5851]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-40 relative bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-center">
            <motion.div {...fadeUp(0)}>
              <h2 className="text-4xl md:text-8xl font-black mb-12 leading-[0.95] tracking-tight">
                Engineering <br />
                <span className="text-[#FF5851]">Success.</span>
              </h2>
              <p className="text-xl text-white/40 mb-16 leading-relaxed font-semibold">
                We handle the surgical execution of your digital growth. From high-conversion architecture to algorithm mastery, our team manages every frame of your brand journey.
              </p>
              <div className="grid gap-10">
                {[
                  { t: "Content Architecture", d: "Cinematic planning and high-conversion assets.", icon: Target },
                  { t: "Aggressive Growth", d: "Algorithm mastery that puts you on every screen.", icon: TrendingUp },
                  { t: "Elite Positioning", d: "Crafting a brand image that commands top-dollar.", icon: BarChart3 },
                ].map((item, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="w-16 h-16 rounded-[1.5rem] bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF5851] group-hover:border-[#FF5851] group-hover:rotate-6 transition-all duration-500">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2 text-white/90 group-hover:text-white">{item.t}</h4>
                      <p className="text-white/40 font-medium group-hover:text-white/60 transition-colors">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div {...fadeUp(0.2)} className="relative">
              <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border border-white/10 relative shadow-2xl">
                <Image
                   src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=1000"
                   alt="Elite Strategy"
                   fill
                   className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
              </div>
              {/* Floating Stat Card */}
              <div className="absolute -bottom-10 -left-10 p-10 rounded-[2.5rem] bg-white/10 backdrop-blur-2xl border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
                <div className="text-5xl font-black text-[#FF5851] mb-2 tracking-tighter">20+</div>
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40">Clients Scaled</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section - Inspired by Image Attachment */}
      <section id="tiers" className="py-32 bg-white relative">
        <div className="container mx-auto px-6 text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-[#1a1c20] mb-4"
          >
            Pricing Plans
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#FF5851] mx-auto rounded-full mb-12"></div>
        </div>

        <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {[
              {
                name: "Starter",
                price: "20,000",
                features: {
                  platforms: "2",
                  creatives: "10",
                  reels: "2",
                  ugc: "1",
                  strategy: true,
                  campaigns: false,
                  reporting: "Basic",
                  manager: false
                }
              },
              {
                name: "Growth",
                price: "40,000",
                features: {
                  platforms: "2-3",
                  creatives: "16",
                  reels: "4",
                  ugc: "2",
                  strategy: true,
                  campaigns: true,
                  reporting: "Detailed",
                  manager: false
                }
              },
              {
                name: "Advanced",
                price: "60,000",
                recommended: true,
                features: {
                  platforms: "3-4",
                  creatives: "24",
                  reels: "8",
                  ugc: "4",
                  strategy: true,
                  campaigns: true,
                  reporting: "Advanced",
                  manager: true
                }
              },
              {
                name: "Premium",
                price: "80,000",
                features: {
                  platforms: "4-6",
                  creatives: "40",
                  reels: "15",
                  ugc: "8",
                  strategy: true,
                  campaigns: true,
                  reporting: "Full Suite",
                  manager: true
                }
              }
            ].map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative bg-white rounded-[2.5rem] p-8 ${
                  plan.recommended 
                    ? "ring-2 ring-blue-500 shadow-2xl scale-105 z-10" 
                    : "border border-gray-100 shadow-xl"
                } flex flex-col`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    Recommended
                  </div>
                )}

                <div className="text-center mb-8 pt-4">
                  <h3 className="text-2xl font-black text-gray-800 uppercase mb-4">{plan.name}</h3>
                  <div className="text-3xl lg:text-4xl font-black text-blue-600 tracking-tighter">
                    ₹{plan.price}
                  </div>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">Platforms</span>
                    <span className="text-gray-800 font-black">{plan.features.platforms}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">Creatives</span>
                    <span className="text-gray-800 font-black">{plan.features.creatives}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">Reels</span>
                    <span className="text-gray-800 font-black">{plan.features.reels}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">UGC Videos</span>
                    <span className="text-gray-800 font-black">{plan.features.ugc}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">Strategy</span>
                    <CheckCircle2 size={18} className={plan.features.strategy ? "text-green-500" : "text-gray-200"} />
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">Campaigns</span>
                    <CheckCircle2 size={18} className={plan.features.campaigns ? "text-green-500" : "text-gray-200"} />
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-50">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">Reporting</span>
                    <span className="text-gray-800 font-black">{plan.features.reporting}</span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-gray-400 font-bold uppercase text-[10px]">Account Mgr</span>
                    <CheckCircle2 size={18} className={plan.features.manager ? "text-green-500" : "text-gray-200"} />
                  </div>
                </div>

                <Link href={`/contact?service=SMM&plan=${plan.name}`} className="mt-8 block">
                  <button className={`w-full py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${
                    plan.recommended 
                      ? "bg-blue-600 text-white hover:bg-black" 
                      : "bg-gray-100 text-gray-800 hover:bg-[#FF5851] hover:text-white"
                  }`}>
                    Get Started
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-40 relative">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <motion.div {...fadeUp(0)}>
            <div className="inline-block px-4 py-1 rounded-full border border-[#FF5851]/20 bg-[#FF5851]/10 text-[#FF5851] text-[10px] font-black tracking-[0.3em] mb-10 uppercase">Connect with Experts</div>
            <h3 className="text-4xl md:text-9xl font-black mb-12 tracking-tight leading-none">Ready to <br /><span className="text-[#FF5851]">Dominate?</span></h3>
            <p className="text-xl md:text-2xl text-white/40 mb-16 max-w-2xl mx-auto font-bold leading-relaxed">The journey from zero to inevitable starts with a single execution. Secure your blueprint today.</p>
            <Link href="/contact">
              <button className="px-8 py-5 md:px-16 md:py-8 rounded-2xl md:rounded-[2rem] bg-[#FF5851] text-white font-black text-xl md:text-2xl hover:bg-white hover:text-black transition-all duration-500 hover:scale-110 shadow-[0_30px_100px_rgba(255,88,81,0.3)]">
                START YOUR CHAPTER
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer Branding */}
      <footer className="py-16 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase">Engineered for absolute power. Nirgranth Creations.</p>
      </footer>
    </main>
  );
}
