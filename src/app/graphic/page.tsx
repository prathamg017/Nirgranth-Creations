"use client";

import { motion } from "framer-motion";
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
      <section className="relative overflow-hidden">
        {/* bg layers */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-[20%] left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] rounded-full blur-3xl opacity-40 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600" />
          <div className="absolute bottom-[-30%] right-[-10%] w-[70vw] h-[70vw] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-fuchsia-400 to-sky-400" />
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-28 pb-20">
          <motion.div
            {...fadeUp(0)}
            className="mx-auto max-w-4xl text-center"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-white/10 text-white backdrop-blur border border-white/20">
              ✨ Creative Studio
            </span>
            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow">
              Graphics & Video Editing that
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-200 to-white">
                actually gets you clicks.
              </span>
            </h1>
            <p className="mt-5 text-white/90 text-lg md:text-xl">
              Thumb-stopping social content, cinematic edits, brand kits, motion
              graphics, ads that convert, and everything in-between.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="#portfolio"
                className="px-6 py-3 rounded-full font-semibold text-white bg-black/40 border border-white/20 backdrop-blur hover:scale-105 transition"
              >
                See Portfolio
              </Link>
              <Link
                href="#brief"
                className="px-6 py-3 rounded-full font-semibold bg-white text-pink-700 hover:bg-pink-50 hover:scale-105 transition"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>

          {/* Glass stat bar */}
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

      {/* ===== PORTFOLIO GRID ===== */}
      <section id="portfolio" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            {...fadeUp(0)}
            className="text-2xl md:text-4xl font-extrabold text-gray-900 text-center"
          >
            Selected Work
          </motion.h3>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/bg8.JPG","/bg4.JPG",  "/bg11.JPG", "/bg12.JPG","/bg7.JPG","/bg6.JPG"
            ].map((src, i) => (
              <motion.div
                key={src}
                {...fadeUp(0.05 + i * 0.05)}
                className="group relative h-64 overflow-hidden rounded-3xl bg-gray-100"
              >
                <Image
                  src={src}
                  alt={`Portfolio ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition">
                  <div className="text-sm font-semibold">Case Study #{i + 1}</div>
                  <div className="text-xs text-white/80">
                    Strategy • Design • Motion • Edit
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="#brief"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white font-semibold hover:scale-105 transition"
            >
              Get a free creative moodboard →
            </Link>
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
                name: "Starter",
                price: "₹14,999",
                bullets: [
                  "5 social graphics",
                  "1 short edit (≤30s)",
                  "Brand-safe templates",
                  "2 revisions",
                ],
                cta: "Good for pilots",
              },
              {
                name: "Growth",
                price: "₹39,999",
                bullets: [
                  "15 social graphics",
                  "4 short edits (≤60s)",
                  "Simple motion graphics",
                  "Priority delivery",
                ],
                highlight: true,
                cta: "Best seller",
              },
              {
                name: "Scale",
                price: "₹89,999",
                bullets: [
                  "Unlimited requests*",
                  "Dedicated designer + editor",
                  "Advanced motion/3D",
                  "Slack + weekly sprint",
                ],
                cta: "For teams",
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
                  {p.bullets.map((b) => (
                    <li key={b}>• {b}</li>
                  ))}
                </ul>
                <Link
                  href="#brief"
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
        className="py-24 px-6 text-white bg-gradient-to-r from-pink-600 to-violet-600"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-extrabold leading-snug">
              Tell us your vibe. We’ll ship the aesthetic.
            </h3>
            <p className="mt-3 text-white/90">
              Fill this quick brief—get a free moodboard & timeline within 24 hours.
            </p>
            <ul className="mt-6 space-y-2 text-white/90">
              <li>• Free creative direction sample</li>
              <li>• Package recommendation</li>
              <li>• No hard sells—only clarity</li>
            </ul>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 shadow"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input
                required
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg bg-white text-gray-800"
              />
              <input
                required
                placeholder="Email / Phone"
                className="px-4 py-3 rounded-lg bg-white text-gray-800"
              />
              <select className="px-4 py-3 rounded-lg bg-white text-gray-800 md:col-span-2">
                <option>Brand Kit & Socials</option>
                <option>Video Editing (Shorts/Reels)</option>
                <option>Explainer / Product Video</option>
                <option>Motion Graphics / 3D</option>
                <option>Other</option>
              </select>
              <textarea
                rows={4}
                placeholder="Project goals, references, links…"
                className="px-4 py-3 rounded-lg bg-white text-gray-800 md:col-span-2"
              />
            </div>
            <button className="mt-4 w-full px-6 py-3 rounded-lg bg-white text-pink-700 font-semibold hover:bg-pink-50 transition">
              Get My Free Moodboard
            </button>
          </form>
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
