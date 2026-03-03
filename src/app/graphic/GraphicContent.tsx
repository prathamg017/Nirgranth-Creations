"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

export default function GraphicsVideoEditingPage() {
  return (
    <main className="text-gray-900">
      {/* ===== HERO: Neon Gradient, Glass Card ===== */}
      <section className="relative overflow-hidden min-h-screen">
  {/* Background video */}
  <video
    className="absolute inset-0 w-full h-full object-cover z-0"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source src="/vid.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>

  {/* Subtle dark tint for readability */}
  <div className="absolute inset-0 bg-black/30 z-0" />

  <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
    {/* Glass card for hero text */}
    <motion.div
      {...fadeUp(0)}
      className="mx-auto max-w-4xl text-center bg-black/30 backdrop-blur-sm rounded-2xl p-10 border border-white/10"
    >
      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white backdrop-blur border border-white/30">
        <Sparkles size={14} className="text-yellow-300" /> Creative Studio - Graphics & Video
      </span>
      <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow">
        Graphics &amp; Video Editing that
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-200 to-white">
          actually gets you clicks.
        </span>
      </h1>
      <p className="mt-5 text-white/90 text-lg md:text-xl">
        From stunning graphics to cinematic video edits - we deliver thumb-stopping social content, 
        brand kits, motion graphics, documentaries, ads that convert, and everything in-between.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="#portfolio"
          className="px-6 py-3 rounded-full font-semibold text-white bg-black/40 border border-white/20 backdrop-blur hover:scale-105 transition"
        >
          See Portfolio
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full font-semibold bg-white text-pink-700 hover:bg-pink-50 hover:scale-105 transition"
        >
          Start a Project
        </Link>
      </div>
    </motion.div>

    {/* Stats bar */}
    <motion.div
      {...fadeUp(0.2)}
      className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      {[
        { k: "1,000+", v: "Videos Edited" },
        { k: "200+", v: "Brand Kits" },
        { k: "50M+", v: "Views Generated" },
        { k: "4.9★", v: "Client Rating" },
      ].map((s) => (
        <div
          key={s.v}
          className="rounded-2xl p-6 text-center bg-white/10 text-white backdrop-blur border border-white/20"
        >
          <div className="text-2xl font-extrabold">{s.k}</div>
          <div className="text-white/80">{s.v}</div>
        </div>
      ))}
    </motion.div>
  </div>
</section>


      {/* ===== MARQUEE: niches we serve ===== */}
      <section className="py-8 bg-white">
        <div className="overflow-hidden">
          <div className="flex gap-10 animate-[marquee_18s_linear_infinite] whitespace-nowrap text-sm md:text-base font-medium text-gray-600">
            {[
              "DTC Brands",
              "SaaS Launches",
              "Creators",
              "EdTech",
              "Podcasts",
              "Fintech",
              "Agencies",
              "Healthcare",
              "Sports",
              "Events",
            ]
              .concat([
                "DTC Brands",
                "SaaS Launches",
                "Creators",
                "EdTech",
                "Podcasts",
                "Fintech",
                "Agencies",
                "Healthcare",
                "Sports",
                "Events",
              ])
              .map((t, i) => (
                <span key={i} className="py-2 px-4 rounded-full bg-gray-100">
                  {t}
                </span>
              ))}
          </div>
        </div>
      </section>

      {/* ===== VALUE CARDS: Gen-Z micro interactions ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            {...fadeUp(0)}
            className="text-3xl md:text-5xl font-extrabold text-center"
          >
            Design & Edit, but make it
            <span className="text-pink-600"> performance-driven.</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              {
  title: "Brand Identity & Design",
  desc: "Logos, business cards, social media posts, ads, and everything to make your brand look professional and consistent everywhere.",
  img: "https://i.pinimg.com/1200x/4f/0c/fe/4f0cfea79c07b408ee426c449086a848.jpg",
},
{
  title: "Documentaries & Video Shoots",
  desc: "Professional shoots for events, interviews, and documentaries with editing that tells your story in the most engaging way.",
  img: "https://i.pinimg.com/1200x/21/22/01/212201f4bb596518310e51d48f25cc65.jpg",
},
{
  title: "Video Editing & Storytelling",
  desc: "Reels, ads, YouTube videos, and product promos edited with music, effects, and polish to keep your audience hooked.",
  img: "https://i.pinimg.com/736x/23/73/48/2373484585800d59387e8db783bc40b6.jpg",
},

            ].map((c, i) => (
              <motion.article
                key={c.title}
                {...fadeUp(0.1 + i * 0.1)}
                className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition"
              >
                <div className="relative h-56">
                  <Image
                    src={c.img}
                    alt={c.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{c.title}</h3>
                  <p className="mt-2 text-gray-600">{c.desc}</p>
                </div>
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition">
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-pink-500/20 to-transparent" />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== THE PORTFOLIO GLIMPSE: Simplified Integration ===== */}
      <section id="portfolio" className="py-32 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            {...fadeUp(0)}
            className="mb-16 flex flex-col md:flex-row items-end justify-between gap-6"
          >
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#FF5851] mb-4 block">Portfolio Selection</span>
              <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter leading-[0.9] italic uppercase">
                THE PORTFOLIO<br />
                <span className="text-[#FF5851]">GLIMPSE</span>
              </h2>
            </div>
            <Link href="/portfolio" className="text-sm font-black uppercase text-[#FF5851] hover:underline tracking-widest border-2 border-[#FF5851] px-6 py-2 rounded-full transition-all hover:bg-[#FF5851] hover:text-white">
              Explore Full Exhibition
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { src: "/portfolio-ace.jpg", title: "ACE Pickleball", tag: "Sports Strategy", desc: "High-octane social strategy & visual identity." },
              { src: "/portfolio-asian.jpg", title: "Asian Heart", tag: "Medical Identity", desc: "Trust-centric clinical branding ecosystems." },
              { src: "/portfolio-jia.jpg", title: "JIA Minimal", tag: "Brand Architecture", desc: "Clean geometric corporate systems." },
              { src: "/portfolio-shrut.jpg", title: "Shrut Swaranjali", tag: "Luxury Events", desc: "Golden-tier design for cultural summits." },
              { src: "/portfolio-mavshakti.jpg", title: "Mavshakti Digital", tag: "Ecosystem Design", desc: "Unified tech presence bridging web & brand." },
              { src: "/portfolio-realestate.jpg", title: "Nirgranth Estate", tag: "Architectural Narratives", desc: "Massive outdoor narratives for luxury real estate." }
            ].map((work, i) => (
              <motion.div
                key={work.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative aspect-video rounded-3xl overflow-hidden glass-card cursor-pointer border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={work.src}
                  alt={work.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 text-left translate-y-4 group-hover:translate-y-0">
                  <span className="text-[#FF5851] text-[10px] font-black uppercase tracking-[0.3em] mb-2">{work.tag}</span>
                  <h4 className="text-white font-black text-2xl uppercase tracking-tighter leading-tight mb-2">{work.title}</h4>
                  <p className="text-white/70 text-sm font-bold leading-relaxed">{work.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS STRIP ===== */}
      <section className="py-16 px-6 bg-gradient-to-r from-pink-50 via-white to-pink-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Brief", desc: "We map goals, audience, and vibe." },
            { step: "02", title: "Moodboard", desc: "References, color, typography, motion." },
            { step: "03", title: "Make", desc: "Design + edit in fast, feedback-friendly sprints." },
            { step: "04", title: "Launch", desc: "Export for all platforms and placements." },
          ].map((p, i) => (
            <motion.div
              key={p.step}
              {...fadeUp(0.05 + i * 0.05)}
              className="rounded-2xl p-6 bg-white shadow-sm border border-pink-100"
            >
              <div className="text-pink-600 font-extrabold">{p.step}</div>
              <div className="mt-2 text-lg font-semibold">{p.title}</div>
              <p className="mt-1 text-gray-600">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-4xl font-extrabold text-center"
          >
            Flexible plans. Clear deliverables.
          </motion.h3>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Graphic Design",
                price: "₹649",
                items: [
                  "Single Social Graphic",
                  "Professional Design",
                  "High Resolution",
                  "Fast Delivery",
                ],
                cta: "Starter",
              },
              {
                name: "Video Editing",
                price: "₹1,199+",
                items: [
                  "Professional Cuts & Transitions",
                  "Color Correction",
                  "Sound Syncing",
                  "Social Media Reels/Shorts",
                ],
                highlight: true,
                cta: "Best seller",
              },
              {
                name: "AI Video Creation",
                price: "₹1,499+",
                items: [
                  "AI Avatar Synthesis",
                  "Script-to-Video Generation",
                  "Professional Voiceover",
                  "Modern AI Storytelling",
                ],
                cta: "Trending",
              },
            ].map((p) => (
              <motion.div
                key={p.name}
                {...fadeUp(0.05)}
                className={`rounded-3xl p-8 shadow-lg border ${
                  p.highlight
                    ? "bg-gradient-to-b from-pink-50 to-white border-pink-200"
                    : "bg-white border-gray-100"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-bold">{p.name}</h4>
                  {p.highlight && (
                    <span className="px-3 py-1 text-xs rounded-full bg-pink-600 text-white">
                      {p.cta}
                    </span>
                  )}
                </div>
                <div className="mt-4 text-4xl font-extrabold">{p.price}</div>
                <ul className="mt-4 space-y-2 text-gray-700">
                  {p.items.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <Link
                  href={`/contact?service=Graphic-Design-and-Video-Editing&plan=${p.name}`}
                  className={`mt-6 inline-block px-5 py-3 rounded-full font-semibold ${
                    p.highlight
                      ? "bg-pink-600 text-white hover:bg-pink-500"
                      : "bg-black text-white hover:opacity-90"
                  } transition`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-500 mt-4">
            *Fair usage policy applies for “Unlimited”.
          </p>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 px-6 bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-4xl font-extrabold text-center"
          >
            Loved by founders & creators
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              {
                quote:
                  "They rebuilt our visual identity and edits—CTR doubled on ads in 3 weeks.",
                author: "Rhea • DTC Founder",
              },
              {
                quote:
                  "Fast, reliable, and tasteful. Our reels finally look premium.",
                author: "Arjun • Creator",
              },
              {
                quote:
                  "Brief to launch in 10 days with motion—wildly efficient.",
                author: "Meera • SaaS PMM",
              },
            ].map((t) => (
              <motion.blockquote
                key={t.author}
                {...fadeUp(0.05)}
                className="rounded-2xl p-6 bg-white shadow border border-pink-100"
              >
                <p className="text-gray-800">“{t.quote}”</p>
                <footer className="mt-3 text-sm text-gray-500">— {t.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BRIEF FORM / CTA ===== */}
      <section
        id="brief"
        className="py-24 px-6 text-white"
        style={{ backgroundColor: '#FF5851' }}
      >
        <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-5xl font-extrabold leading-snug mb-8">
              Tell us your vibe. We’ll ship the aesthetic.
            </h3>
            <p className="mt-4 text-white/90 text-lg mb-10">
              Stop waiting — get a professional consultation and timeline within 24 hours.
            </p>
            <Link href="/contact?service=Graphic-Design-and-Video-Editing">
              <button className="px-12 py-6 rounded-full bg-white text-pink-600 font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                SECURE YOUR CREATIVE SLOT
              </button>
            </Link>
        </div>
      </section>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </main>
  );
}
